import { SocialRemark } from '../../remark';
import { CallParsed, RemarkCallItem } from '../types';
import { Block, Ctx } from '../../processor';

export function parseDomainRegisterCompletedCall(
  remark: SocialRemark,
  callItem: RemarkCallItem,
  blockHeader: Block['header'],
  ctx: Ctx
): CallParsed<'DMN_REG_OK'> | null {
  return {
    remarkCallId: callItem.call.id,
    blockNumber: blockHeader.height,
    blockHash: blockHeader.hash,
    timestamp: new Date(blockHeader.timestamp),
    extrinsicHash: callItem.extrinsic.hash,
    // @ts-ignore
    remark: remark.message
  };
}
