import { SocialRemark } from '@subsocial/utils';
import { RemarkCallItem } from '../../types/common';
import { Block, Ctx } from '../../processor';
import { CallParsed } from '../types';
import { WalletClient } from '../../walletClient';
import { getChain } from '../../chains';

const { config } = getChain();

export function parseDomainRegisterCompletedCall(
  remark: SocialRemark,
  callItem: RemarkCallItem,
  block: Block,
  ctx: Ctx
): CallParsed<'DMN_REG_OK'> | null {
  let signer: Uint8Array | null = null;

  if (
    callItem.extrinsic.signature &&
    callItem.extrinsic.signature.address &&
    callItem.extrinsic.signature.address.__kind &&
    callItem.extrinsic.signature.address.__kind === 'Id'
  ) {
    signer = callItem.extrinsic.signature.address.value;
  }

  if (
    !signer ||
    !config.sellerIndexer.allowedRemarkSigners.has(
      WalletClient.addressToHex(signer)
    )
  ) {
    ctx.log.warn(
      `DMN_REG_OK signer is undefined or invalid - ${
        signer
          ? WalletClient.addressFromAnyToFormatted(signer, 28)
          : '[undefined]'
      } :: at block ${block.header.height}`
    );
    return null;
  }

  return {
    remarkCallId: callItem.call.id,
    blockNumber: block.header.height,
    blockHash: block.header.hash,
    timestamp: new Date(block.header.timestamp),
    timestampRaw: block.header.timestamp,
    extrinsicHash: callItem.extrinsic.hash,
    // @ts-ignore
    remark: remark.source
  };
}
