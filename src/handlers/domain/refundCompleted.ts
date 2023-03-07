import { CallParsed } from '../../parser/types';
import { Ctx } from '../../processor';
import { OrderRefundStatus, DomainRegistrationOrder } from '../../model';
import { ensureDomainRegRemark } from '../../entities/remark';
import { createAndGetTransfer } from '../../entities';
import { WalletClient } from '../../walletClient';

export async function handleDomainRegistrationRefundCompleted(
  callData: CallParsed<'DMN_REG_REFUND', true>,
  isHeadOfEventsPool: boolean,
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
      `Domain Registration Order for attempt ${remark.content.opId} can not be found.`
    );
    // TODO handle this case
    return;
  }

  existingRegistrationEntity.refundStatus = OrderRefundStatus.Fulfilled;
  existingRegistrationEntity.refundRmrk = ensureDomainRegRemark(remark);
  existingRegistrationEntity.refundBlockHashSellerChain = callData.blockHash;
  existingRegistrationEntity.refundRemarkCallId = callData.remarkCallId;
  existingRegistrationEntity.refundTx = await createAndGetTransfer(
    {
      blockHash: callData.blockHash,
      txIndex: callData.transferEventIndexInBlock,
      extrinsicHash: callData.extrinsicHash,
      from: WalletClient.getInstance().account.sellerTreasury.address,
      to: callData.to,
      amount: callData.amount,
      token: remark.content.token
    },
    ctx
  );

  await ctx.store.save(existingRegistrationEntity);
}
