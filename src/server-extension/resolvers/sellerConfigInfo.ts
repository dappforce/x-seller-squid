import { Query, Resolver } from 'type-graphql';
import 'reflect-metadata';
import assert from 'assert';
import { getChain } from '../../chains';
import { SellerConfigInfo } from '../model/sellerConfigInfo.model';
import { BuyerChainClient } from '../../wsClient';

@Resolver()
export class SellerConfigInfoResolver {
  @Query(() => SellerConfigInfo)
  async sellerConfigInfo(): Promise<SellerConfigInfo> {
    const { config } = getChain();
    assert(config != null);

    const registrationPrice = await (
      await BuyerChainClient.getInstance().init()
    ).getDomainRegistrationPrice(config.sellerChain.token);

    assert(registrationPrice != null);

    return new SellerConfigInfo({
      sellerChain: config.sellerChain.chainName,
      sellerChainPrefix: config.sellerChain.prefix,
      domainHostChain: config.buyerChain.chainName,
      domainHostChainPrefix: config.buyerChain.prefix,
      sellerToken: {
        name: config.sellerChain.token.name,
        decimal: config.sellerChain.token.decimal
      },
      remarkProtName: config.sellerChain.remark.protName,
      remarkProtVersion: config.sellerChain.remark.version,
      domainRegistrationPriceFixed: registrationPrice
    });
  }
}
