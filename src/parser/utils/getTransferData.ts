import { Block, EventItem, Ctx } from '../../processor';
import { Event } from '../../chains/polkadotSubsocial/types/support';
import { BalancesTransferEventData } from '../../types/common';
import { getChain } from '../../chains';
const { api } = getChain();

export function getTransferData(
  block: Block,
  parentBatchCallId: string,
  ctx: Ctx
): BalancesTransferEventData | null {
  // TODO Fix types
  const balanceTransferEvent = block.items.find(
    (item) =>
      item.kind === 'event' &&
      item.name === 'Balances.Transfer' &&
      item.event.call &&
      // @ts-ignore
      item.event.call!.parent &&
      // @ts-ignore
      item.event.call!.parent!.id === parentBatchCallId &&
      // @ts-ignore
      item.event.call.parent.name === 'Utility.batch_all'
  ) as EventItem | undefined;

  if (!balanceTransferEvent)
    throw new Error(
      'Balances.Transfer cannot be found within particular Utility.batch_all'
    );

  const eventDataParsed = api.events.parseBalancesTransferEvent(
    balanceTransferEvent.event as Event,
    ctx
  );

  return {
    from: eventDataParsed.from,
    to: eventDataParsed.to,
    amount: eventDataParsed.amount,
    // @ts-ignore
    transferEventIndexInBlock: balanceTransferEvent.event.indexInBlock
  };
}
