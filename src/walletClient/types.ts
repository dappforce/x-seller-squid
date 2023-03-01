import { KeyringPair } from '@polkadot/keyring/types';

export type WalletClientAccounts = {
  sellerTreasury: KeyringPair | null;
  domainRegistrar: KeyringPair | null;
  energyGenerator: KeyringPair | null;
};