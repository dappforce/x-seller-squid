import { CallParsed, ParsedCallsDataList } from '../parser/types';
import { SubSclRemarkMessageAction } from '../remark/types';
import { handleDomainRegisterPayment } from './domain';
import { Ctx } from '../processor';
import { handleUsernameRegistrationCompleted } from './domain/registrationCompleted';
import { handleDomainRegistrationRefundCompleted } from './domain/refundCompleted';

export async function handleSellerActions(
  parsedActions: ParsedCallsDataList,
  ctx: Ctx
) {
  for (const actionsData of parsedActions) {
    if (!actionsData.remark.valid) continue; // TODO add handling for such case

    switch (actionsData.remark.action as SubSclRemarkMessageAction) {
      case 'D_REG_PAY': {
        await handleDomainRegisterPayment(
          actionsData as CallParsed<'D_REG_PAY'>,
          ctx
        );
        break;
      }
      case 'D_REG_COMP': {
        await handleUsernameRegistrationCompleted(
          actionsData as CallParsed<'D_REG_COMP'>,
          ctx
        );
        break;
      }
      case 'D_REG_REFUND': {
        await handleDomainRegistrationRefundCompleted(
          actionsData as CallParsed<'D_REG_REFUND'>,
          ctx
        );
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
