import { CallParsed } from '../../parser/types';
import { BuyerChainClient, SellerChainClient } from '../../wsClient';
import { Ctx } from '../../processor';
import { SocialRemark, SubSclSource } from '@subsocial/utils';
import { WalletClient } from '../../walletClient';
import {
  createAndGetTransfer,
  ensureDomainRegistrationOrder
} from '../../entities';
import {
  DomainRegistrationOrder,
  OrderRefundStatus,
  OrderRequestStatus
} from '../../model';
import { ChainActionResult } from '../../wsClient/types';
import { getChain } from '../../chains';
import {
  validateDomainAvailability,
  validateDomainMaxLength,
  validateDomainMinLength,
  validateDomainRegistrationTargetAddress,
  validateDomainTld,
  validateRegistrationPayment,
  validateTargetDomainsMaxLimit
} from './utils/domainValidation';
import { StatusesMng } from '../../utils/statusesManager';
import { TokenName } from '../../chains/interfaces/processorConfig';
import { sleepTo } from '../../utils';
import {
  saveDomainRegOrderOnRegistrationFailed,
  saveRegOrderEntity
} from './utils/common';
// import { refundDomainRegistrationPayment } from './refund';
const { config } = getChain();

export async function handleDomainRegisterPaymentNotHead(
  callData: CallParsed<'DMN_REG', true>,
  ctx: Ctx
): Promise<void> {
  const {
    blockNumber,
    amount,
    remark: {
      content: { domainName, target, opId, token }
    }
  } = callData;

  const existingRegistrationOrderEntity = await ctx.store.findOne(
    DomainRegistrationOrder,
    {
      where: {
        id: opId
      }
    }
  );

  if (existingRegistrationOrderEntity) {
    ctx.log.error(
      `Domain Registration Order "${opId}" is already existing and registration cannot be duplicated [block#: ${blockNumber}].`
    );
    // TODO handle this case
    return;
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

  await saveRegOrderEntity(domainRegistrationOrder, ctx);
}

export async function handleDomainRegisterPayment(
  callData: CallParsed<'DMN_REG', true>,
  ctx: Ctx
): Promise<string | null> {
  const {
    blockNumber,
    amount,
    remark: {
      content: { domainName, target, opId, token }
    }
  } = callData;

  const existingRegistrationOrderEntity = await ctx.store.findOne(
    DomainRegistrationOrder,
    {
      where: {
        id: opId
      }
    }
  );

  if (existingRegistrationOrderEntity) {
    ctx.log.error(
      `Domain Registration Order "${opId}" is already existing and registration cannot be duplicated [block#: ${blockNumber}].`
    );
    // TODO handle this case
    return null;
  }

  const buyerChainClient = BuyerChainClient.getInstance();

  /**
   * Check paid amount
   */
  const registrationPaymentValidation = await validateRegistrationPayment(
    amount,
    token as TokenName
  );

  if (!registrationPaymentValidation.success) {
    ctx.log.error(registrationPaymentValidation);
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

  /**
   * Check is domain registration target address valid
   */

  const dmnRegTargetValidData = await validateDomainRegistrationTargetAddress(
    target
  );

  if (!dmnRegTargetValidData.success) {
    await saveDomainRegOrderOnRegistrationFailed(
      domainRegistrationOrder,
      dmnRegTargetValidData,
      ctx
    );
    return opId;
  }

  /**
   * Check is domain available for registration
   */

  const dmnAvValidData = await validateDomainAvailability(
    domainName,
    target,
    callData.timestampRaw
  );

  if (!dmnAvValidData.success) {
    await saveDomainRegOrderOnRegistrationFailed(
      domainRegistrationOrder,
      dmnAvValidData,
      ctx
    );
    return opId;
  }

  /**
   * Check domain ending
   */
  const dmnTldValidData = await validateDomainTld(domainName);
  if (!dmnTldValidData.success) {
    await saveDomainRegOrderOnRegistrationFailed(
      domainRegistrationOrder,
      dmnTldValidData,
      ctx
    );
    return opId;
  }

  /**
   * Check domain MIN length
   */

  const dmnMinLengthValidData = await validateDomainMinLength(domainName);

  if (!dmnMinLengthValidData.success) {
    await saveDomainRegOrderOnRegistrationFailed(
      domainRegistrationOrder,
      dmnMinLengthValidData,
      ctx
    );
    return opId;
  }

  /**
   * Check domain MAX length
   */

  const dmnMaxLengthValidData = await validateDomainMaxLength(domainName);

  if (!dmnMaxLengthValidData.success) {
    await saveDomainRegOrderOnRegistrationFailed(
      domainRegistrationOrder,
      dmnMaxLengthValidData,
      ctx
    );
    return opId;
  }

  /**
   * Check number of already registered domains by target
   */
  const targetMaxRegisteredDmnsValidData = await validateTargetDomainsMaxLimit(
    target
  );

  if (!targetMaxRegisteredDmnsValidData.success) {
    await saveDomainRegOrderOnRegistrationFailed(
      domainRegistrationOrder,
      targetMaxRegisteredDmnsValidData,
      ctx
    );
    return opId;
  }

  await saveRegOrderEntity(domainRegistrationOrder, ctx);

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

    // TODO add extra check to avoid failing process without saving order status

    if (result.success) {
      domainRegistrationOrder.status = OrderRequestStatus.InBlock;
      await saveRegOrderEntity(domainRegistrationOrder, ctx);

      try {
        const compRmrkMsg: SubSclSource<'DMN_REG_OK'> = {
          protName: config.sellerChain.remark.protName,
          version: config.sellerChain.remark.version,
          destination: config.sellerChain.remark.destination,
          action: 'DMN_REG_OK',
          content: {
            domainName: domainName,
            target: target,
            token: token,
            opId: opId
          }
        };

        /**
         * Delay is required here to avoid such errors like:
         * RpcError: 1014: Priority is too low: (*** vs ***): The transaction has too low priority to replace another transaction already in the pool
         */
        await sleepTo(1000);

        const compRemarkResult =
          await SellerChainClient.getInstance().sendRemark(
            WalletClient.getInstance().account.sellerServicePayer,
            new SocialRemark().fromSource(compRmrkMsg).toMessage()
          );

        if (!compRemarkResult.success) {
          ctx.log.warn(
            compRemarkResult,
            'DMN_REG_OK remark sending failed with error:'
          );
          domainRegistrationOrder.status = OrderRequestStatus.Failed;
          domainRegistrationOrder.refundStatus = OrderRefundStatus.None;
          await saveRegOrderEntity(domainRegistrationOrder, ctx);
          // TODO add handling of such case when domain is registered successfully but DMN_REG_OK remark has not ben sent
        }
        ctx.log.info(compRemarkResult, 'DMN_REG_OK remark sending result >>> ');
      } finally {
        ctx.log.warn('DMN_REG_OK remark sending failed');
        domainRegistrationOrder.status = OrderRequestStatus.Failed;
        domainRegistrationOrder.refundStatus = OrderRefundStatus.None;
        await saveRegOrderEntity(domainRegistrationOrder, ctx);
      }
      return null;
    } else {
      const eData = {
        success: false,
        ...StatusesMng.getStatusWithReason('Common', 'ErrorUnknown'),
        ...(await buyerChainClient.getBlockMeta())
      };
      ctx.log.error(eData);
      await saveDomainRegOrderOnRegistrationFailed(
        domainRegistrationOrder,
        eData,
        ctx
      );
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
    await saveDomainRegOrderOnRegistrationFailed(
      domainRegistrationOrder,
      eData,
      ctx
    );
    return opId;
  }
}
