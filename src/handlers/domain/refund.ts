import { CallParsed } from '../../parser/types';
import { Ctx } from '../../processor';
import { WalletClient } from '../../walletClient';
import { SellerChainClient } from '../../wsClient';
import { SubSclSource } from '../../remark/types';
import { SocialRemark } from '../../remark';
import { getChain } from '../../chains';
import { updateDomainRegistrationOrderRefundStatus } from '../../entities';
import {
  OrderRefundStatus,
  OrderRequestStatus,
  DomainRegistrationOrder,
  OrderError
} from '../../model';
import { ChainActionResult } from '../../wsClient/types';
const { config } = getChain();

export async function refundDomainRegistrationPayment(
  callData: CallParsed<'DMN_REG', true>,
  ctx: Ctx
) {
  ctx.log.info(
    `Refund for domain registration order ID [${callData.remark.content.opId}] has been started.`
  );
  let recipient: string | null = callData.from ?? null;

  const registrationOrder = await ctx.store.get(
    DomainRegistrationOrder,
    callData.remark.content.opId
  );
  if (!registrationOrder) {
    ctx.log.error(
      `DomainRegistrationOrder with id -${callData.remark.content.opId} cannot be found`
    );
    return;
  }

  const saveDomainRegEntityOnFail = async (
    errorData: ChainActionResult
  ): Promise<void> => {
    registrationOrder.status = OrderRequestStatus.Failed;
    registrationOrder.refundStatus = OrderRefundStatus.Waiting;
    registrationOrder.errorRegistration = new OrderError(
      errorData
    );

    await ctx.store.save(registrationOrder);
  };

  if (!recipient) {
    await saveDomainRegEntityOnFail({
      success: false,
      status: 10100,
      reason: 'Refund recipient has not been provided'
    });
    return;
  }
  const sellerWsClient = SellerChainClient.getInstance();

  const refundTransfer = sellerWsClient.api.tx.balances.transfer(
    // WalletClient.getInstance().account.sellerTreasury.address,
    recipient,
    callData.amount
  );

  const refundRmrkMsg: SubSclSource<'DMN_REG_REFUND'> = {
    protName: config.sellerChain.remark.protName,
    version: config.sellerChain.remark.version,
    action: 'DMN_REG_REFUND',
    content: {
      domainName: callData.remark.content.domainName,
      target: callData.remark.content.target,
      token: callData.remark.content.token,
      opId: callData.remark.content.opId
    }
  };

  console.log(new SocialRemark().fromSource(refundRmrkMsg).toMessage());

  const remarkTx = sellerWsClient.api.tx.system.remark(
    new SocialRemark().fromSource(refundRmrkMsg).toMessage()
  );

  try {
    const result = await sellerWsClient.sendBatchAll(
      WalletClient.getInstance().account.sellerTreasury,
      [refundTransfer, remarkTx]
    );
    console.log('result >>> ');
    console.dir(result, { depth: null });

    if (result.success && result.status === 201) {
      registrationOrder.refundStatus = OrderRefundStatus.Fulfilled;

      await ctx.store.save(registrationOrder);
    } else {
      const eData = {
        success: false,
        status: 10100,
        reason: 'Error has been occurred in send refund batchAll call',
        ...(await sellerWsClient.getBlockMeta())
      };
      ctx.log.error(eData);
      await saveDomainRegEntityOnFail(eData);
      // TODO run refund process
    }
  } catch (errorResult) {
    console.log('refund error');
    console.dir(errorResult, { depth: null });

    const eData = {
      success: false,
      status: 10100,
      reason: errorResult
        ? (errorResult as Error).message ||
          (errorResult as ChainActionResult).reason
        : 'Unknown error has been occurred.', // TODO Fix types
      ...(await sellerWsClient.getBlockMeta())
    };
    ctx.log.error(eData);
    await saveDomainRegEntityOnFail(eData);
  }
}
