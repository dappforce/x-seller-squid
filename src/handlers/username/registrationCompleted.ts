import { CallParsed } from '../../parser/types';
import { BuyerChainClient } from '../../wsClient';
import { Ctx } from '../../processor';
import { RegistrationStatus, UsernameRegistrationOrder } from '../../model';

export async function handleUsernameRegistrationCompleted(
  callData: CallParsed<'D_REG_COMP', true>,
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

  existingRegistrationEntity.status = RegistrationStatus.Successful;
  existingRegistrationEntity.confirmationRmrk = remark;
  existingRegistrationEntity.confirmedBlockHashSellerChain = callData.blockHash;
  existingRegistrationEntity.confirmedRemarkCallId = callData.remarkCallId;

  const uName = existingRegistrationEntity.username;

  uName.createdAt = callData.timestamp;
  uName.createdAtBlock = callData.blockNumber;
  uName.owner = existingRegistrationEntity.registrant;

  await ctx.store.save(uName);

  console.log('--------');
  console.log('--------');
  console.log('--------');
  console.log('existingRegistrationEntity >>> ');
  console.dir(existingRegistrationEntity, { depth: null });

  await ctx.store.save(existingRegistrationEntity);
}
