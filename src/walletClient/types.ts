import { KeyringPair } from '@polkadot/keyring/types';
import { Keypair } from '@polkadot/util-crypto/types';

export interface KeyringPairWithSecret extends KeyringPair {
  secretKey: Uint8Array;
}

export type WalletClientAccounts = {
  sellerIndexerAuthTokenMngEd25519: Keypair | null;
  sellerTreasury: KeyringPair | null;
  domainRegistrar: KeyringPair | null;
  energyGenerator: KeyringPair | null;
};
