import { ProcessorConfig } from '../interfaces/processorConfig';
import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  sellerChain: {
    chainName: 'polkadot',
    prefix: 'polkadot',
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
      title: 't3_subscl',
      version: '0.1'
    }
  },
  buyerChain: {
    chainName: 'subsocial',
    prefix: 'subsocial',
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
