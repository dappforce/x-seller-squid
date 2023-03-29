import { CallParsed, ParsedCallsDataList } from '../parser/types';
import { SocialRemarkMessageAction } from '@subsocial/utils';
import { handleDomainRegisterPayment } from './domain';
import { Ctx } from '../processor';
import { handleUsernameRegistrationCompleted } from './domain/registrationCompleted';
import { handleDomainRegistrationRefundCompleted } from './domain/refundCompleted';
import {
  handleRefundActionOnWaitingAll,
  handleRefundActionOnWaitingFromList
} from './domain/refund';
import { getOrCreateProcessingState } from '../entities/procesingState';
import { getLastBatchBlockHeight } from '../utils';

export async function handleSellerActions(
  parsedActions: ParsedCallsDataList,
  ctx: Ctx
) {
  const currentBatchDmnRegRefundActions: string[] = [];

  for (const [itemIndex, actionsData] of parsedActions.entries()) {
    if (!actionsData.remark.valid) continue; // TODO add handling for such case
    const isHeadOfEventsPool = itemIndex < parsedActions.length - 1;
    let refundAction: string | null = null;

    switch (actionsData.remark.action as SocialRemarkMessageAction) {
      case 'DMN_REG': {
        refundAction = await handleDomainRegisterPayment(
          actionsData as CallParsed<'DMN_REG'>,
          isHeadOfEventsPool,
          ctx
        );
        break;
      }
      case 'DMN_REG_OK': {
        await handleUsernameRegistrationCompleted(
          actionsData as CallParsed<'DMN_REG_OK'>,
          isHeadOfEventsPool,
          ctx
        );
        break;
      }
      case 'DMN_REG_REFUND': {
        await handleDomainRegistrationRefundCompleted(
          actionsData as CallParsed<'DMN_REG_REFUND'>,
          isHeadOfEventsPool,
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

    if (refundAction) currentBatchDmnRegRefundActions.push(refundAction);
  }

  const processingState = await getOrCreateProcessingState(ctx);

  if (
    ctx.isHead &&
    processingState.domainRegRefundFullProcessingAtBlock + 1000 <
      getLastBatchBlockHeight(ctx)
  ) {
    /**
     * Check each 1000 blocks === about 3 hours
     */

    await handleRefundActionOnWaitingAll(ctx);

    processingState.domainRegRefundFullProcessingAtBlock =
      getLastBatchBlockHeight(ctx);
    await ctx.store.save(processingState);
  } else if (ctx.isHead && currentBatchDmnRegRefundActions.length > 0) {
    await handleRefundActionOnWaitingFromList(
      currentBatchDmnRegRefundActions,
      ctx
    );
  }
}
