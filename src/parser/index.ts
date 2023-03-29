import { SocialRemark } from '@subsocial/utils';
import { ParsedCallsDataList } from './types';
import { Ctx } from '../processor';
import {
  parseDomainRegisterPayCall,
  parseDomainRegisterCompletedCall,
  parseDomainRegisterRefundCall
} from './utils';
import { getChain } from '../chains';
const { api } = getChain();

export function parseCalls(ctx: Ctx): ParsedCallsDataList {
  let callsParsed: ParsedCallsDataList = [];

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.kind === 'call' && item.name == 'System.remark') {
        // TODO need check this check
        if (!item.call.success || !item.call.origin) continue;

        const remark: SocialRemark = new SocialRemark().fromMessage(
          api.calls.parseSystemRemarkCall(item.call, ctx)
        );

        if (!remark || !remark.isValidMessage) {
          continue;
        }

        switch (remark.message.action) {
          case 'DMN_REG': {
            const data = parseDomainRegisterPayCall(remark, item, block, ctx);
            if (data) callsParsed.push(data);
            break;
          }
          case 'DMN_REG_OK': {
            const data = parseDomainRegisterCompletedCall(
              remark,
              item,
              block,
              ctx
            );
            if (data) callsParsed.push(data);
            break;
          }
          case 'DMN_REG_REFUND': {
            const data = parseDomainRegisterRefundCall(
              remark,
              item,
              block,
              ctx
            );
            if (data) callsParsed.push(data);
            break;
          }
          default:
            console.log(
              `Handler for action ${
                remark.message!.action
              } is not implemented yet.`
            );
        }
      }
    }
  }
  return callsParsed;
}
