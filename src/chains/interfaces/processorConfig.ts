import { SubstrateProcessor } from '@subsquid/substrate-processor';
import { SocialRemarkMessageProtocolName, SocialRemarkMessageVersion } from '../../remark/types';

export type ProcessorConfig = {
  sellerChain: {
    chainName: string;
    prefix: number | string;
    dataSource: Required<Parameters<SubstrateProcessor<any>['setDataSource']>[0]>;
    blockRange?: Parameters<SubstrateProcessor<any>['setBlockRange']>[0];
    accounts: {
      sellerTreasury: { mnemonic: string };
    };
    remark: {
      protName: SocialRemarkMessageProtocolName;
      version: SocialRemarkMessageVersion;
    }
  };
  buyerChain: {
    chainName: string;
    prefix?: number | string;
    dataSource: { chain: string };
    accounts: {
      domainRegistrar: { mnemonic: string };
      energyGenerator: { mnemonic: string };
    };
  };
};
