import { lookupArchive } from '@subsquid/archive-registry';
import {
  BatchBlock,
  BatchContext,
  BatchProcessorCallItem,
  BatchProcessorEventItem,
  BatchProcessorItem,
  SubstrateBatchProcessor
} from '@subsquid/substrate-processor';
import { Store, TypeormDatabase } from '@subsquid/typeorm-store';
import { SellerChainClient, BuyerChainClient } from './wsClient';
import { WalletClient } from './walletClient';
import { handleSellerActions } from './handlers';
import { parseCalls } from './parser';
import { SocialRemark } from '@subsocial/utils';
import { getChain } from './chains';

const { config } = getChain();

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive('rococo', { release: 'FireSquid' })
  })
  // .setBlockRange({ from: 4260800 })
  .addCall('System.remark', {
    data: {
      call: {
        args: true,
        origin: true,
        parent: true
      },
      extrinsic: true
    }
  } as const)
  .addEvent('Balances.Transfer', {
    data: {
      event: {
        args: true,
        indexInBlock: true,
        call: {
          args: true,
          origin: true,
          parent: true
        }
      }
    }
  } as const);

export type Item = BatchProcessorItem<typeof processor>;
export type Ctx = BatchContext<Store, Item>;
export type CallItem = BatchProcessorCallItem<typeof processor>;
export type EventItem = BatchProcessorEventItem<typeof processor>;
export type Block = BatchBlock<Item>;

processor.run(new TypeormDatabase(), async (ctx) => {
  ctx.log.info(`Is head of archive - ${ctx.isHead}`);
  await WalletClient.getInstance().init();
  await SellerChainClient.getInstance().init();
  await BuyerChainClient.getInstance().init();
  SocialRemark.setConfig({ protNames: [config.sellerChain.remark.protName] });

  let callsData = parseCalls(ctx);

  console.log('callsData >>> ');
  console.dir(callsData, { depth: null });

  await handleSellerActions(callsData, ctx);
});
