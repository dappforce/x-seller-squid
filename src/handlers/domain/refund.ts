import { Ctx } from '../../processor';
import { WalletClient } from '../../walletClient';
import { SellerChainClient } from '../../wsClient';
import { SubSclSource } from '../../remark/types';
import { SocialRemark } from '../../remark';
import { getChain } from '../../chains';
import {
  DomainRegistrationOrder,
  OrderError,
  OrderRefundStatus
} from '../../model';
import { ChainActionResult } from '../../wsClient/types';
import { In } from 'typeorm';
import { StatusesMng } from '../../utils/statusesManager';

const { config } = getChain();

export async function refundDomainRegistrationPaymentByOrder(
  registrationOrderEntity: DomainRegistrationOrder,
  ctx: Ctx
) {
  ctx.log.info(
    `Refund for domain registration order ID [${registrationOrderEntity.id}] has been started.`
  );

  if (!registrationOrderEntity.purchaseTx) {
    ctx.log.error(
      `DomainRegistrationOrder with id -${registrationOrderEntity.id} doesn't contain purchaseTx`
    );
    return;
  }

  if (!registrationOrderEntity.purchaseRmrk) {
    ctx.log.error(
      `DomainRegistrationOrder with id -${registrationOrderEntity.id} doesn't contain purchaseRmrk`
    );
    return;
  }

  const { purchaseTx, purchaseRmrk } = registrationOrderEntity;

  const saveDomainRegOrderOnFail = async (
    errorData: ChainActionResult
  ): Promise<void> => {
    registrationOrderEntity.refundStatus = OrderRefundStatus.Failed;
    registrationOrderEntity.errorRefund = new OrderError(errorData);

    await ctx.store.save(registrationOrderEntity);
  };

  const sellerWsClient = SellerChainClient.getInstance();

  const refundTransfer = sellerWsClient.api.tx.balances.transfer(
    purchaseTx.from.id,
    purchaseTx.amount // TODO calculate refund amount
  );

  const refundRmrkMsg: SubSclSource<'DMN_REG_REFUND'> = {
    protName: config.sellerChain.remark.protName,
    version: config.sellerChain.remark.version,
    action: 'DMN_REG_REFUND',
    content: {
      domainName: purchaseRmrk.content.domainName,
      target: purchaseRmrk.content.target,
      token: purchaseRmrk.content.token,
      opId: purchaseRmrk.content.opId
    }
  };

  const remarkTx = sellerWsClient.api.tx.system.remark(
    new SocialRemark().fromSource(refundRmrkMsg).toMessage()
  );

  try {
    const result = await sellerWsClient.sendBatchAll(
      WalletClient.getInstance().account.sellerTreasury,
      [refundTransfer, remarkTx]
    );
    ctx.log.info(
      result,
      'DMN_REG_REFUND remark and refund transfer TS result >>> '
    );

    if (result.success) {
      // TODO check necessity of line below
      // registrationOrder.refundStatus = OrderRefundStatus.Fulfilled;

      await ctx.store.save(registrationOrderEntity);
      // TODO implement some solution how to deal with delay between refund batch and processing of DMN_REG_REFUND remark + update DB and closing order
      ctx.log.info('Refund has been done successfully. Order updated.');
    } else {
      const eData = {
        ...StatusesMng.getStatusWithReason('Domain', 'ErrorRefundUnknownError'),
        success: false,
        reason: 'Error has been occurred on send refund batchAll call',
        ...(await sellerWsClient.getBlockMeta())
      };
      ctx.log.error(eData);
      await saveDomainRegOrderOnFail(eData);
      ctx.log.error('Refund has been finished with error. Order updated.');
    }
  } catch (errorResult) {
    console.log(errorResult);

    const eData = {
      ...StatusesMng.getStatusWithReason('Domain', 'ErrorRefundUnknownError'),
      success: false,
      reason: errorResult
        ? (errorResult as Error).message ||
          (errorResult as ChainActionResult).reason
        : 'Unknown error has been occurred.', // TODO Fix types
      ...(await sellerWsClient.getBlockMeta())
    };
    ctx.log.error(eData);
    await saveDomainRegOrderOnFail(eData);
    ctx.log.error('Refund has been finished with error. Order updated.');
  }
}

export async function handleRefundActionOnWaitingFromList(
  orderIdsForRefund: string[],
  ctx: Ctx
): Promise<void> {
  /**
   * We need filter results by refundStatus === Waiting in case squid will be
   * started and first data batch will contain all available requested data.
   * It meant that squid will reach head of the archive immediately after
   * start in first batch what can cause wrong extra evoking
   * "refundDomainRegistrationPayment" function.
   */
  const failedOrders = await ctx.store.find(DomainRegistrationOrder, {
    where: {
      id: In(orderIdsForRefund),
      refundStatus: OrderRefundStatus.Waiting
    },
    relations: {
      purchaseTx: {
        from: true,
        to: true
      }
    }
  });
  for (const order of failedOrders) {
    await refundDomainRegistrationPaymentByOrder(order, ctx);
  }

  ctx.log.info(
    `${failedOrders.length} refunds have been processed from list of IDs`
  );
}

export async function handleRefundActionOnWaitingAll(ctx: Ctx): Promise<void> {
  /**
   * We need filter results by refundStatus === Waiting in case squid will be
   * started and first data batch will contain all available requested data.
   * It meant that squid will reach head of the archive immediately after
   * start in first batch what can cause wrong extra evoking
   * "refundDomainRegistrationPayment" function.
   */
  const failedOrders = await ctx.store.find(DomainRegistrationOrder, {
    where: {
      refundStatus: OrderRefundStatus.Waiting
    },
    relations: {
      purchaseTx: {
        from: true,
        to: true
      }
    }
  });
  for (const order of failedOrders) {
    await refundDomainRegistrationPaymentByOrder(order, ctx);
  }

  ctx.log.info(
    `${
      failedOrders.length
    } refunds have been processed on scheduled processing at block ${
      ctx.blocks.length - 1
    }`
  );
}
