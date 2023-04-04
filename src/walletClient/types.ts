import { KeyringPair } from '@polkadot/keyring/types';

export interface KeyringPairWithSecret extends KeyringPair {
  secretKey: Uint8Array;
}

export type WalletClientAccounts = {
  sellerIndexerTokenManager: KeyringPairWithSecret | null;
  sellerTreasury: KeyringPair | null;
  domainRegistrar: KeyringPair | null;
  energyGenerator: KeyringPair | null;
};
