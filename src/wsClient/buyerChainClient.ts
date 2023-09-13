import { BaseChainClient } from './base';
import { getChain } from '../chains';
import { WalletClient } from '../walletClient';
import {
  ChainActionResult,
  RpcParams,
  RpcResult,
  StorageItem,
  SubstrateApiProps
} from './types';
import { IpfsContent } from '@subsocial/api/substrate/wrappers';
import { BN } from 'bn.js';
import '@polkadot/api-augment';
import { StatusesMng } from '../utils/statusesManager';
import {
  ProcessorConfig,
  TokenDetails
} from '../chains/interfaces/processorConfig';
import { UnsubscribePromise } from '@polkadot/api-base/types/base';
import { Header } from '@polkadot/types/interfaces/runtime/types';
import { hexToNumber, stringToU8a } from '@polkadot/util';
import { BlockHash } from '@polkadot/types/interfaces/chain/types';
import { sleepTo } from '../utils';
import { toHex } from '@subsquid/util-internal-hex';
import axios from 'axios';
import { PalletName } from '@subsocial/api/types';

const BLOCK_TIME = 12;
const SECS_IN_DAY = 60 * 60 * 24;
const BLOCKS_IN_YEAR = new BN((SECS_IN_DAY * 365) / BLOCK_TIME);

export class BuyerChainClient extends BaseChainClient {
  private static instance: BuyerChainClient;
  private chainConfig: ProcessorConfig;
  private unsubscribeNewHeads: UnsubscribePromise | null = null;
  private socialCustomRpcClient: SocialCustomRpcClient;

  constructor() {
    super({
      apiUrl: getChain().config.buyerChain.dataSource.chain
    });
    this.chainConfig = getChain().config;
    this.socialCustomRpcClient = new SocialCustomRpcClient({
      rpcUrl: this.chainConfig.buyerChain.dataSource.rpcHttpUrl
    });
  }

  static getInstance(): BuyerChainClient {
    if (!BuyerChainClient.instance) {
      BuyerChainClient.instance = new BuyerChainClient();
    }
    return BuyerChainClient.instance;
  }

  async subscribeNewHeads(handler: (header: Header) => void) {
    this.unsubscribeNewHeads = this.api.rpc.chain.subscribeNewHeads(
      (header: Header) => {
        handler(header);
      }
    );
  }

  async getRelayBlockNumberByParaBlockHash(
    hash: BlockHash
  ): Promise<number | null> {
    // const apiAt = await this.api.at(hash);

    try {
      return hexToNumber(
        (
          await this.api.query.parachainSystem.lastRelayChainBlockNumber.at(
            hash
          )
        ).toHex()
      );
    } catch (e) {
      return null;
    }
  }

  async getRegisteredDomains(domainNames: string[], atBlock?: string) {
    let structs = [];

    console.log('atBlock - ', atBlock);

    if (atBlock) {
      const apiAt = await this.api.at(atBlock);
      structs = await apiAt.query.domains.registeredDomains.multi(domainNames);
    } else {
      structs = await this.api.query.domains.registeredDomains.multi(
        domainNames
      );
    }

    // @ts-ignore
    return structs.filter((x) => x.isSome).map((x) => x.unwrap());
  }

  /**
   * Returns domain registration price in seller chain token (DOT || ROC)
   */
  async getDomainRegistrationPrice({
    domain,
    tokenData,
    atBlock
  }: {
    domain: string;
    tokenData: TokenDetails;
    atBlock?: string;
  }): Promise<bigint | null> {
    const correctorCoeff = 1000;

    try {
      let domainPriceNativeToken =
        await this.socialCustomRpcClient.calculatePrice(domain, atBlock);

      console.log(
        `domainPriceNativeToken - ${domainPriceNativeToken} at block - ${atBlock}`
      );

      if (
        domainPriceNativeToken === null ||
        domainPriceNativeToken === undefined
      )
        return null;

      const depositNativeToken = new BN(domainPriceNativeToken);

      return BigInt(
        depositNativeToken
          .mul(
            new BN(
              Number.parseFloat(tokenData.coefficientWithBuyerToken) *
                correctorCoeff
            )
          )
          .div(new BN(correctorCoeff))
          .toString()
      );
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async getDomainsByOwner(account: string): Promise<string[] | null> {
    try {
      const resp = await this.api.query.domains.domainsByOwner(account);
      return ((resp.toHuman() as Array<string>) || []).map((d) => d.toString());
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async registerDomain({
    target,
    domain
  }: {
    target: string;
    domain: string;
  }): Promise<ChainActionResult> {
    return new Promise(async (resolve, reject) => {
      try {
        const domainRegistrationTx = this.api.tx.domains.registerDomain(
          target,
          domain,
          IpfsContent(),
          BLOCKS_IN_YEAR
        );

        console.log(
          'domainRegistrationTx hash - ',
          domainRegistrationTx.hash.toHex()
        );

        // const sudoWrappedTx = this.api.tx.sudo.sudo(domainRegistrationTx);

        /**
         * Delay is required here to avoid such errors like:
         * RpcError: 1014: Priority is too low: (*** vs ***): The transaction has too low priority to replace another transaction already in the pool
         */
        await sleepTo(500);

        // console.log('sudoWrappedTx hash - ', sudoWrappedTx.hash.toHex());

        // const sudoKey = await this.api.query.sudo.key();

        // TODO add handling tx errors which is terminating an app (e.g. RpcError: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low)

        // const unsub = await this.api.tx.proxy
        // .proxy(sudoKey.toString(), null, sudoWrappedTx)
        const unsub = await domainRegistrationTx.signAndSend(
          WalletClient.getInstance().account.domainRegistrar,
          async (resp) => {
            const { status, txHash, txIndex, dispatchError, isCompleted } =
              resp;

            console.log('txHash >>>');
            console.dir(txHash.toHex(), { depth: null });

            console.log('txIndex >>>');
            console.dir(txIndex, { depth: null });

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
              console.log(
                `Successful registration of domain ${domain} for address ${target}`
              );
              console.log(
                'status.asInBlock.toHex() - ',
                status.asInBlock.toHex()
              );
              resolve({
                success: true,
                blockHash: status.asInBlock.toHex()
              });
              unsub();
              return;
            } else {
              console.log(`Status of registration: ${status.type}`);
            }

            if (isCompleted) {
              unsub();
            }
          }
        );
      } catch (e: unknown) {
        console.log(e);
        reject({
          ...StatusesMng.getStatusWithReason('Common', 'ErrorUnknown'),
          success: false,
          reason:
            // @ts-ignore
            e && e.message
              ? // @ts-ignore
                e.message.toString()
              : 'Transaction error has been occurred.',
          ...(await this.getBlockMeta())
        });
        return;
      }
    });
  }
}

class SocialCustomRpcClient {
  private rpcUrl: string;

  constructor({ rpcUrl }: SubstrateApiProps) {
    this.rpcUrl = rpcUrl;
  }

  private createRpcJson(
    { moduleName, method }: StorageItem,
    params: RpcParams
  ) {
    return {
      jsonrpc: '2.0',
      id: 1,
      method: `${moduleName}_${method}`,
      params
    };
  }

  private async rpcQuery<Params, Result = any>(
    method: StorageItem,
    value?: Params
  ): Promise<Result | undefined> {
    try {
      const params = Array.isArray(value) ? value : [value];
      const { data, status, statusText } = await axios.post<RpcResult>(
        this.rpcUrl,
        this.createRpcJson(method, [...params]),
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (status !== 200) {
        throw statusText;
      }

      return data.result;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  private async queryDomains(method: string, value?: any): Promise<any> {
    return this.rpcQuery({ moduleName: 'domains', method }, value);
  }

  async calculatePrice(domain: string, atBlock?: string): Promise<any> {
    const domainU8a = stringToU8a(domain);

    return this.queryDomains('calculatePrice', [
      Array.from(domainU8a),
      ...(atBlock ? [atBlock] : [])
    ]);
  }
}
