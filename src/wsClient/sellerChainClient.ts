import { BaseChainClient } from './base';
import { getChain } from '../chains';
import { WalletClient } from '../walletClient';

const { config } = getChain();

export class SellerChainClient extends BaseChainClient {
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
}
