import { Query, Resolver } from 'type-graphql';
import 'reflect-metadata';
import assert from 'assert';
import { getChain } from '../../chains';
import { SellerConfigInfo } from '../model/sellerConfigInfo.model';

@Resolver()
export class SellerConfigInfoResolver {
  @Query(() => SellerConfigInfo)
  sellerConfigInfo(): SellerConfigInfo {
    const { config } = getChain();
    assert(config != null);

    return new SellerConfigInfo({
      sellerChain: config.sellerChain.chainName,
      sellerChainPrefix: config.sellerChain.prefix,
      domainHostChain: config.buyerChain.chainName,
      domainHostChainPrefix: config.buyerChain.prefix,
      token: config.sellerChain.token,
      remarkProtName: config.sellerChain.remark.protName,
      remarkProtVersion: config.sellerChain.remark.version
    });
  }
}
