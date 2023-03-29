import { SubstrateProcessor } from '@subsquid/substrate-processor';
import {
  SocialRemarkMessageProtocolName,
  SocialRemarkMessageVersion
} from '@subsocial/utils';

export type TokenDetails = {
  name: string;
  decimal: number;
  coefficientWithBuyerToken: string;
};

export type ProcessorConfig = {
  sellerChain: {
    chainName: string;
    prefix: number;
    token: TokenDetails;
    dataSource: Required<
      Parameters<SubstrateProcessor<any>['setDataSource']>[0]
    >;
    blockRange?: Parameters<SubstrateProcessor<any>['setBlockRange']>[0];
    accounts: {
      sellerTreasury: { mnemonic: string };
    };
    remark: {
      protName: SocialRemarkMessageProtocolName;
      version: SocialRemarkMessageVersion;
    };
  };
  buyerChain: {
    chainName: string;
    prefix: number;
    dataSource: { chain: string };
    accounts: {
      domainRegistrar: { mnemonic: string };
      energyGenerator: { mnemonic: string };
    };
  };
};
