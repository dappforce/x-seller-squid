import { WalletClient } from '../src/walletClient';

describe('Wallet Client Unit', () => {
  let walletClient: WalletClient | null = null;
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
  });

  test('Convert Hex to Hex', () => {
    const convertedAddressToHex = WalletClient.addressToHex(testAddressHex);
    expect(testAddressHex).toEqual(convertedAddressToHex);
  });

  test('Convert address to Hex', () => {
    const convertedAddressToHex =
      WalletClient.addressToHex(testAddressSubsocial);
    expect(testAddressHex).toEqual(convertedAddressToHex);
  });

  test('Convert address form Hex', () => {
    const convertedAddressFromHex = WalletClient.addressFromHex(
      testAddressHex,
      soonsocialPrefix
    );
    expect(testAddressSubsocial).toEqual(convertedAddressFromHex);
  });

  test('Convert address form Hex to Subsocial', () => {
    const convertedAddress = WalletClient.addressFromAnyToFormatted(
      testAddressHex,
      soonsocialPrefix
    );
    expect(testAddressSubsocial).toEqual(convertedAddress);
  });

  test('Convert address form Polkadot to Subsocial', () => {
    const convertedAddress = WalletClient.addressFromAnyToFormatted(
      testAddressPolkadot,
      soonsocialPrefix
    );
    expect(testAddressSubsocial).toEqual(convertedAddress);
  });
  test('Convert address form public key to Subsocial', () => {
    const convertedAddress = WalletClient.addressFromAnyToFormatted(
      testPublicKey,
      soonsocialPrefix
    );
    expect(testAddressSubsocial).toEqual(convertedAddress);
  });
  test('Convert address form Subsocial to Subsocial', () => {
    const convertedAddress = WalletClient.addressFromAnyToFormatted(
      testAddressSubsocial,
      soonsocialPrefix
    );
    expect(testAddressSubsocial).toEqual(convertedAddress);
  });
});
