import { Block, EventItem, Ctx } from '../../processor';
import { BalanceTransferEventItem } from '../types';
import { BalancesTransferEvent } from '../../types/generated/events';
import { Event } from '../../types/generated/support';
import { encodeAccount } from '../../utils';

type BalancesTransferEventData = {
  from: string;
  to: string;
  amount: bigint;
  transferEventIndexInBlock: number;
};

export function getBalancesTransferEventData(
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
      item.event.call!.parent.id === parentBatchCallId &&
      // @ts-ignore
      item.event.call.parent.name === 'Utility.batch_all'
  ) as EventItem | undefined;

  if (!balanceTransferEvent)
    throw new Error(
      'Balances.Transfer cannot be found within particular Utility.batch_all'
    );

  const event = new BalancesTransferEvent(
    ctx,
    balanceTransferEvent.event as Event
  );

  if (event.isV9190) {
    const { from, to, amount } = event.asV9190;
    return {
      from: encodeAccount(from, 28),
      to: encodeAccount(to, 28),
      amount,
      // @ts-ignore
      transferEventIndexInBlock: balanceTransferEvent.event.indexInBlock
    };
  }

  return null;
}
