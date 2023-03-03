import { CallParsed } from '../../parser/types';
import { Ctx } from '../../processor';
import { RefundStatus, UsernameRegistrationOrder } from '../../model';

export async function handleDomainRegistrationRefundCompleted(
  callData: CallParsed<'D_REG_REFUND', true>,
  ctx: Ctx
) {
  const { remark } = callData;

  const existingRegistrationEntity = await ctx.store.findOne(
    UsernameRegistrationOrder,
    {
      where: {
        id: remark.content.attemptId
      },
      relations: {
        username: true,
        registrant: true
      }
    }
  );

  if (!existingRegistrationEntity) {
    ctx.log.error(
      `Username Registration Order for attempt ${remark.content.attemptId} can not be found.`
    );
    // TODO handle this case
    return;
  }

  existingRegistrationEntity.refundStatus = RefundStatus.Fulfilled;
  existingRegistrationEntity.refundRmrk = remark;
  existingRegistrationEntity.refundBlockHashSellerChain = callData.blockHash;
  existingRegistrationEntity.refundRemarkCallId = callData.remarkCallId;

  await ctx.store.save(existingRegistrationEntity);
}
