import { ProcessorConfig } from '../interfaces/processorConfig';
import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../../../.env.local` });

export const config: ProcessorConfig = {
  sellerChain: {
    chainName: 'rococo',
    prefix: 'polkadot',
    dataSource: {
      archive: 'https://rococo.archive.subsquid.io/graphql',
      chain: 'wss://rococo-rpc.polkadot.io'
    },
    accounts: {
      sellerTreasury: {
        mnemonic: process.env.ROCOCO_ACC_MNEM_SELLER_TREASURY || ''
      }
    }
  },
  buyerChain: {
    chainName: 'soonsocial',
    prefix: 'subsocial',
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
