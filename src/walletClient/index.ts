import {
  cryptoWaitReady,
  decodeAddress,
  encodeAddress,
  naclBoxPairFromSecret
} from '@polkadot/util-crypto';
import { stringToU8a, u8aToHex } from '@polkadot/util';
import { Keyring } from '@polkadot/api';
import { getChain } from '../chains';
import { KeyringPairWithSecret, WalletClientAccounts } from './types';
const { config } = getChain();

export class WalletClient {
  private static instance: WalletClient;

  private accs: WalletClientAccounts = {
    sellerIndexerTokenManager: null,
    sellerTreasury: null,
    domainRegistrar: null,
    energyGenerator: null
  };

  static getInstance(): WalletClient {
    if (!WalletClient.instance) {
      WalletClient.instance = new WalletClient();
    }
    return WalletClient.instance;
  }

  public static addressToHex(address: string) {
    const publicKey = decodeAddress(address);
    return u8aToHex(publicKey);
  }

  public static addressFromHex(addressHex: string, prefix?: number) {
    return encodeAddress(addressHex, prefix);
  }

  public static addressFromAnyToFormatted(addressAny: string, prefix: number) {
    const publicKey = decodeAddress(addressAny);
    return encodeAddress(publicKey, prefix);
  }

  public static async createKeyringPairFromMnem(mnem: string) {
    if (!(await cryptoWaitReady())) {
      throw 'cryptoWaitReady() resolved to false';
    }
    if (!mnem) {
      throw 'suri cannot be undefined';
    }
    let keyring = new Keyring({ type: 'sr25519' });
    return keyring.addFromUri(mnem);
  }

  public static isSigner(msg: string, maybeSigner: string) {}

  public clientValid(): boolean {
    return !!(
      this.accs.sellerTreasury &&
      this.accs.domainRegistrar &&
      this.accs.energyGenerator
    );
  }

  get account() {
    if (!this.clientValid())
      throw Error('WalletClient is not initialized yet.');

    return {
      sellerIndexerTokenManager: this.accs.sellerIndexerTokenManager!,
      sellerTreasury: this.accs.sellerTreasury!,
      domainRegistrar: this.accs.domainRegistrar!,
      energyGenerator: this.accs.energyGenerator!
    };
  }

  public async init(): Promise<WalletClient> {
    if (this.clientValid()) return this;
    const tokenMngKeyring = await WalletClient.createKeyringPairFromMnem(
      config.sellerIndexer.accounts.tokenManager.mnemonic
    );
    (tokenMngKeyring as KeyringPairWithSecret).secretKey =
      naclBoxPairFromSecret(
        stringToU8a(process.env.SOONSOCIAL_FE_CLIENT_TOKEN_SIGNER || '')
      ).secretKey;

    this.accs.sellerIndexerTokenManager =
      tokenMngKeyring as KeyringPairWithSecret;

    this.accs.sellerTreasury = await WalletClient.createKeyringPairFromMnem(
      config.sellerChain.accounts.sellerTreasury.mnemonic
    );
    this.accs.domainRegistrar = await WalletClient.createKeyringPairFromMnem(
      config.buyerChain.accounts.domainRegistrar.mnemonic
    );
    this.accs.energyGenerator = await WalletClient.createKeyringPairFromMnem(
      config.buyerChain.accounts.energyGenerator.mnemonic
    );
    return this;
  }
}
