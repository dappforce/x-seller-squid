import {
  SubSclRemarkMessage,
  SubSclRemarkMessageAction
} from '../remark/types';
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection';

export interface CallParsed<
  A extends SubSclRemarkMessageAction | string = '',
  V extends boolean = true
> {
  remarkCallId: string;
  batchAllCallId?: string;
  blockNumber: number;
  blockHash: string;
  timestamp: Date;
  extrinsicHash?: string;
  from?: string;
  to?: string;
  amount: bigint;
  remark: SubSclRemarkMessage<A, V>;
}

export type ParsedCallsDataList = CallParsed<
  | 'D_REG_PAY'
  | 'D_REG_COMP'
  | 'D_REG_REFUND'
  | 'EN_GEN_PAY'
  | 'EN_GEN_COMP'
  | 'EN_GEN_REFUND'
>[];

export type TransferData<C extends CallParsed> = Required<
  Pick<
    C,
    | 'batchAllCallId'
    | 'blockNumber'
    | 'blockHash'
    | 'timestamp'
    | 'extrinsicHash'
    | 'from'
    | 'to'
    | 'amount'
  >
>;

export const requiredPurchaseBatchCalls = new Set([
  'Balances.transfer',
  'System.remark'
]);

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
