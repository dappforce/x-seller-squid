import { BaseChainClient } from './base';
import { getChain } from '../chains';

export class SellerChainClient extends BaseChainClient {
  private static instance: SellerChainClient;

  constructor() {
    super({
      apiUrl: getChain().config.sellerChain.dataSource.chain
    });
  }

  static getInstance(): SellerChainClient {
    if (!SellerChainClient.instance) {
      SellerChainClient.instance = new SellerChainClient();
    }
    return SellerChainClient.instance;
  }
}
