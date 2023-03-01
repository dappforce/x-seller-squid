import { ProcessorConfig } from './types/common';
import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env.local` });

export const config: ProcessorConfig = {
  // polkadot: {
  //   chainName: 'polkadot',
  //   prefix: 'polkadot',
  //   dataSource: {
  //     archive: 'https://polkadot.archive.subsquid.io/graphql',
  //     chain: 'wss://rpc.polkadot.io'
  //   }
  // },
  polkadot: {
    chainName: 'rococo',
    prefix: 'polkadot',
    dataSource: {
      archive: 'https://rococo.archive.subsquid.io/graphql',
      chain: 'wss://rococo-rpc.polkadot.io'
    },
    accounts: {
      dotSellerTreasury: {
        mnemonic: process.env.POLKADOT_ACCOUNT_MNEM_DOT_SELLER_TREASURY || ''
      }
    }
  },
  subsocial: {
    chainName: 'subsocial',
    prefix: 'subsocial',
    dataSource: {
      archive: 'https://subsocial.archive.subsquid.io/graphql',
      chain: 'wss://para.f3joule.space'
    },
    accounts: {
      domainRegistrar: {
        mnemonic: ''
      },
      energyGenerator: {
        mnemonic: ''
      }
    }
  }
};
