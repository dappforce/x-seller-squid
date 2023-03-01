import { SubstrateProcessor } from '@subsquid/substrate-processor';

type SupportedConfigChains = 'polkadot' | 'subsocial';

type OnChainAccounts =
  | 'dotSellerTreasury'
  | 'domainRegistrar'
  | 'energyGenerator';

export type ProcessorConfig = {
  [key in SupportedConfigChains]?: {
    chainName: string;
    prefix?: number | string;
    dataSource: Required<
      Parameters<SubstrateProcessor<any>['setDataSource']>[0]
    >;
    accounts: {
      [key in OnChainAccounts]?: { mnemonic: string };
    };
    blockRange?: Parameters<SubstrateProcessor<any>['setBlockRange']>[0];
  };
};
