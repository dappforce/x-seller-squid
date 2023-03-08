import { SocialRemark } from '../../remark';
import { Block, Ctx } from '../../processor';
import { CallParsed, requiredPurchaseBatchCalls } from '../types';
import { AllCallItem, RemarkCallItem } from '../../types/common';
import { encodeAccount } from '../../utils';
import { getChain } from '../../chains';
import { getTransferData } from './getTransferData';

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

  const transferData = getTransferData(block, batchAllCallId, ctx);

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
