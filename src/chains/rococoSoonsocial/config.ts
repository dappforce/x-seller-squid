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
  SocialRemarkMessageDestination,
  SocialRemarkDestChainsNameId
} from '@subsocial/utils/socialRemark/types';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  sellerClient: {
    allowedApiClients: parseAccountsFromEnvs(
      process.env.SELLER_SOONSOCIAL_ALLOWED_API_CLIENTS || ''
    )
  },
  sellerIndexer: {
    loggerTgBotToken: process.env.SELLER_SOONSOCIAL_LOGGER_TG_BOT_TOKEN ?? '',
    loggerTgBotChannelId:
      Number.parseInt(
        process.env.SELLER_SOONSOCIAL_LOGGER_TG_BOT_CHAT_ID || '0'
      ) ?? 0,
    accounts: {
      tokenManager: {
        mnemonic: process.env.SELLER_SOONSOCIAL_API_TOKEN_MANAGER_MNEM ?? ''
      }
    },
    allowedRemarkSigners: parseAccountsFromEnvs(
      process.env.SELLER_ROCOCO_ALLOWED_REMARK_SIGNERS || ''
    ),
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
    autoRefundDisabled: !!(
      process.env.SELLER_ROCOCO_AUTO_REFUND_DISABLED &&
      process.env.SELLER_ROCOCO_AUTO_REFUND_DISABLED === 'true'
    ),
    extendedApi: !!(
      process.env.SELLER_EXTENDED_API &&
      process.env.SELLER_EXTENDED_API === 'true'
    ),
    serviceLocalStorageDbUrl: process.env.SELLER_SOONSOCIAL_MONGODB_URL || ''
  },
  sellerChain: {
    chainName: 'rococo',
    prefix: 42,
    token: {
      name: TokenName.ROC,
      decimal: 12,
      coefficientWithBuyerToken:
        process.env.SELLER_TOKEN_PRICE_COEFF_ROC_SOON || '1' // Decimal part cannot be not more than 1e10 ( e.g. 0.000_000_001) // it's 1 but must be 0.01 because rococo has decimals 12 but not 10 like polkadot
    },
    dataSource: {
      archive: 'https://rococo.archive.subsquid.io/graphql',
      chain: 'wss://rococo-rpc.polkadot.io'
    },
    accounts: {
      sellerTreasury: {
        publicKey: process.env.SELLER_ROCOCO_ACC_SELLER_TREASURY_PUB_KEY || ''
      },
      sellerServicePayer: {
        mnemonic: process.env.SELLER_ROCOCO_ACC_SELLER_SERVICE_PAYER_MNEM || ''
      }
    },
    remark: {
      protName:
        (process.env
          .SELLER_ROCOCO_REMARK_PROT_NAME as SocialRemarkMessageProtocolName) ||
        't_ss_t_2',
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
      chain: 'wss://rco-para.subsocial.network',
      rpcHttpUrl: 'https://rco-para.subsocial.network/http'
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
      endpoint: 'https://soonsocial.explorer.subsquid.io/graphql'
    }
  }
};
