import { ApiPromise, WsProvider } from '@polkadot/api';
import { ApiClientListeners } from './types';
import { ChainClientError } from './chainClientError';

type ClientArgs = {
  apiUrl: string;
  maxRetries?: number;
  clientListeners?: ApiClientListeners;
};

export class WsClient {
  protected client: ApiPromise | null = null;

  private maxRetries: number = 20;

  private apiUrl: string = 'ws://127.0.0.1:9944';

  protected clientError: ChainClientError = new ChainClientError();

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
