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
import { parseBatches } from './parser';

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

  let batchesData = parseBatches(ctx);

  console.log('batchesData >>> ');
  console.dir(batchesData, { depth: null });

  await handleSellerActions(batchesData);

  // let accountIds = new Set<string>();
  // for (let t of transfersData) {
  //   accountIds.add(t.from);
  //   accountIds.add(t.to);
  // }
  //
  // let accounts = await ctx.store
  //   .findBy(Account, { id: In([...accountIds]) })
  //   .then((accounts) => {
  //     return new Map(accounts.map((a) => [a.id, a]));
  //   });
  //
  // let transfers: Transfer[] = [];
  //
  // for (let t of transfersData) {
  //   let { id, blockNumber, timestamp, extrinsicHash, amount, fee } = t;
  //
  //   let from = getAccount(accounts, t.from);
  //   let to = getAccount(accounts, t.to);
  //
  //   transfers.push(
  //     new Transfer({
  //       id,
  //       blockNumber,
  //       timestamp,
  //       extrinsicHash,
  //       from,
  //       to,
  //       amount,
  //       fee
  //     })
  //   );
  // }
  //
  // await ctx.store.save(Array.from(accounts.values()));
  // await ctx.store.insert(transfers);

  // throw Error();
});
