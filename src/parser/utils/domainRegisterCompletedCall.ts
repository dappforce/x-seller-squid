import { SocialRemark } from '@subsocial/utils';
import { RemarkCallItem } from '../../types/common';
import { Block, Ctx } from '../../processor';
import { CallParsed } from '../types';

export function parseDomainRegisterCompletedCall(
  remark: SocialRemark,
  callItem: RemarkCallItem,
  block: Block,
  ctx: Ctx
): CallParsed<'DMN_REG_OK'> | null {
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
