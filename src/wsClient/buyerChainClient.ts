import { WsClient } from './base';
import { getChain } from '../chains';
import { WalletClient } from '../walletClient';
import { ChainActionResult } from './types';
import { ApiPromise } from '@polkadot/api';
import { IpfsContent } from '@subsocial/api/substrate/wrappers';
const { config } = getChain();
import { BN } from 'bn.js';
import { encodeAccount } from '../utils';

const BLOCK_TIME = 12;
const SECS_IN_DAY = 60 * 60 * 24;
const BLOCKS_IN_YEAR = new BN((SECS_IN_DAY * 365) / BLOCK_TIME);

export class BuyerChainClient extends WsClient {
  private static instance: BuyerChainClient;

  constructor() {
    super({
      apiUrl: config.buyerChain.dataSource.chain
    });
  }

  get api(): ApiPromise {
    this.ensureClient();
    return this.client!;
  }

  static getInstance(): BuyerChainClient {
    if (!BuyerChainClient.instance) {
      BuyerChainClient.instance = new BuyerChainClient();
    }
    return BuyerChainClient.instance;
  }

  async init() {
    if (this.client) return;
    await this.initConnection();
  }

  async getEventsCall() {
    if (!this.client) throw new Error();
    return this.client.query.system.account(
      WalletClient.getInstance().account.sellerTreasury.address
    );
  }

  async registeredDomains(domainNames: string[]) {
    const structs = await this.api.query.domains.registeredDomains.multi(
      domainNames
    );

    // @ts-ignore
    return structs.filter((x) => x.isSome).map((x) => x.unwrap());
  }

  async registerDomain({
    registrant,
    domain
  }: {
    registrant: string;
    domain: string;
  }): Promise<ChainActionResult> {
    return new Promise(async (resolve, reject) => {
      const result: ChainActionResult = {
        success: false,
        blockHeight: undefined,
        blockHash: undefined
      };

      const existingDomain = await this.registeredDomains([domain]);

      if (!existingDomain) {
        reject({
          success: false,
          status: 10100,
          reason: `registeredDomains request is failed`,
          ...(await this.getBlockMeta())
        });
        return;
      }

      // console.log('existingDomain >>> ');
      // console.dir(existingDomain, { depth: null });

      if (existingDomain.length > 0) {
        // for (const dom of existingDomain) {
        //   console.dir(dom.owner.toString(), { depth: null });
        //   console.dir(dom.owner, { depth: null });
        // }
        const domainsOwnedByRegistrant = existingDomain.find(
          (d) => d.get('owner').toString() === registrant
        );

        reject({
          success: false,
          ...(domainsOwnedByRegistrant
            ? this.clientError.getError(20101)
            : this.clientError.getError(20100)),
          ...(await this.getBlockMeta())
        });
        return;
      }

      if (!domain.endsWith('sub')) {
        reject({
          success: false,
          ...this.clientError.getError(20200),
          ...(await this.getBlockMeta())
        });
        return;
      }

      // TODO use toNumber instead of toHuman
      const minDomainLength =
        this.api.consts.domains.minDomainLength.toString();

      if (!minDomainLength) {
        reject({
          success: false,
          status: 10100,
          reason: 'minDomainLength request is failed',
          ...(await this.getBlockMeta())
        });
        return;
      }

      if (domain.length < Number.parseInt(minDomainLength)) {
        reject({
          success: false,
          ...this.clientError.getError(20300),
          ...(await this.getBlockMeta())
        });
        return;
      }

      try {
        const domainRegistrationTx = this.api.tx.domains.forceRegisterDomain(
          registrant,
          domain,
          IpfsContent(),
          BLOCKS_IN_YEAR
        );

        console.log(
          'domainRegistrationTx hash - ',
          domainRegistrationTx.hash.toHex()
        );

        const sudoWrappedTx = this.api.tx.sudo.sudo(domainRegistrationTx);

        console.log('sudoWrappedTx hash - ', sudoWrappedTx.hash.toHex());

        const sudoKey = await this.api.query.sudo.key();

        // TODO add handling tx errors which is terminating app (e.g. RpcError: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low)
        const unsub = await this.api.tx.proxy
          .proxy(sudoKey.toString(), null, sudoWrappedTx)
          .signAndSend(
            WalletClient.getInstance().account.domainRegistrar,
            async (resp) => {
              const { status, txHash, txIndex, dispatchError } = resp;

              console.log('txHash >>>');
              console.dir(txHash.toHex(), { depth: null });

              console.log('txIndex >>>');
              console.dir(txIndex, { depth: null });

              if (dispatchError) {
                let errorMsg = '';
                if (dispatchError.isModule) {
                  // for module errors, we have the section indexed, lookup
                  const decoded = this.api.registry.findMetaError(
                    dispatchError.asModule
                  );
                  const { docs, name, section } = decoded;
                  console.log(`${section}.${name}: ${docs.join(' ')}`);
                  errorMsg = `${section}.${name}: ${docs.join(' ')}`;
                } else {
                  // Other, CannotLookup, BadOrigin, no extra info
                  console.log(dispatchError.toString());
                  errorMsg = dispatchError.toString();
                }

                let blockHash = '';
                if (status.asInBlock) {
                  blockHash = status.asInBlock.toHex();
                } else if (status.asFinalized) {
                  blockHash = status.asFinalized.toHex();
                }

                reject({
                  success: false,
                  status: 10100,
                  reason: errorMsg,
                  blockHash
                });
                unsub();
                return;
              }

              if (status.isInBlock) {
                console.log(
                  `Successful registration of domain ${domain} for address ${registrant}`
                );
                console.log(
                  'status.asInBlock.toHex() - ',
                  status.asInBlock.toHex()
                );
                resolve({ success: true, blockHash: status.asInBlock.toHex() });
                unsub();
                return;
              } else {
                console.log(`Status of registration: ${status.type}`);
              }
            }
          );
      } catch (e: unknown) {
        console.log(e);
        reject({
          success: false,
          status: 10100,
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

  private async getBlockMeta(): Promise<{
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
}
