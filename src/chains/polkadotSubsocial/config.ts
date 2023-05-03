import { ProcessorConfig, TokenName } from '../interfaces/processorConfig';
import * as dotenv from 'dotenv';
import {
  SocialRemarkMessageProtocolName,
  SocialRemarkMessageVersion
} from '@subsocial/utils';
import {
  parseAccountsFromEnvs,
  parseApiAuthTokenExpTime,
  parsePendingOrderExpTime
} from '../utils/common';
import {
  SocialRemarkDestChainsNameId,
  SocialRemarkMessageDestination
} from '@subsocial/utils/socialRemark/types';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  sellerClient: {
    allowedApiClients: parseAccountsFromEnvs(
      process.env.SELLER_SUBSOCIAL_ALLOWED_API_CLIENTS || ''
    )
  },
  sellerIndexer: {
    loggerTgBotToken: process.env.SELLER_SUBSOCIAL_LOGGER_TG_BOT_TOKEN ?? '',
    loggerTgBotChannelId:
      Number.parseInt(
        process.env.SELLER_SUBSOCIAL_LOGGER_TG_BOT_CHAT_ID || '0'
      ) ?? 0,
    accounts: {
      tokenManager: {
        mnemonic: process.env.SELLER_SUBSOCIAL_API_TOKEN_MANAGER_MNEM ?? ''
      }
    },
    allowedRemarkSigners: parseAccountsFromEnvs(
      process.env.SELLER_POLKADOT_ALLOWED_REMARK_SIGNERS || ''
    ),
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
    ),
    processingDisabled: !!(
      process.env.SELLER_PROCESSING_DISABLED &&
      process.env.SELLER_PROCESSING_DISABLED === 'true'
    ),
    autoRefundDisabled: !!(
      process.env.SELLER_POLKADOT_AUTO_REFUND_DISABLED &&
      process.env.SELLER_POLKADOT_AUTO_REFUND_DISABLED === 'true'
    ),
    extendedApi: !!(
      process.env.SELLER_EXTENDED_API &&
      process.env.SELLER_EXTENDED_API === 'true'
    ),
    serviceLocalStorageDbUrl: process.env.SELLER_SUBSOCIAL_MONGODB_URL || ''
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
        publicKey: process.env.SELLER_POLKADOT_ACC_SELLER_TREASURY_PUB_KEY || ''
      },
      sellerServicePayer: {
        mnemonic:
          process.env.SELLER_POLKADOT_ACC_SELLER_SERVICE_PAYER_MNEM || ''
      }
    },
    remark: {
      protName:
        (process.env
          .SELLER_POLKADOT_REMARK_PROT_NAME as SocialRemarkMessageProtocolName) ||
        'st_ss_v_1',
      version:
        (process.env
          .SELLER_POLKADOT_REMARK_PROT_VERSION as SocialRemarkMessageVersion) ||
        '0.1',
      destination:
        (process.env
          .SELLER_POLKADOT_REMARK_DESTINATION as SocialRemarkMessageDestination) ||
        SocialRemarkDestChainsNameId.subsocial
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
  },
  blocksMapper: {
    dataSource: {
      endpoint: 'https://subsocial.explorer.subsquid.io/graphql'
    }
  }
};
