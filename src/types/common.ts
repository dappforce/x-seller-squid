import {
  CallItem,
  EventItem
} from '@subsquid/substrate-processor/lib/interfaces/dataSelection';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';

export type RemarkCallItem = CallItem<
  'System.remark',
  {
    call: {
      args: true;
      origin: true;
      parent: true;
    };
    extrinsic: true;
  }
>;

export type AllCallItem = CallItem<
  '*',
  {
    call: {
      args: true;
      origin: true;
      parent: true;
    };
    extrinsic: true;
  }
>;

export type BalanceTransferEventItem = EventItem<
  'Balances.Transfer',
  {
    event: {
      args: true;
      call: {
        args: true;
        origin: true;
        parent: {
          id: string;
          name: string;
        };
      };
    };
  }
>;

export type BalancesTransferEventParsedData = {
  from: string;
  to: string;
  amount: bigint;
};

export type BalancesTransferEventData = BalancesTransferEventParsedData & {
  transferEventIndexInBlock: number;
};
