import { CallParsed } from '../../parser/types';
import { Ctx } from '../../processor';
import {
  DomainRegistrationOrder,
  OrderRefundStatus,
  OrderRequestStatus
} from '../../model';
import { ensureDomainRegRemark } from '../../entities/remark';
import { createAndGetTransfer } from '../../entities';
import { WalletClient } from '../../walletClient';
import { In, Not } from 'typeorm';
import { DomainRegistrationTgLogger } from '../../loggerTgBot';

export async function handleDomainRegistrationRefundCompleted(
  callData: CallParsed<'DMN_REG_REFUND_OK', true>,
  ctx: Ctx
) {
  const { remark } = callData;

  const existingRegistrationEntity = await ctx.store.findOne(
    DomainRegistrationOrder,
    {
      where: {
        id: remark.content.opId,
        status: In([OrderRequestStatus.Failed, OrderRequestStatus.Processing]),
        refundStatus: In([OrderRefundStatus.None, OrderRefundStatus.Waiting])
      },
      relations: {
        domain: true,
        target: true
      }
    }
  );

  if (!existingRegistrationEntity) {
    ctx.log.error(
      `Domain Registration Order for attempt ${remark.content.opId} can not be found.`
    );
    // TODO handle this case
    return;
  }

  const domainRegTgLogger = await DomainRegistrationTgLogger.getInstance().init();


  existingRegistrationEntity.updatedAtBlock = callData.blockNumber;
  existingRegistrationEntity.updatedAtTime = callData.timestamp;
  existingRegistrationEntity.refundStatus = OrderRefundStatus.Fulfilled;
  existingRegistrationEntity.refundRmrk = ensureDomainRegRemark(remark);
  existingRegistrationEntity.refundBlockHashSellerChain = callData.blockHash;
  existingRegistrationEntity.refundRemarkCallId = callData.remarkCallId;
  existingRegistrationEntity.refundTx = await createAndGetTransfer(
    {
      blockHash: callData.blockHash,
      txIndex: callData.transferEventIndexInBlock,
      extrinsicHash: callData.extrinsicHash,
      from: WalletClient.getInstance().account.sellerServicePayer.address,
      to: callData.to,
      amount: callData.amount,
      token: remark.content.token
    },
    ctx
  );

  await ctx.store.save(existingRegistrationEntity);

  await domainRegTgLogger.addOrderStatus(
    existingRegistrationEntity.id,
    'DmnRegRefundOk'
  );
}
