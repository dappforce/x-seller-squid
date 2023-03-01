import { CallParsed } from '../parser/types';
import { SubSclRemarkMessageAction } from '../remark/types';
import { handleDomainRegisterPayment } from './domain';

export async function handleSellerActions(parsedActions: CallParsed[]) {
  for (const actionsData of parsedActions) {
    if (!actionsData.remark.valid) continue; // TODO add handling for such case

    switch (actionsData.remark.action as SubSclRemarkMessageAction) {
      case 'D_REG_PAY': {
        // TODO fix types
        // @ts-ignore
        await handleDomainRegisterPayment(actionsData);
        break;
      }
      case 'D_REG_COMP': {
        break;
      }
      case 'D_REG_REFUND': {
        break;
      }
      case 'EN_GEN_PAY': {
        // TODO add handling for such case
        break;
      }
      case 'EN_GEN_REFUND': {
        // TODO add handling for such case
        break;
      }
      case 'EN_GEN_COMP': {
        // TODO add handling for such case
        break;
      }
      case 'M_G': {
        // TODO add handling for such case
        break;
      }
      default:
    }
  }
}
