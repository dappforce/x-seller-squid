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
import { ServiceLocalStorage } from './serviceLocalStorageClient';
import { DomainRegistrationTgLogger } from './loggerTgBot';

const { config } = getChain();

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive(config.sellerChain.chainName, { release: 'FireSquid' })
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

DomainRegistrationTgLogger.getInstance().init();

processor.run(new TypeormDatabase(), async (ctx) => {
  ctx.log.info(
    `Is head of archive - ${ctx.isHead} :: Batch size - ${ctx.blocks.length}`
  );
  await WalletClient.getInstance().init();
  await SellerChainClient.getInstance().init();
  await BuyerChainClient.getInstance().init();
  await ServiceLocalStorage.getInstance().init();

  if (ctx.isHead && config.sellerIndexer.processingDisabled) {
    ctx.log.info(
      `Processing flow has been interrupted as squid is in silent mode.`
    );
    return;
  }

  SocialRemark.setConfig({ protNames: [config.sellerChain.remark.protName] });

  let callsData = parseCalls(ctx);

  console.log('callsData >>> ');
  console.dir(callsData, { depth: null });

  await handleSellerActions(callsData, ctx);
});
