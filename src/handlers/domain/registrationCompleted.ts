import { CallParsed } from '../../parser/types';
import { Ctx } from '../../processor';
import { OrderRequestStatus, DomainRegistrationOrder } from '../../model';
import { ensureDomainRegRemark } from '../../entities/remark';
import { In } from 'typeorm';
import { DomainRegistrationTgLogger } from '../../loggerTgBot';

export async function handleUsernameRegistrationCompleted(
  callData: CallParsed<'DMN_REG_OK', true>,
  ctx: Ctx
) {
  const { remark } = callData;

  const existingRegistrationEntity = await ctx.store.findOne(
    DomainRegistrationOrder,
    {
      where: {
        id: remark.content.opId,
        status: In([OrderRequestStatus.InBlock, OrderRequestStatus.Processing])
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

  const domainRegTgLogger = await DomainRegistrationTgLogger.getInstance().init();

  existingRegistrationEntity.updatedAtBlock = callData.blockNumber;
  existingRegistrationEntity.updatedAtTime = callData.timestamp;
  existingRegistrationEntity.status = OrderRequestStatus.Successful;
  existingRegistrationEntity.confirmationRmrk = ensureDomainRegRemark(remark);
  existingRegistrationEntity.confirmedBlockHashSellerChain = callData.blockHash;
  existingRegistrationEntity.confirmedRemarkCallId = callData.remarkCallId;

  const domain = existingRegistrationEntity.domain;

  domain.createdAt = callData.timestamp;
  domain.createdAtBlock = callData.blockNumber;
  domain.owner = existingRegistrationEntity.target;

  await ctx.store.save(domain);
  await ctx.store.save(existingRegistrationEntity);

  await domainRegTgLogger.addOrderStatus(
    existingRegistrationEntity.id,
    'DmnRegOk'
  );
  await domainRegTgLogger.addOrderStatus(
    existingRegistrationEntity.id,
    'Successful'
  );
}
