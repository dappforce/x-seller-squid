import { ProcessorConfig } from '../interfaces/processorConfig';
import * as dotenv from 'dotenv';
import {
  SocialRemarkMessageProtocolName,
  SocialRemarkMessageVersion
} from '@subsocial/utils';
import { WalletClient } from '../../walletClient';
import { decodeAllowedApiClients } from '../utils/common';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  sellerClient: {
    allowedApiClients: decodeAllowedApiClients(
      process.env.SOONSOCIAL_ALLOWED_API_CLIENTS || '',
      WalletClient.addressToHex
    )
  },
  sellerIndexer: {
    accounts: {
      tokenManager: {
        mnemonic: process.env.SOONSOCIAL_API_TOKEN_MANAGER_MNEM ?? '',
        publicKey: process.env.SOONSOCIAL_API_TOKEN_MANAGER_PUBLIC_KEY ?? ''
      }
    },
    apiAuthTokenExp: !Number.isNaN(
      Number.parseInt(process.env.SOONSOCIAL_API_TOKEN_EXP_TIME ?? '10000')
    )
      ? Number.parseInt(process.env.SOONSOCIAL_API_TOKEN_EXP_TIME ?? '10000')
      : 10000
  },
  sellerChain: {
    chainName: 'rococo',
    prefix: 42,
    token: {
      name: 'ROC',
      decimal: 10,
      coefficientWithBuyerToken:
        process.env.TOKEN_PRICE_COEFF_ROC_SOON || '0.001' // Decimal part cannot be not more than 1e10 ( e.g. 0.000_000_001)
    },
    dataSource: {
      archive: 'https://rococo.archive.subsquid.io/graphql',
      chain: 'wss://rococo-rpc.polkadot.io'
    },
    accounts: {
      sellerTreasury: {
        mnemonic: process.env.ROCOCO_ACC_MNEM_SELLER_TREASURY || ''
      }
    },
    remark: {
      protName:
        (process.env
          .ROCOCO_REMARK_PROT_NAME as SocialRemarkMessageProtocolName) ||
        'social_t_0',
      version:
        (process.env
          .ROCOCO_REMARK_PROT_VERSION as SocialRemarkMessageVersion) || '0.1'
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
        mnemonic: process.env.SOONSOCIAL_ACC_MNEM_DOMAIN_REGISTRAR || ''
      },
      energyGenerator: {
        mnemonic: process.env.SOONSOCIAL_ACC_MNEM_ENERGY_GENERATOR || ''
      }
    }
  }
};
