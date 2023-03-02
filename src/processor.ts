import { lookupArchive } from '@subsquid/archive-registry';
import {
  BatchBlock,
  BatchContext,
  BatchProcessorCallItem,
  BatchProcessorItem,
  SubstrateBatchProcessor
} from '@subsquid/substrate-processor';
import { Store, TypeormDatabase } from '@subsquid/typeorm-store';
import { SellerChainClient, BuyerChainClient } from './wsClient';
import { WalletClient } from './walletClient';
import { handleSellerActions } from './handlers';
import { parseCalls } from './parser';
import { SubSclRemark } from './remark';

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive('rococo', { release: 'FireSquid' })
  })
  .setBlockRange({ from: 4260800 })
  .addCall('System.remark', {
    data: {
      call: {
        args: true,
        origin: true,
        parent: true
      },
      extrinsic: true
    }
  } as const);

export type Item = BatchProcessorItem<typeof processor>;
export type Ctx = BatchContext<Store, Item>;
export type CallItem = BatchProcessorCallItem<typeof processor>;
export type Block = BatchBlock<Item>;

processor.run(new TypeormDatabase(), async (ctx) => {
  await WalletClient.getInstance().init();
  await SellerChainClient.getInstance().init();
  await BuyerChainClient.getInstance().init();
  SubSclRemark.setConfig({ titles: ['t2_subscl'] });

  let callsData = parseCalls(ctx);

  console.log('callsData >>> ');
  console.dir(callsData, { depth: null });

  await handleSellerActions(callsData, ctx);
});
