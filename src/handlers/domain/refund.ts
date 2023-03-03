import { CallParsed } from '../../parser/types';
import { Ctx } from '../../processor';
import { WalletClient } from '../../walletClient';
import { SellerChainClient } from '../../wsClient';
import { SubSclSource } from '../../remark/types';
import { SubSclRemark } from '../../remark';
import { getChain } from '../../chains';
import { updateDomainRegistrationOrderRefundStatus } from '../../entities/usernameRegistration';
import {
  RefundStatus,
  RegistrationStatus,
  UsernameRegistrationOrder,
  UsernameRegistrationOrderError
} from '../../model';
import { ChainActionResult } from '../../wsClient/types';
const { config } = getChain();

export async function refundDomainRegistrationPayment(
  callData: CallParsed<'D_REG_PAY', true>,
  ctx: Ctx
) {
  ctx.log.info(
    `Refund for domain registration order ID [${callData.remark.content.attemptId}] has been started.`
  );
  let recipient: string | null = callData.from ?? null;

  const registrationOrder = await ctx.store.get(
    UsernameRegistrationOrder,
    callData.remark.content.attemptId
  );
  if (!registrationOrder) {
    ctx.log.error(
      `UsernameRegistrationOrder with id -${callData.remark.content.attemptId} cannot be found`
    );
    return;
  }

  const saveDomainRegEntityOnFail = async (
    errorData: ChainActionResult
  ): Promise<void> => {
    registrationOrder.status = RegistrationStatus.Failed;
    registrationOrder.refundStatus = RefundStatus.Waiting;
    registrationOrder.errorRegistration = new UsernameRegistrationOrderError(
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

  const refundRmrkMsg: SubSclSource<'D_REG_REFUND'> = {
    title: config.sellerChain.remark.title,
    version: config.sellerChain.remark.version,
    action: 'D_REG_REFUND',
    content: {
      domainName: callData.remark.content.domainName,
      registrant: callData.remark.content.registrant,
      currency: callData.remark.content.currency,
      attemptId: callData.remark.content.attemptId
    }
  };

  console.log(new SubSclRemark().fromSource(refundRmrkMsg).toMessage());

  const remarkTx = sellerWsClient.api.tx.system.remark(
    new SubSclRemark().fromSource(refundRmrkMsg).toMessage()
  );

  try {
    const result = await sellerWsClient.sendBatchAll(
      WalletClient.getInstance().account.sellerTreasury,
      [refundTransfer, remarkTx]
    );
    console.log('result >>> ');
    console.dir(result, { depth: null });

    if (result.success && result.status === 201) {
      registrationOrder.refundStatus = RefundStatus.Fulfilled;

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
