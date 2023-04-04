import { WalletClient } from '../src/walletClient';
import {
  hexToU8a,
  stringToHex,
  stringToU8a,
  u8aToHex,
  u8aToString
} from '@polkadot/util';
import {
  mnemonicGenerate,
  mnemonicToMiniSecret,
  naclBoxPairFromSecret,
  naclEncrypt,
  naclDecrypt,
  naclSeal,
  naclOpen,
  randomAsU8a
} from '@polkadot/util-crypto';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { isTokenValid } from '../src/server-extension/check';

describe('API Custom Resolvers', () => {
  let walletClient: WalletClient | null = null;

  jest.setTimeout(1000 * 60 * 5);

  beforeAll(async () => {
    walletClient = await WalletClient.getInstance().init();
  });

  test('Encode - decode API Auth header', async () => {
    /**
     * ===============
     * Polkaverse side
     * ===============
     */
    dayjs.extend(utc);

    const nonce = new Uint8Array(24);
    nonce[0] = 111;

    const tokenMessage = dayjs.utc().valueOf().toString();
    const requesterKeypair = naclBoxPairFromSecret(
      stringToU8a(process.env.SOONSOCIAL_FE_CLIENT_TOKEN_SIGNER || '')
    );
    const sellerKeypair = naclBoxPairFromSecret(
      stringToU8a(process.env.SOONSOCIAL_BE_CLIENT_TOKEN_SIGNER || '')
    );

    const signedToken = naclSeal(
      stringToU8a(tokenMessage),
      requesterKeypair.secretKey,
      sellerKeypair.publicKey,
      nonce
    );

    /**
     * ==================
     * Seller-squid side
     * ==================
     */

    // await new Promise((res) => setTimeout(res, 7000));

    const isValid = isTokenValid(
      u8aToString(signedToken.sealed),
      u8aToString(requesterKeypair.publicKey)
    );

    expect(isValid).toBe(true);
  });
});
