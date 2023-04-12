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
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  sellerClient: {
    allowedApiClients: parseAllowedApiClients(
      process.env.SELLER_SUBSOCIAL_ALLOWED_API_CLIENTS || ''
    )
  },
  sellerIndexer: {
    accounts: {
      tokenManager: {
        mnemonic: process.env.SELLER_SUBSOCIAL_API_TOKEN_MANAGER_MNEM ?? ''
      }
    },
    apiAuthTokenExp: parseApiAuthTokenExpTime(
      process.env.SELLER_SUBSOCIAL_API_TOKEN_EXP_TIME,
      10000
    ),
    dmnRegPendingOrderExpTime: parsePendingOrderExpTime(
      process.env.SELLER_SUBSOCIAL_DMN_REG_PENDING_ORDER_EXP_TIME,
      7
    ),
    apiDebugMode: !!(
      process.env.SELLER_SUBSOCIAL_API_DEBUG_MODE &&
      process.env.SELLER_SUBSOCIAL_API_DEBUG_MODE === 'true'
    )
  },
  sellerChain: {
    chainName: 'polkadot',
    prefix: 0,
    token: {
      name: TokenName.DOT,
      decimal: 10,
      coefficientWithBuyerToken:
        process.env.SELLER_TOKEN_PRICE_COEFF_DOT_SUB || '0.001' // Decimal part cannot be not more than 1e10 ( e.g. 0.000_000_001)
    },
    dataSource: {
      archive: 'https://polkadot.archive.subsquid.io/graphql',
      chain: 'wss://rpc.polkadot.io'
    },
    accounts: {
      sellerTreasury: {
        mnemonic: process.env.SELLER_POLKADOT_ACC_MNEM_SELLER_TREASURY || ''
      }
    },
    remark: {
      protName:
        (process.env
          .SELLER_POLKADOT_REMARK_PROT_NAME as SocialRemarkMessageProtocolName) ||
        'social_t_0',
      version:
        (process.env
          .SELLER_POLKADOT_REMARK_PROT_VERSION as SocialRemarkMessageVersion) ||
        '0.1'
    }
  },
  buyerChain: {
    chainName: 'subsocial',
    prefix: 28,
    dataSource: {
      chain: 'wss://para.f3joule.space'
    },
    accounts: {
      domainRegistrar: {
        mnemonic: process.env.SELLER_SUBSOCIAL_ACC_MNEM_DOMAIN_REGISTRAR || ''
      },
      energyGenerator: {
        mnemonic: process.env.SELLER_SUBSOCIAL_ACC_MNEM_ENERGY_GENERATOR || ''
      }
    }
  }
};
