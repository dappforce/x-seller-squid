import { ProcessorConfig, TokenName } from '../interfaces/processorConfig';
import * as dotenv from 'dotenv';
import {
  SocialRemarkMessageProtocolName,
  SocialRemarkMessageVersion
} from '@subsocial/utils';
import {
  parseAllowedApiClients,
  parseApiAuthTokenExpTime,
  parsePendingOrderExpTime
} from '../utils/common';
import {
  SocialRemarkMessageDestination,
  SocialRemarkDestChainsNameId
} from '@subsocial/utils/socialRemark/types';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  sellerClient: {
    allowedApiClients: parseAllowedApiClients(
      process.env.SELLER_SOONSOCIAL_ALLOWED_API_CLIENTS || ''
    )
  },
  sellerIndexer: {
    accounts: {
      tokenManager: {
        mnemonic: process.env.SELLER_SOONSOCIAL_API_TOKEN_MANAGER_MNEM ?? ''
      }
    },
    apiAuthTokenExp: parseApiAuthTokenExpTime(
      process.env.SELLER_SOONSOCIAL_API_TOKEN_EXP_TIME,
      10000
    ),
    dmnRegPendingOrderExpTime: parsePendingOrderExpTime(
      process.env.SELLER_SOONSOCIAL_DMN_REG_PENDING_ORDER_EXP_TIME,
      7
    ),
    apiDebugMode: !!(
      process.env.SELLER_SOONSOCIAL_API_DEBUG_MODE &&
      process.env.SELLER_SOONSOCIAL_API_DEBUG_MODE === 'true'
    ),
    processingDisabled: !!(
      process.env.SELLER_PROCESSING_DISABLED &&
      process.env.SELLER_PROCESSING_DISABLED === 'true'
    ),
    extendedApi: !!(
      process.env.SELLER_EXTENDED_API &&
      process.env.SELLER_EXTENDED_API === 'true'
    )
  },
  sellerChain: {
    chainName: 'rococo',
    prefix: 42,
    token: {
      name: TokenName.ROC,
      decimal: 10,
      coefficientWithBuyerToken:
        process.env.SELLER_TOKEN_PRICE_COEFF_ROC_SOON || '0.001' // Decimal part cannot be not more than 1e10 ( e.g. 0.000_000_001)
    },
    dataSource: {
      archive: 'https://rococo.archive.subsquid.io/graphql',
      chain: 'wss://rococo-rpc.polkadot.io'
    },
    accounts: {
      sellerTreasury: {
        mnemonic: process.env.SELLER_ROCOCO_ACC_MNEM_SELLER_TREASURY || ''
      }
    },
    remark: {
      protName:
        (process.env
          .SELLER_ROCOCO_REMARK_PROT_NAME as SocialRemarkMessageProtocolName) ||
        'social_t_1',
      version:
        (process.env
          .SELLER_ROCOCO_REMARK_PROT_VERSION as SocialRemarkMessageVersion) ||
        '0.1',
      destination:
        (process.env
          .SELLER_ROCOCO_REMARK_DESTINATION as SocialRemarkMessageDestination) ||
        SocialRemarkDestChainsNameId.soonsocial
    }
  },
  buyerChain: {
    chainName: 'soonsocial',
    prefix: 28,
    dataSource: {
      chain: 'wss://rco-para.subsocial.network'
    },
    accounts: {
      domainRegistrar: {
        mnemonic: process.env.SELLER_SOONSOCIAL_ACC_MNEM_DOMAIN_REGISTRAR || ''
      },
      energyGenerator: {
        mnemonic: process.env.SELLER_SOONSOCIAL_ACC_MNEM_ENERGY_GENERATOR || ''
      }
    }
  },
  blocksMapper: {
    dataSource: {
      endpoint: 'https://soonsocial.archive.subsquid.io/graphql'
    }
  }
};
