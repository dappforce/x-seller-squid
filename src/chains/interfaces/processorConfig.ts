import { SubstrateProcessor } from '@subsquid/substrate-processor';
import { SubSclRemarkMessageTitle, SubSclRemarkMessageVersion } from '../../remark/types';

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
      title: SubSclRemarkMessageTitle;
      version: SubSclRemarkMessageVersion;
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
