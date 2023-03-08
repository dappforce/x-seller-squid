import { ProcessorConfig } from '../interfaces/processorConfig';
import * as dotenv from 'dotenv';
import {
  SocialRemarkMessageProtocolName,
  SocialRemarkMessageVersion
} from '../../remark/types';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  sellerChain: {
    chainName: 'rococo',
    prefix: 42,
    token: 'ROC',
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
