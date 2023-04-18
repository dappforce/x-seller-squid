import { KeyringPair } from '@polkadot/keyring/types';
import { Keypair } from '@polkadot/util-crypto/types';

export interface KeyringPairWithSecret extends KeyringPair {
  secretKey: Uint8Array;
}

export type WalletClientAccounts = {
  sellerIndexerAuthTokenMngEd25519: Keypair | null;
  sellerTreasuryPubKey: Uint8Array | null;
  sellerServicePayer: KeyringPair | null;
  domainRegistrar: KeyringPair | null;
  energyGenerator: KeyringPair | null;
};
