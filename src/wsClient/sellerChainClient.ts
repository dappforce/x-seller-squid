import { WsClient } from './base';
import { getChain } from '../chains';
import { WalletClient } from '../walletClient';

const { config } = getChain();

export class SellerChainClient extends WsClient {
  private static instance: SellerChainClient;

  constructor() {
    super({
      apiUrl: config.sellerChain.dataSource.chain
    });
  }

  static getInstance(): SellerChainClient {
    if (!SellerChainClient.instance) {
      SellerChainClient.instance = new SellerChainClient();
    }
    return SellerChainClient.instance;
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
}
