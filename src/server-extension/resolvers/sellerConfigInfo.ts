import { Query, Resolver } from 'type-graphql';
import 'reflect-metadata';
import assert from 'assert';
import { getChain } from '../../chains';
import { SellerConfigInfo } from '../model/sellerConfigInfo.model';
import { BuyerChainClient } from '../../wsClient';
import { WalletClient } from '../../walletClient';

@Resolver()
export class SellerConfigInfoResolver {
  @Query(() => SellerConfigInfo)
  async sellerConfigInfo(): Promise<SellerConfigInfo> {
    const { config } = getChain();
    assert(config != null);

    // TODO Return domains price config instead of registrationPrice
    // const registrationPrice = await (
    //   await BuyerChainClient.getInstance().init()
    // ).getDomainRegistrationPrice(config.sellerChain.token);

    const walletClient = await WalletClient.getInstance().init();

    await walletClient.init();

    // assert(registrationPrice != null);

    return new SellerConfigInfo({
      isServiceOperational: !config.sellerIndexer.processingDisabled,
      sellerChain: config.sellerChain.chainName,
      sellerChainPrefix: config.sellerChain.prefix,
      sellerTreasuryAccount: WalletClient.addressFromAnyToFormatted(
        walletClient.account.sellerTreasuryPubKey,
        28
      ),
      sellerApiAuthTokenManager: WalletClient.addressFromAnyToFormatted(
        walletClient.account.sellerIndexerAuthTokenMngEd25519.publicKey,
        28
      ),
      dmnRegPendingOrderExpTime: config.sellerIndexer.dmnRegPendingOrderExpTime,
      domainHostChain: config.buyerChain.chainName,
      domainHostChainPrefix: config.buyerChain.prefix,
      sellerToken: {
        name: config.sellerChain.token.name,
        decimal: config.sellerChain.token.decimal
      },
      remarkProtName: config.sellerChain.remark.protName,
      remarkProtVersion: config.sellerChain.remark.version,
      // domainRegistrationPriceFixed: registrationPrice
      domainRegistrationPriceFixed: 0n
    });
  }
}
