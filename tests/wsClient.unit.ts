import { WalletClient } from '../src/walletClient';
import { BuyerChainClient } from '../src/wsClient';

describe('WS Client Unit', () => {
  let walletClient: WalletClient | null = null;
  let buyerClient: BuyerChainClient | null = null;
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
  });

  test('Account has more than 1 domain', async () => {
    const list = await buyerClient!.getDomainsByOwner(testAddressHex);

    expect(list).not.toEqual(null);
    expect(list!.length > 0).toEqual(true);
  });

  test('Account does not have registered domains', async () => {
    const list = await buyerClient!.getDomainsByOwner(
      walletClient!.account.sellerTreasury.address
    );
    expect(list).not.toEqual(null);
    expect(list!.length === 0).toEqual(true);
  });
});
