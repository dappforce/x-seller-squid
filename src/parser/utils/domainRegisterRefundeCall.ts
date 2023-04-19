import { SocialRemark } from '@subsocial/utils';
import { Block, Ctx } from '../../processor';
import { CallParsed, requiredPurchaseBatchCalls } from '../types';
import { AllCallItem, RemarkCallItem } from '../../types/common';
import { encodeAccount } from '../../utils';
import { getChain } from '../../chains';
import { getTransferData } from './getTransferData';
import { WalletClient } from '../../walletClient';

const { config } = getChain();

export function parseDomainRegisterRefundCall(
  remark: SocialRemark,
  callItem: RemarkCallItem,
  block: Block,
  ctx: Ctx
): CallParsed<'DMN_REG_REFUND_OK'> | null {
  // @ts-ignore
  if (callItem.call.parent.name !== 'Utility.batch_all') return;
  let signer: Uint8Array | null = null;

  if (
    callItem.extrinsic.signature &&
    callItem.extrinsic.signature.address &&
    callItem.extrinsic.signature.address.__kind &&
    callItem.extrinsic.signature.address.__kind === 'Id'
  ) {
    signer = callItem.extrinsic.signature.address.value;
  }

  if (!signer)
    ctx.log.warn(
      `Utility.batch_all signer is undefined :: block ${block.header.height}`
    );

  if (
    !signer ||
    !config.sellerIndexer.allowedRemarkSigners.has(
      WalletClient.addressToHex(signer)
    ) ||
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
  ) {
    ctx.log.warn(
      `Utility.batch_all is not valid at block ${block.header.height}`
    );
    return null;
  }

  const batchAllCallId = callItem.call.parent!.id;

  const transferData = getTransferData(block, batchAllCallId, ctx);

  if (!transferData) return null;

  return {
    remarkCallId: callItem.call.id,
    batchAllCallId: batchAllCallId,
    transferEventIndexInBlock: transferData.transferEventIndexInBlock,
    blockNumber: block.header.height,
    blockHash: block.header.hash,
    timestamp: new Date(block.header.timestamp),
    extrinsicHash: callItem.extrinsic.hash,
    from: transferData.from,
    to: transferData.to,
    amount: transferData.amount,
    // @ts-ignore
    remark: remark.source
  };
}
