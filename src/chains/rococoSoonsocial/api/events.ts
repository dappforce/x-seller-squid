import { ChainContext, Event } from '../types/support';
import { Ctx, EventItem } from '../../../processor';
import { BalancesTransferEventParsedData } from '../../../types/common';
import { BalancesTransferEvent } from '../types/events';
import { UnknownVersionError } from '../../utils/errors';
import { encodeAccount } from '../../../utils';

export function parseBalancesTransferEvent(
  event: Event,
  ctx: Ctx
): BalancesTransferEventParsedData {
  const eventData = new BalancesTransferEvent(ctx, event);

  if (eventData.isV9190) {
    const { from, to, amount } = eventData.asV9190;
    return {
      from: encodeAccount(from, 28),
      to: encodeAccount(to, 28),
      amount
    };
  }
  throw new UnknownVersionError(eventData.constructor.name);
}
