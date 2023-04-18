import { CallParsed, ParsedCallsDataList } from '../parser/types';
import { SocialRemarkMessageAction } from '@subsocial/utils';
import {
  handleDomainRegisterPayment,
  handleDomainRegisterPaymentNotHead
} from './domain';
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
  const currentBatchDmnRegRefundActionOpIds: string[] = [];

  for (const [itemIndex, actionsData] of parsedActions.entries()) {
    if (!actionsData.remark.valid) continue; // TODO add handling for such case
    let refundActionOpId: string | null = null;

    switch (actionsData.remark.action as SocialRemarkMessageAction) {
      case 'DMN_REG': {
        /**
         * We need process DMN_REG action by different way when squid is in the
         * head of the chain and reindexing. It's required because we are making
         * domain availability validation (storage call to ***social blockchain)
         * with definition of specific block. So in reindexing of the squid
         * we can get extra registration of domains as availability validation
         * will be passed successfully for domains which are already registered
         * in next blocks but still available at remark call time.
         */

        /**
         * List of events in one blocks batch with the same
         * "remark.content.opId" value (one actions chain)
         */
        const actionsChain = parsedActions.filter(
          (act) => act.remark.content.opId === actionsData.remark.content.opId
        );
        if (ctx.isHead && actionsChain.length === 1) {
          ctx.log.info('Processing DMN_REG action on head.');
          refundActionOpId = await handleDomainRegisterPayment(
            actionsData as CallParsed<'DMN_REG'>,
            ctx
          );
        } else {
          ctx.log.info('Processing DMN_REG action on reindexing.');
          await handleDomainRegisterPaymentNotHead(
            actionsData as CallParsed<'DMN_REG'>,
            ctx
          );
        }

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

    if (refundActionOpId)
      currentBatchDmnRegRefundActionOpIds.push(refundActionOpId);
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
  } else if (ctx.isHead && currentBatchDmnRegRefundActionOpIds.length > 0) {
    await handleRefundActionOnWaitingFromList(
      currentBatchDmnRegRefundActionOpIds,
      ctx
    );
  }

  // TODO add checking all orders with status Processing which are older than
}
