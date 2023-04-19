import {
  SocialRemarkMessage,
  SocialRemarkMessageAction
} from '@subsocial/utils';

export interface CallParsed<
  A extends SocialRemarkMessageAction | string = '',
  V extends boolean = true
> {
  remarkCallId: string;
  batchAllCallId: string;
  transferEventIndexInBlock: number;
  blockNumber: number;
  blockHash: string;
  txHash: string;
  txIndex: string;
  timestamp: Date;
  timestampRaw: number;
  extrinsicHash: string;
  from: string;
  to: string;
  amount: bigint;
  remark: SocialRemarkMessage<A, V>;
}

export type ParsedCallsDataList = CallParsed<
  | 'DMN_REG'
  | 'DMN_REG_OK'
  | 'DMN_REG_REFUND'
  | 'DMN_REG_REFUND_OK'
  | 'NRG_GEN'
  | 'NRG_GEN_OK'
  | 'NRG_GEN_REFUND'
  | 'NRG_GEN_REFUND_OK'
>[];

export type BalanceTransferData = {
  // blockNumber: number;
  extrinsicHash: string;
  txIndex: number;
  blockHash: string;
  // timestamp: Date;
  from: string;
  to: string;
  amount: bigint;
  token: string;
};

export const requiredPurchaseBatchCalls = new Set([
  'Balances.transfer',
  'System.remark'
]);
