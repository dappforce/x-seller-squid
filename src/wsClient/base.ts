import { ApiPromise, WsProvider } from '@polkadot/api';
import { ApiClientListeners, ChainActionResult } from './types';
import { ChainClientError } from './chainClientError';
import { KeyringPair } from '@polkadot/keyring/types';
import { ExtrinsicStatus } from '@polkadot/types/interfaces/author/types';
import { DispatchError } from '@polkadot/types/interfaces/system/types';
import { SubmittableExtrinsic } from '@polkadot/api/promise/types';
import type { ISubmittableResult } from '@polkadot/types/types';
import { StatusesMng } from '../utils/statusesManager';

type ClientArgs = {
  apiUrl: string;
  maxRetries?: number;
  clientListeners?: ApiClientListeners;
};

class WsClient {
  protected client: ApiPromise | null = null;

  private maxRetries: number = 20;

  private apiUrl: string = 'ws://127.0.0.1:9944';

  public clientError: ChainClientError = new ChainClientError();

  private clientListeners: ApiClientListeners = {
    error: (e: Error): void => {},
    connected: (api?: ApiPromise): void => {},
    disconnected: (): void => {},
    ready: (api?: ApiPromise): void => {}
  };

  constructor({ apiUrl, maxRetries, clientListeners }: ClientArgs) {
    this.apiUrl = apiUrl;
    this.maxRetries = maxRetries ?? this.maxRetries;
    this.clientListeners = clientListeners
      ? { ...this.clientListeners, ...clientListeners }
      : this.clientListeners;
  }

  get api(): ApiPromise {
    this.ensureClient();
    return this.client!;
  }

  protected ensureClient(): void | never {
    if (!this.client) throw new Error('WS client is not available.');
  }

  protected async initConnection() {
    return new Promise<ApiPromise>(async (resolve, reject) => {
      const wsProvider = new WsProvider(this.apiUrl, false);
      let reconnectionsIndex = 0;
      let isDisconnection = false;

      /**
       * Recovering connection to WS. Will be done "reconnectionsNumber" attempts.
       * If connection is not recovered, API listener "error" will be executed.
       */
      const recoverConnection = (error: Error) => {
        if (reconnectionsIndex < this.maxRetries) {
          setTimeout(() => {
            wsProvider.connect();
            reconnectionsIndex++;
            console.log(`Reconnection - #${reconnectionsIndex}`);
          }, 500);
        } else {
          reconnectionsIndex = 0;
          // TODO implement onReconnectionFailed handler
          console.warn(
            `Reconnection to ${this.apiUrl} has failed after ${this.maxRetries} attempts.`
          );
          this.clientListeners.error(error);
        }
      };

      /**
       * We need setup websocket listeners "on" before running connection.
       */
      wsProvider.on('error', async (error: Error) => {
        this.client = null;
        recoverConnection(error);
      });

      wsProvider.on('connected', async () => {
        // If API is existing, we return API instance
        // TODO should be reviewed in case disconnection
        if (this.client) {
          resolve(this.client);
          return;
        }

        await new ApiPromise({
          provider: wsProvider,
          noInitWarn: true
        })
          .on('error', (e) => {
            this.client = null;
            if (!isDisconnection) {
              this.clientListeners.error(e);
              reject(e);
            }
          })
          .on('connected', () => {
            this.clientListeners.connected();
            // resolve('connected');
            isDisconnection = false;
          })
          .on('disconnected', () => {
            /**
             * This event happens when connection has been lost and each time, when
             * connection attempt has been done with error.
             */
            this.client = null;
            if (!isDisconnection) {
              this.clientListeners.disconnected();
              reject();
              isDisconnection = true;
              wsProvider.connect();
            }
          })
          .on('ready', (apiInstance: ApiPromise) => {
            this.client = apiInstance;

            this.clientListeners.ready(this.client);
            resolve(this.client);
          })
          .isReadyOrError.then((apiResponse: ApiPromise) => {
            this.client = apiResponse;

            this.clientListeners.connected(this.client);
            resolve(this.client);
          })
          .catch((e) => {
            this.clientListeners.error(e);
            reject(e);
          });
      });

      wsProvider.connect();
    });
  }
}

export class BaseChainClient extends WsClient {
  constructor(props: ClientArgs) {
    super(props);
  }

  async init() {
    if (this.client) return this;
    await this.initConnection();
    return this;
  }

  async getBlockMeta(): Promise<{
    blockHeight: number;
    blockHash: string;
  }> {
    const height = Number.parseInt(
      (await this.api.query.system.number()).toString()
    );

    return {
      blockHeight: height,
      blockHash: (await this.api.query.system.blockHash(height)).toString()
    };
  }

  async sendRemark(
    sender: KeyringPair,
    msg: string
  ): Promise<ChainActionResult> {
    return new Promise(async (resolve, reject) => {
      const unsub = await this.api.tx.system
        .remark(msg)
        .signAndSend(sender, async (resp) => {
          const { status, txHash, txIndex, dispatchError, isCompleted } = resp;

          if (dispatchError) {
            reject({
              ...StatusesMng.getStatusWithReason('WsClient', 'ErrorCommon'),
              reason: this.getTxSubDispatchErrorMessage(dispatchError),
              success: false,
              blockHash: this.getTxSubDispatchErrorBlockHash(status)
            });
            unsub();
            return;
          }

          if (status.isInBlock) {
            resolve({
              success: true,
              blockHash: status.asInBlock.toHex(),
              txHash: txHash.toHex(),
              txIndex,
            });
            unsub();
            return;
          } else {
            console.log(`Status of sending: ${status.type}`);
          }

          if (isCompleted) {
            unsub();
          }
        });
    });
  }

  async sendBatchAll(
    sender: KeyringPair,
    transactions: Array<unknown> // TODO fix types
  ): Promise<ChainActionResult> {
    return new Promise(async (resolve, reject) => {
      const unsub = await this.api.tx.utility
        .batchAll(transactions)
        .signAndSend(sender, async (resp) => {
          const { status, txHash, txIndex, dispatchError, isCompleted } = resp;

          if (dispatchError) {
            reject({
              ...StatusesMng.getStatusWithReason('WsClient', 'ErrorCommon'),
              success: false,
              reason: this.getTxSubDispatchErrorMessage(dispatchError),
              blockHash: this.getTxSubDispatchErrorBlockHash(status)
            });
            unsub();
            return;
          }

          if (status.isInBlock) {
            resolve({
              success: true,
              blockHash: status.asInBlock.toHex(),
              txHash: txHash.toHex(),
              txIndex
            });
            unsub();
            return;
          } else {
            console.log(`Status of sending: ${status.type}`);
          }

          if (isCompleted) {
            unsub();
          }
        });
    });
  }

  public getTxSubDispatchErrorMessage(error: DispatchError): string {
    let errorMsg = '';
    if (error.isModule) {
      // for module errors, we have the section indexed, lookup
      const decoded = this.api.registry.findMetaError(error.asModule);
      const { docs, name, section } = decoded;
      console.log(`${section}.${name}: ${docs.join(' ')}`);
      errorMsg = `${section}.${name}: ${docs.join(' ')}`;
    } else {
      // Other, CannotLookup, BadOrigin, no extra info
      console.log(error.toString());
      errorMsg = error.toString();
    }
    return errorMsg;
  }

  public getTxSubDispatchErrorBlockHash(status: ExtrinsicStatus): string {
    if (status.asInBlock) {
      return status.asInBlock.toHex();
    } else if (status.asFinalized) {
      return status.asFinalized.toHex();
    }
    return '';
  }
}
