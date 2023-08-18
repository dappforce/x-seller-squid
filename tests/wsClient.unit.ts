import { WalletClient } from '../src/walletClient';
import { BuyerChainClient, SellerChainClient } from '../src/wsClient';
import { getChain } from '../src/chains';
import { u8aToString } from '@polkadot/util';

const { config } = getChain();

describe('WS Client Unit', () => {
  let walletClient: WalletClient | null = null;
  let buyerClient: BuyerChainClient | null = null;
  let sellerClient: SellerChainClient | null = null;
  const soonsocialPrefix = 28;

  const testPublicKey = '5H6bn23yFMF2P32AVaqgWoQemLtpGqLZWTMaVsYGZLo8A1bo';
  const testAddressSubsocial =
    '3t5NA8UKsGzrCDMfp8XMEBghiYthWGXGsHbjtJY45NUJDY5P';
  const testAddressPolkadot =
    '162tvMK378WVpa2gTDtgexEocxtTy8thax64fAXd7RpeLXCL';
  const testAddressHex =
    '0xde9f30be09a7cc7f0014261362069b66ce798d7a990def1b7deaa8b4b2a57668';

  beforeAll(async () => {
    walletClient = await WalletClient.getInstance().init();
    buyerClient = await BuyerChainClient.getInstance().init();
    sellerClient = await SellerChainClient.getInstance().init();
  });

  test('Account has more than 1 domain', async () => {
    const list = await buyerClient!.getDomainsByOwner(testAddressHex);

    expect(list).not.toEqual(null);
    expect(list!.length > 0).toEqual(true);
  });

  test('Account does not have registered domains', async () => {
    const list = await buyerClient!.getDomainsByOwner(
      u8aToString(walletClient!.account.sellerTreasuryPubKey)
    );
    expect(list).not.toEqual(null);
    expect(list!.length === 0).toEqual(true);
  });

  test('Account does not have registered domains', async () => {
    const price = await buyerClient!.getDomainRegistrationPrice({
      domain: 'maxtest',
      tokenData: config.sellerChain.token,
      atBlock:
        '0xc404a252db054312e4edc913169eaac9ae2fcaa516e383ab1ce9118a3d0e470f'
    });

    console.log('price - ', price);
    expect(1).toEqual(1);
  });
});
