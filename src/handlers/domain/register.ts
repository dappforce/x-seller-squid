import { CallParsed } from '../../parser/types';
import { BuyerChainClient, SellerChainClient } from '../../wsClient';
import { Ctx } from '../../processor';
import { SocialRemark, SubSclSource } from '@subsocial/utils';
import { WalletClient } from '../../walletClient';
import {
  ensureDomainRegistrationOrder,
  createAndGetTransfer
} from '../../entities';
import { OrderRefundStatus, OrderRequestStatus, OrderError } from '../../model';
import { ChainActionResult } from '../../wsClient/types';
import { getChain } from '../../chains';
import {
  validateDomainAvailability,
  validateDomainMaxLength,
  validateDomainMinLength,
  validateDomainTld,
  validateRegistrationPayment,
  validateTargetDomainsMaxLimit
} from './utils/domainValidation';
import { StatusesMng } from '../../utils/statusesManager';
// import { refundDomainRegistrationPayment } from './refund';
const { config } = getChain();

export async function handleDomainRegisterPayment(
  callData: CallParsed<'DMN_REG', true>,
  isHeadOfEventsPool: boolean,
  ctx: Ctx
): Promise<string | null> {
  const {
    amount,
    remark: {
      content: { domainName, target, opId, token }
    }
  } = callData;
  const buyerChainClient = BuyerChainClient.getInstance();

  /**
   * Check paid amount
   */
  const transferredAmountValidation = await validateRegistrationPayment(amount);

  if (!transferredAmountValidation.success) {
    ctx.log.error(transferredAmountValidation);
    ctx.log.error('Processing of current registration request is skipped.');
    return null;
  }

  /**
   * We don't need to create this entity earlier as there are at least 2 steps
   * where process can be terminated. So we don't need wast time for redundant
   * async functionality.
   */
  const domainRegistrationOrder = await ensureDomainRegistrationOrder(
    callData,
    ctx,
    await createAndGetTransfer(
      {
        blockHash: callData.blockHash,
        txIndex: callData.transferEventIndexInBlock,
        extrinsicHash: callData.extrinsicHash,
        from: callData.from,
        to: callData.to,
        amount: callData.amount,
        token
      },
      ctx
    )
  );
  const saveUnameRegEntityOnFail = async (
    errorData: ChainActionResult
  ): Promise<void> => {
    domainRegistrationOrder.status = OrderRequestStatus.Failed;
    domainRegistrationOrder.refundStatus = OrderRefundStatus.Waiting;
    domainRegistrationOrder.errorRegistration = new OrderError(errorData);

    await ctx.store.save(domainRegistrationOrder);
  };

  /**
   * Check is domain available for registration
   */

  const dmnAvValidData = await validateDomainAvailability(domainName, target);

  if (!dmnAvValidData.success) {
    if (
      (dmnAvValidData.module === 'WsClient' &&
        dmnAvValidData.status === 'ErrorGetRegisteredDomainsFailed') ||
      (dmnAvValidData.module === 'Domain' &&
        dmnAvValidData.status === 'ErrorRegUnavailable')
    ) {
      domainRegistrationOrder.status = OrderRequestStatus.Failed;
      domainRegistrationOrder.refundStatus = OrderRefundStatus.Waiting;

      await saveUnameRegEntityOnFail(dmnAvValidData);
      return opId;
    }

    if (
      dmnAvValidData.module === 'Domain' &&
      dmnAvValidData.status === 'ErrorRegAlreadyOwnedByTarget'
    ) {
      domainRegistrationOrder.status = OrderRequestStatus.Processing;
      await ctx.store.save(domainRegistrationOrder);
      return null;
    }
  }

  /**
   * Check domain ending
   */
  const dmnTldValidData = await validateDomainTld(domainName);
  if (!dmnTldValidData.success) {
    await saveUnameRegEntityOnFail(dmnTldValidData);
    return opId;
  }

  /**
   * Check domain MIN length
   */

  const dmnMinLengthValidData = await validateDomainMinLength(domainName);

  if (!dmnMinLengthValidData.success) {
    await saveUnameRegEntityOnFail(dmnMinLengthValidData);
    return opId;
  }

  /**
   * Check domain MAX length
   */

  const dmnMaxLengthValidData = await validateDomainMaxLength(domainName);

  if (!dmnMaxLengthValidData.success) {
    await saveUnameRegEntityOnFail(dmnMaxLengthValidData);
    return opId;
  }

  /**
   * Check number of already registered domains by target
   */
  const targetMaxRegisteredDmnsValidData = await validateTargetDomainsMaxLimit(
    target
  );

  if (!targetMaxRegisteredDmnsValidData.success) {
    await saveUnameRegEntityOnFail(targetMaxRegisteredDmnsValidData);
    return opId;
  }

  /**
   * Execute registration process
   */

  try {
    const { domainName, target, token, opId } = callData.remark.content;

    const result = await buyerChainClient.registerDomain({
      target: WalletClient.addressFromHex(target, 28),
      domain: domainName
    });
    ctx.log.info(result, 'Domain registration request result');

    if (result.success) {
      domainRegistrationOrder.status = OrderRequestStatus.Processing;

      await ctx.store.save(domainRegistrationOrder);

      const compRmrkMsg: SubSclSource<'DMN_REG_OK'> = {
        protName: config.sellerChain.remark.protName,
        version: config.sellerChain.remark.version,
        action: 'DMN_REG_OK',
        content: {
          domainName: domainName,
          target: target,
          token: token,
          opId: opId
        }
      };

      const compRemarkResult = await SellerChainClient.getInstance().sendRemark(
        WalletClient.getInstance().account.sellerTreasury,
        new SocialRemark().fromSource(compRmrkMsg).toMessage()
      );

      if (!compRemarkResult.success) {
        // TODO add handling of such case when domain is registered successfully but DMN_REG_OK remark has not ben sent
      }
      ctx.log.info(compRemarkResult, 'DMN_REG_OK remark sending result >>> ');
      return null;
    } else {
      const eData = {
        success: false,
        ...StatusesMng.getStatusWithReason('Common', 'ErrorUnknown'),
        ...(await buyerChainClient.getBlockMeta())
      };
      ctx.log.error(eData);
      await saveUnameRegEntityOnFail(eData);
      return opId;
    }
  } catch (rejected) {
    console.log('handleDomainRegisterPayment result >>>');
    console.dir(rejected, { depth: null });
    const eData = {
      ...StatusesMng.getStatusWithReason('Common', 'ErrorUnknown'),
      success: false,
      reason: rejected
        ? (rejected as Error).message || (rejected as ChainActionResult).reason
        : 'Unknown error has been occurred.', // TODO Fix types
      ...(await buyerChainClient.getBlockMeta())
    };
    ctx.log.error(eData);
    await saveUnameRegEntityOnFail(eData);
    return opId;
  }
}
