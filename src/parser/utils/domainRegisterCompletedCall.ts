import { SubSclRemark } from '../../remark';
import { CallParsed, RemarkCallItem } from '../types';
import { Block, Ctx } from '../../processor';

export function parseDomainRegisterCompletedCall(
  remark: SubSclRemark,
  callItem: RemarkCallItem,
  blockHeader: Block['header'],
  ctx: Ctx
): CallParsed | null {
  return {
    id: callItem.call.id,
    blockNumber: blockHeader.height,
    blockHash: blockHeader.hash,
    timestamp: new Date(blockHeader.timestamp),
    extrinsicHash: callItem.extrinsic.hash,
    // @ts-ignore
    remark: remark.message
  };
}
