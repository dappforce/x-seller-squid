import { ProcessorConfig } from '../interfaces/processorConfig';
import * as dotenv from 'dotenv';
import {
  SocialRemarkMessageProtocolName,
  SocialRemarkMessageVersion
} from '../../remark/types';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  sellerChain: {
    chainName: 'polkadot',
    prefix: 0,
    token: 'DOT',
    dataSource: {
      archive: 'https://polkadot.archive.subsquid.io/graphql',
      chain: 'wss://rpc.polkadot.io'
    },
    accounts: {
      sellerTreasury: {
        mnemonic: process.env.POLKADOT_ACC_MNEM_SELLER_TREASURY || ''
      }
    },
    remark: {
      protName:
        (process.env
          .POLKADOT_REMARK_PROT_NAME as SocialRemarkMessageProtocolName) ||
        'social_t_0',
      version:
        (process.env
          .POLKADOT_REMARK_PROT_VERSION as SocialRemarkMessageVersion) || '0.1'
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
        mnemonic: process.env.SUBSOCIAL_ACC_MNEM_DOMAIN_REGISTRAR || ''
      },
      energyGenerator: {
        mnemonic: process.env.SUBSOCIAL_ACC_MNEM_ENERGY_GENERATOR || ''
      }
    }
  }
};
