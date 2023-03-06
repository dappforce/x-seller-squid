import { CallParsed } from '../../parser/types';
import { Ctx } from '../../processor';
import { OrderRefundStatus, DomainRegistrationOrder } from '../../model';

export async function handleDomainRegistrationRefundCompleted(
  callData: CallParsed<'DMN_REG_REFUND', true>,
  ctx: Ctx
) {
  const { remark } = callData;

  const existingRegistrationEntity = await ctx.store.findOne(
    DomainRegistrationOrder,
    {
      where: {
        id: remark.content.opId
      },
      relations: {
        domain: true,
        target: true
      }
    }
  );

  if (!existingRegistrationEntity) {
    ctx.log.error(
      `Username Registration Order for attempt ${remark.content.opId} can not be found.`
    );
    // TODO handle this case
    return;
  }

  existingRegistrationEntity.refundStatus = OrderRefundStatus.Fulfilled;
  existingRegistrationEntity.refundRmrk = remark;
  existingRegistrationEntity.refundBlockHashSellerChain = callData.blockHash;
  existingRegistrationEntity.refundRemarkCallId = callData.remarkCallId;

  await ctx.store.save(existingRegistrationEntity);
}
