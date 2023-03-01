import { SystemRemarkCall } from '../types/generated/calls';
import { SubSclRemark } from '../remark';
import { CallParsed } from './types';
import { Ctx } from '../processor';
import { parseDomainRegisterPayCall } from './utils';

export function parseBatches(ctx: Ctx): CallParsed[] {
  let callsParsed: CallParsed[] = [];

  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == 'System.remark') {
        // TODO need check this check
        if (!item.call.success || !item.call.origin) continue;

        let call = new SystemRemarkCall(ctx, item.call);
        let remark: SubSclRemark | null = null;

        if (call.isV9190) {
          let data = call.asV9190;
          remark = new SubSclRemark(SubSclRemark.bytesToString(data.remark));
        }

        if (!remark || !remark.isValidMessage) {
          continue;
        }

        switch (remark.message!.action) {
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
            const data = parseDomainRegisterPayCall(
              remark,
              item,
              block.header,
              ctx
            );
            if (data) callsParsed.push(data);
            break;
          }
          default:
        }
      }
    }
  }
  return callsParsed;
}
