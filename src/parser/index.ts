import { SystemRemarkCall } from '../types/generated/calls';
import { SubSclRemark } from '../remark';
import { CallParsed } from './types';
import { Ctx } from '../processor';
import {
  parseDomainRegisterPayCall,
  parseDomainRegisterCompletedCall
} from './utils';

export function parseCalls(ctx: Ctx): CallParsed<'D_REG_PAY' | 'D_REG_COMP'>[] {
  let callsParsed: CallParsed<'D_REG_PAY' | 'D_REG_COMP'>[] = [];

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == 'System.remark') {
        // TODO need check this check
        if (!item.call.success || !item.call.origin) continue;

        let call = new SystemRemarkCall(ctx, item.call);
        let remark: SubSclRemark | null = null;

        if (call.isV9190) {
          let data = call.asV9190;
          remark = new SubSclRemark().fromMessage(
            SubSclRemark.bytesToString(data.remark)
          );
        }

        if (!remark || !remark.isValidMessage) {
          continue;
        }

        switch (remark.message.action) {
          case 'D_REG_PAY': {
            const data = parseDomainRegisterPayCall(
              remark,
              item,
              block.header,
              ctx
            );
            if (data) callsParsed.push(data);
            break;
          }
          case 'D_REG_COMP': {
            const data = parseDomainRegisterCompletedCall(
              remark,
              item,
              block.header,
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
