import {
  cryptoWaitReady,
  decodeAddress,
  encodeAddress,
  mnemonicToMiniSecret,
  naclBoxPairFromSecret,
  sr25519PairFromSeed
} from '@polkadot/util-crypto';
import { stringToU8a, u8aToHex } from '@polkadot/util';
import { GenericAccountId } from '@polkadot/types';
import { Keyring } from '@polkadot/api';
import { getChain } from '../chains';
import { KeyringPairWithSecret, WalletClientAccounts } from './types';
import { ProcessorConfig } from '../chains/interfaces/processorConfig';
import registry from '@subsocial/api/utils/registry';
export class WalletClient {
  private static instance: WalletClient;
  private chainConfig: ProcessorConfig;

  constructor() {
    this.chainConfig = getChain().config;
  }

  private accs: WalletClientAccounts = {
    sellerIndexerAuthTokenMngEd25519: null,
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

  public static addressToHex(address: string | Uint8Array) {
    const publicKey = decodeAddress(address);
    return u8aToHex(publicKey);
  }

  public static addressFromHex(addressHex: string, prefix?: number) {
    return encodeAddress(addressHex, prefix);
  }

  public static addressFromAnyToFormatted(
    addressAny: string | Uint8Array,
    prefix: number
  ) {
    const publicKey = decodeAddress(addressAny);
    const genericAddress = new GenericAccountId(registry, addressAny);
    return encodeAddress(genericAddress.toString(), prefix);
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
      sellerIndexerAuthTokenMngEd25519:
        this.accs.sellerIndexerAuthTokenMngEd25519!,
      sellerTreasury: this.accs.sellerTreasury!,
      domainRegistrar: this.accs.domainRegistrar!,
      energyGenerator: this.accs.energyGenerator!
    };
  }

  public async init(): Promise<WalletClient> {
    if (this.clientValid()) return this;

    this.accs.sellerIndexerAuthTokenMngEd25519 = naclBoxPairFromSecret(
      mnemonicToMiniSecret(
        this.chainConfig.sellerIndexer.accounts.tokenManager.mnemonic
      )
    );

    this.accs.sellerTreasury = await WalletClient.createKeyringPairFromMnem(
      this.chainConfig.sellerChain.accounts.sellerTreasury.mnemonic
    );
    this.accs.domainRegistrar = await WalletClient.createKeyringPairFromMnem(
      this.chainConfig.buyerChain.accounts.domainRegistrar.mnemonic
    );
    this.accs.energyGenerator = await WalletClient.createKeyringPairFromMnem(
      this.chainConfig.buyerChain.accounts.energyGenerator.mnemonic
    );
    return this;
  }
}
