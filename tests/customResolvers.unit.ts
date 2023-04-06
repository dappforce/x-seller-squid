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
  randomAsU8a,
  encodeAddress,
  decodeAddress,
  ed25519PairFromSeed,
  sr25519PairFromSeed,
  blake2AsU8a,
  blake2AsHex
} from '@polkadot/util-crypto';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { isTokenValid } from '../src/server-extension/check';
import { Keypair } from '@polkadot/util-crypto/types';

describe('API Custom Resolvers', () => {
  dayjs.extend(utc);

  let walletClient: WalletClient | null = null;
  let sellerKeypair: Keypair | null = null;
  const nonce = new Uint8Array(24);
  nonce[0] = 111;

  jest.setTimeout(1000 * 60 * 5);

  beforeAll(async () => {
    walletClient = await WalletClient.getInstance().init();
    sellerKeypair = naclBoxPairFromSecret(
      mnemonicToMiniSecret(process.env.SOONSOCIAL_BE_CLIENT_TOKEN_SIGNER || '')
    );
  });

  test('Encode - decode API Auth header with valid FE signer', async () => {
    /**
     * ===============
     * Polkaverse side
     * ===============
     */

    const tokenMessage = dayjs.utc().valueOf().toString();

    const requesterKeypair = naclBoxPairFromSecret(
      mnemonicToMiniSecret(process.env.SOONSOCIAL_FE_CLIENT_TOKEN_SIGNER || '')
    );

    /**
     * We need transform secretKey ArrayBuffer from 64bytes to 32
     * as it's required by "naclSeal"
     */
    const signedToken = naclSeal(
      stringToU8a(tokenMessage),
      requesterKeypair.secretKey,
      sellerKeypair!.publicKey,
      nonce
    );

    /**
     * ==================
     * Seller-squid side
     * ==================
     */

    const isValid = isTokenValid(
      u8aToHex(signedToken.sealed),
      encodeAddress(decodeAddress(requesterKeypair.publicKey), 42)
    );

    expect(isValid).toBe(true);
  });

  test('Encode - decode API Auth header with invalid FE signer', async () => {
    /**
     * ===============
     * Polkaverse side
     * ===============
     */

    const tokenMessage = dayjs.utc().valueOf().toString();

    const requesterKeypair = naclBoxPairFromSecret(
      mnemonicToMiniSecret(
        process.env.SOONSOCIAL_FE_CLIENT_TOKEN_SIGNER_INVALID || ''
      )
    );

    /**
     * We need transform secretKey ArrayBuffer from 64bytes to 32
     * as it's required by "naclSeal"
     */
    const signedToken = naclSeal(
      stringToU8a(tokenMessage),
      requesterKeypair.secretKey,
      sellerKeypair!.publicKey,
      nonce
    );

    /**
     * ==================
     * Seller-squid side
     * ==================
     */

    const isValid = isTokenValid(
      u8aToHex(signedToken.sealed),
      encodeAddress(decodeAddress(requesterKeypair.publicKey), 42)
    );

    expect(isValid).toBe('Method is not allowed. Client is not allowed.');
  });

  test('Encode - decode API Auth header - Expired token', async () => {
    /**
     * ===============
     * Polkaverse side
     * ===============
     */

    const tokenMessage = dayjs.utc().valueOf().toString();

    const requesterKeypair = naclBoxPairFromSecret(
      mnemonicToMiniSecret(process.env.SOONSOCIAL_FE_CLIENT_TOKEN_SIGNER || '')
    );

    const signedToken = naclSeal(
      stringToU8a(tokenMessage),
      requesterKeypair.secretKey,
      sellerKeypair!.publicKey,
      nonce
    );

    /**
     * ==================
     * Seller-squid side
     * ==================
     */

    await new Promise((res) => setTimeout(res, 12000));

    const isValid = isTokenValid(
      u8aToHex(signedToken.sealed),
      encodeAddress(decodeAddress(requesterKeypair.publicKey), 42)
    );

    expect(isValid).toBe('Method is not allowed. Token is not valid.');
  });
});
