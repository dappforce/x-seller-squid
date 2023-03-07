import { CallParsed } from '../../parser/types';
import { BuyerChainClient, SellerChainClient } from '../../wsClient';
import { Ctx } from '../../processor';
import { SocialRemark } from '../../remark';
import { SubSclSource } from '../../remark/types';
import { WalletClient } from '../../walletClient';
import {
  ensureDomainRegistrationOrder,
  createAndGetTransfer
} from '../../entities';
import { OrderRefundStatus, OrderRequestStatus, OrderError } from '../../model';
import { ChainActionResult } from '../../wsClient/types';
import { getChain } from '../../chains';
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

  const registrationPrice = await buyerChainClient.getDomainRegistrationPrice();

  if (amount < registrationPrice) {
    // TODO implement handling for this case
    ctx.log.error(
      `Paid amount is not enough for registrations. Required ${registrationPrice.toString()} but transferred ${amount.toString()}`
    );
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
  const existingDomain = await buyerChainClient.getRegisteredDomains([
    domainName
  ]);

  if (!existingDomain) {
    const eData = {
      success: false,
      status: 10100,
      reason: `registeredDomains request is failed`,
      ...(await buyerChainClient.getBlockMeta())
    };
    ctx.log.error(eData);
    await saveUnameRegEntityOnFail(eData);
    // if (ctx.isHead && isHeadOfEventsPool)
    //   await refundDomainRegistrationPayment(callData, ctx);
    return opId;
  }

  if (existingDomain.length > 0) {
    const domainsOwnedByRegistrant = existingDomain.find(
      (d) =>
        WalletClient.addressFromAnyToFormatted(
          d.get('owner').toString(),
          28
        ) === target
    );

    if (domainsOwnedByRegistrant) {
      ctx.log.info({
        success: true,
        status: 'Domain is already owned by target'
      });
      domainRegistrationOrder.status = OrderRequestStatus.Processing;
      /**
       * In this case status marked as Processing and squid will check next
       * blocks for "DMN_REG_OK" remark which will confirm that domain is
       * registered and registration order can be completed. Usually such case
       * can be occurred if squid is reindexing the chain from the start. We
       * don's need initiate refund in this case.
       */
      await ctx.store.save(domainRegistrationOrder);
      return null;
    } else {
      ctx.log.error({
        success: false,
        ...buyerChainClient.clientError.getError(20100),
        ...(await buyerChainClient.getBlockMeta())
      });
      domainRegistrationOrder.status = OrderRequestStatus.Failed;
      domainRegistrationOrder.refundStatus = OrderRefundStatus.Waiting;
      /**
       * This situation be occurred in both cases reindexing squid from the
       * start and normal work. If it's reindexing (not head of archive),
       * refund action will be delayed till the head. If it's head, refund
       * should be initiated immediately.
       */
      // if (ctx.isHead && isHeadOfEventsPool)
      //   await refundDomainRegistrationPayment(callData, ctx);

      await ctx.store.save(domainRegistrationOrder);
      return opId;
    }
  }

  /**
   * Check domain ending
   */

  // TODO get supported tlds from blockchain "domains.supportedTlds"
  const domainNameChunked = domainName.split('.');
  if (domainNameChunked.length < 2 || domainNameChunked[1] !== 'sub') {
    const eData = {
      success: false,
      ...buyerChainClient.clientError.getError(20200),
      ...(await buyerChainClient.getBlockMeta())
    };
    ctx.log.error(eData);
    await saveUnameRegEntityOnFail(eData);
    // if (ctx.isHead && isHeadOfEventsPool)
    //   await refundDomainRegistrationPayment(callData, ctx);
    return opId;
  }

  /**
   * Check domain length
   */

  // TODO use toNumber instead of toHuman, add wrapper
  const minDomainLength =
    buyerChainClient.api.consts.domains.minDomainLength.toString();

  if (!minDomainLength) {
    const eData = {
      success: false,
      status: 10100,
      reason: 'minDomainLength request is failed',
      ...(await buyerChainClient.getBlockMeta())
    };
    ctx.log.error(eData);
    await saveUnameRegEntityOnFail(eData);
    // if (ctx.isHead && isHeadOfEventsPool)
    //   await refundDomainRegistrationPayment(callData, ctx);
    return opId;
  }

  // TODO review is required
  if (domainName.length < Number.parseInt(minDomainLength)) {
    const eData = {
      success: false,
      ...buyerChainClient.clientError.getError(20300),
      ...(await buyerChainClient.getBlockMeta())
    };
    ctx.log.error(eData);
    await saveUnameRegEntityOnFail(eData);
    // if (ctx.isHead && isHeadOfEventsPool)
    //   await refundDomainRegistrationPayment(callData, ctx);
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
    console.log('handleDomainRegisterPayment result >>>');
    console.dir(result, { depth: null });

    if (result.success && result.status === 201) {
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

      console.log('compRemarkResult >>> ');
      console.dir(compRemarkResult, { depth: null });
      return null;
    } else {
      const eData = {
        success: false,
        reason: 'Error has been occurred',
        ...buyerChainClient.clientError.getError(10100),
        ...(await buyerChainClient.getBlockMeta())
      };
      ctx.log.error(eData);
      await saveUnameRegEntityOnFail(eData);
      // if (ctx.isHead && isHeadOfEventsPool)
      //   await refundDomainRegistrationPayment(callData, ctx);
      return opId;
    }
  } catch (rejected) {
    console.log('handleDomainRegisterPayment result >>>');
    console.dir(rejected, { depth: null });
    const eData = {
      success: false,
      status: 10100,
      reason: rejected
        ? (rejected as Error).message || (rejected as ChainActionResult).reason
        : 'Unknown error has been occurred.', // TODO Fix types
      ...(await buyerChainClient.getBlockMeta())
    };
    ctx.log.error(eData);
    await saveUnameRegEntityOnFail(eData);
    // if (ctx.isHead && isHeadOfEventsPool)
    //   await refundDomainRegistrationPayment(callData, ctx);
    return opId;
  }
}
