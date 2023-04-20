import { SubstrateProcessor } from '@subsquid/substrate-processor';
import {
  SocialRemarkMessageProtocolName,
  SocialRemarkMessageVersion
} from '@subsocial/utils';
import { SocialRemarkMessageDestination } from '@subsocial/utils/socialRemark/types';

export enum TokenName {
  DOT = 'DOT',
  ROC = 'ROC'
}

export interface TokenDetails {
  name: TokenName;
  decimal: number;
  coefficientWithBuyerToken: string;
}

export type ProcessorConfig = {
  sellerClient: {
    allowedApiClients: Set<string>;
  };
  sellerIndexer: {
    accounts: {
      tokenManager: {
        mnemonic: string;
      };
    };
    allowedRemarkSigners: Set<string>;
    apiAuthTokenExp: number;
    dmnRegPendingOrderExpTime: number;
    apiDebugMode: boolean;
    processingDisabled: boolean;
    autoRefundDisabled: boolean;
    extendedApi: boolean;
  };
  sellerChain: {
    chainName: string;
    prefix: number;
    token: TokenDetails;
    dataSource: Required<
      Parameters<SubstrateProcessor<any>['setDataSource']>[0]
    >;
    blockRange?: Parameters<SubstrateProcessor<any>['setBlockRange']>[0];
    accounts: {
      sellerTreasury: { publicKey: string };
      sellerServicePayer: { mnemonic: string };
    };
    remark: {
      protName: SocialRemarkMessageProtocolName;
      version: SocialRemarkMessageVersion;
      destination: SocialRemarkMessageDestination;
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
  blocksMapper: {
    dataSource: {
      endpoint: string;
    };
  };
};
