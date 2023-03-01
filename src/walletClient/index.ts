import { cryptoWaitReady } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/api';
import { getChain } from '../chains';
import { WalletClientAccounts } from './types';
const { config } = getChain();

export class WalletClient {
  private static instance: WalletClient;

  public accs: WalletClientAccounts = {
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

  public clientValid() {
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
      sellerTreasury: this.accs.sellerTreasury!,
      domainRegistrar: this.accs.domainRegistrar!,
      energyGenerator: this.accs.energyGenerator!
    };
  }

  public async init(): Promise<WalletClient> {
    if (this.clientValid()) return this;
    this.accs.sellerTreasury = await this.createKeyringPair(
      config.sellerChain.accounts.sellerTreasury.mnemonic
    );
    this.accs.domainRegistrar = await this.createKeyringPair(
      config.buyerChain.accounts.domainRegistrar.mnemonic
    );
    this.accs.energyGenerator = await this.createKeyringPair(
      config.buyerChain.accounts.energyGenerator.mnemonic
    );
    return this;
  }

  private async createKeyringPair(mnem: string) {
    if (!(await cryptoWaitReady())) {
      throw 'cryptoWaitReady() resolved to false';
    }
    if (!mnem) {
      throw 'suri cannot be undefined';
    }
    let keyring = new Keyring({ type: 'sr25519' });
    return keyring.addFromUri(mnem);
  }
}
