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
      case 'DMN_REG': {
        await handleDomainRegisterPayment(
          actionsData as CallParsed<'DMN_REG'>,
          ctx
        );
        break;
      }
      case 'DMN_REG_OK': {
        await handleUsernameRegistrationCompleted(
          actionsData as CallParsed<'DMN_REG_OK'>,
          ctx
        );
        break;
      }
      case 'DMN_REG_REFUND': {
        await handleDomainRegistrationRefundCompleted(
          actionsData as CallParsed<'DMN_REG_REFUND'>,
          ctx
        );
        break;
      }
      case 'NRG_GEN': {
        // TODO add handling for such case
        break;
      }
      case 'NRG_GEN_REFUND': {
        // TODO add handling for such case
        break;
      }
      case 'NRG_GEN_OK': {
        // TODO add handling for such case
        break;
      }
      default:
    }
  }
}
