import { SystemRemarkCall } from '../types/generated/calls';
import { SocialRemark } from '../remark';
import { CallParsed, ParsedCallsDataList } from './types';
import { Ctx } from '../processor';
import {
  parseDomainRegisterPayCall,
  parseDomainRegisterCompletedCall,
  parseDomainRegisterRefundCall
} from './utils';

export function parseCalls(ctx: Ctx): ParsedCallsDataList {
  let callsParsed: ParsedCallsDataList = [];

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.kind === 'call' && item.name == 'System.remark') {
        // TODO need check this check
        if (!item.call.success || !item.call.origin) continue;

        let call = new SystemRemarkCall(ctx, item.call);
        let remark: SocialRemark | null = null;

        if (call.isV9190) {
          let data = call.asV9190;
          remark = new SocialRemark().fromMessage(
            SocialRemark.bytesToString(data.remark)
          );
        }

        if (!remark || !remark.isValidMessage) {
          continue;
        }

        switch (remark.message.action) {
          case 'DMN_REG': {
            const data = parseDomainRegisterPayCall(
              remark,
              item,
              block,
              ctx
            );
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
