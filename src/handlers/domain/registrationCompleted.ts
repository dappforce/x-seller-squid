import { CallParsed } from '../../parser/types';
import { Ctx } from '../../processor';
import { OrderRequestStatus, DomainRegistrationOrder } from '../../model';

export async function handleUsernameRegistrationCompleted(
  callData: CallParsed<'DMN_REG_OK', true>,
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

  existingRegistrationEntity.status = OrderRequestStatus.Successful;
  existingRegistrationEntity.confirmationRmrk = remark;
  existingRegistrationEntity.confirmedBlockHashSellerChain = callData.blockHash;
  existingRegistrationEntity.confirmedRemarkCallId = callData.remarkCallId;

  const domain = existingRegistrationEntity.domain;

  domain.createdAt = callData.timestamp;
  domain.createdAtBlock = callData.blockNumber;
  domain.owner = existingRegistrationEntity.target;

  await ctx.store.save(domain);
  await ctx.store.save(existingRegistrationEntity);
}
