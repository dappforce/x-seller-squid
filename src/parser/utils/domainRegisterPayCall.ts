import { SocialRemark } from '../../remark';
import { Block, Ctx } from '../../processor';
import {
  AllCallItem,
  CallParsed,
  RemarkCallItem,
  requiredPurchaseBatchCalls
} from '../types';
import { encodeAccount } from '../../utils';
import { UtilityBatchAllCall } from '../../types/generated/calls';
import { getChain } from '../../chains';
import { getBalancesTransferEventData } from './getBalancesTransferEventData';

const { config } = getChain();

export function parseDomainRegisterPayCall(
  remark: SocialRemark,
  callItem: RemarkCallItem,
  block: Block,
  ctx: Ctx
): CallParsed<'DMN_REG'> | null {
  // @ts-ignore
  if (callItem.call.parent.name !== 'Utility.batch_all') return;
  let signerEncoded: string | null = null;

  if (
    callItem.extrinsic.signature &&
    callItem.extrinsic.signature.address &&
    callItem.extrinsic.signature.address.__kind &&
    callItem.extrinsic.signature.address.__kind === 'Id'
  ) {
    signerEncoded = encodeAccount(
      callItem.extrinsic.signature.address.value,
      config.sellerChain.prefix
    );
  }

  if (
    !signerEncoded ||
    !callItem.call.parent ||
    callItem.call.parent.name !== 'Utility.batch_all' ||
    (callItem.call.parent.name === 'Utility.batch_all' &&
      !callItem.call.parent.success) ||
    !callItem.call.parent.args.calls ||
    callItem.call.parent.args.calls.length !== 2 ||
    !callItem.call.parent.args.calls.every((c: AllCallItem) => {
      // @ts-ignore
      const callName = `${c.__kind}.${c.value.__kind}`;
      return requiredPurchaseBatchCalls.has(callName);
    })
  )
    return null;

  const batchAllCallId = callItem.call.parent!.id;

  const transferData = getBalancesTransferEventData(block, batchAllCallId, ctx);

  if (!transferData) return null;

  return {
    remarkCallId: callItem.call.id,
    batchAllCallId: batchAllCallId,
    transferEventIndexInBlock: transferData.transferEventIndexInBlock,
    extrinsicHash: callItem.extrinsic.hash,
    blockNumber: block.header.height,
    blockHash: block.header.hash,
    timestamp: new Date(block.header.timestamp),
    from: transferData.from,
    to: transferData.to,
    amount: transferData.amount,
    // @ts-ignore
    remark: remark.message
  };
}

//
// import { SocialRemark } from '../../remark';
// import { Block, Ctx } from '../../processor';
// import {
//   AllCallItem,
//   CallParsed,
//   RemarkCallItem,
//   requiredPurchaseBatchCalls
// } from '../types';
// import { encodeAccount } from '../../utils';
// import { UtilityBatchAllCall } from '../../types/generated/calls';
// import { getChain } from '../../chains';
//
// const { config } = getChain();
//
// export function parseDomainRegisterPayCall(
//   remark: SocialRemark,
//   callItem: RemarkCallItem,
//   blockHeader: Block['header'],
//   ctx: Ctx
// ): CallParsed<'DMN_REG'> | null {
//   // @ts-ignore
//   if (callItem.call.parent.name !== 'Utility.batch_all') return;
//   let signerEncoded: string | null = null;
//
//   if (
//     callItem.extrinsic.signature &&
//     callItem.extrinsic.signature.address &&
//     callItem.extrinsic.signature.address.__kind &&
//     callItem.extrinsic.signature.address.__kind === 'Id'
//   ) {
//     signerEncoded = encodeAccount(
//       callItem.extrinsic.signature.address.value,
//       config.sellerChain.prefix
//     );
//   }
//
//   const ubc = new UtilityBatchAllCall(ctx, callItem.call.parent!);
//   const batchAllCallId = callItem.call.parent!.id;
//
//   const geTransferCallData = <
//     C extends { __kind: string; value: { __kind: string } }
//   >(
//     calls: C[]
//   ): { to: string; amount: bigint } | null => {
//     const bTransferCall: C | null =
//       calls.find(
//         (c: C) => c.__kind === 'Balances' && c.value.__kind === 'transfer'
//       ) ?? null;
//
//     // @ts-ignore
//     if (!bTransferCall || bTransferCall.value.dest.__kind !== 'Id') return null;
//
//     return {
//       to: encodeAccount(
//         // @ts-ignore
//         bTransferCall.value.dest.value,
//         config.sellerChain.prefix
//       ),
//       // @ts-ignore
//       amount: bTransferCall.value.value
//     };
//
//     //TODO add native Subsquid call parsing
//
//     // const bTransferCallInst = new BalancesTransferCall(ctx, {
//     //   name: 'Balances.transfer',
//     //   args: bTransferCall
//     // });
//     //
//     // if (bTransferCallInst.isV9190) {
//     //   const data = bTransferCallInst.asV9190;
//     //   if (data.dest.__kind === 'Id') {
//     //     return {
//     //       to: ss58.codec('rococo').encode(data.dest.value),
//     //       amount: data.value
//     //     };
//     //   }
//     //   return null;
//     // }
//     return null;
//   };
//
//   let transferData: { to: string; amount: bigint } | null = null;
//   let calls: any = [];
//
//   if (ubc.isV9190) {
//     calls = ubc.asV9190.calls;
//   } else if (ubc.isV9220) {
//     calls = ubc.asV9220.calls;
//   }
//   if (ubc.isV9250) {
//     calls = ubc.asV9250.calls;
//   }
//   if (ubc.isV9300) {
//     calls = ubc.asV9300.calls;
//   }
//   if (ubc.isV9310) {
//     calls = ubc.asV9310.calls;
//   }
//   if (ubc.isV9321) {
//     calls = ubc.asV9321.calls;
//   }
//   if (ubc.isV9370) {
//     calls = ubc.asV9370.calls;
//   }
//
//   transferData = geTransferCallData(calls);
//
//   if (
//     !signerEncoded ||
//     !transferData ||
//     !callItem.call.parent ||
//     callItem.call.parent.name !== 'Utility.batch_all' ||
//     (callItem.call.parent.name === 'Utility.batch_all' &&
//       !callItem.call.parent.success) ||
//     !callItem.call.parent.args.calls ||
//     callItem.call.parent.args.calls.length !== 2 ||
//     !callItem.call.parent.args.calls.every((c: AllCallItem) => {
//       // @ts-ignore
//       const callName = `${c.__kind}.${c.value.__kind}`;
//       return requiredPurchaseBatchCalls.has(callName);
//     })
//   )
//     return null;
//
//   return {
//     remarkCallId: callItem.call.id,
//     batchAllCallId: batchAllCallId,
//     blockNumber: blockHeader.height,
//     blockHash: blockHeader.hash,
//     timestamp: new Date(blockHeader.timestamp),
//     extrinsicHash: callItem.extrinsic.hash,
//     from: signerEncoded,
//     to: transferData.to,
//     amount: transferData.amount,
//     // @ts-ignore
//     remark: remark.message
//   };
// }
