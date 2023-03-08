import { Block, ChainContext, Event } from '../polkadotSubsocial/types/support';
import { BalancesTransferEventParsedData } from '../../types/common';
import { CallItem, Ctx, EventItem } from '../../processor';
import { Call } from '../rococoSoonsocial/types/support';

export type ChainApi = {
  events: {
    parseBalancesTransferEvent: EventGetter<BalancesTransferEventParsedData>;
  };
  calls: {
    parseSystemRemarkCall: CallGetter<string>;
  };
};

type EventGetter<R> = (event: Event, ctx: Ctx) => R;
type CallGetter<R> = (call: Call, ctx: Ctx) => R;
