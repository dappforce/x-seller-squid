import { CallParsed } from '../../parser/types';
import { BuyerChainClient, SellerChainClient } from '../../wsClient';
import { Ctx } from '../../processor';
import { SubSclRemark } from '../../remark';
import { SubSclSource } from '../../remark/types';
import { WalletClient } from '../../walletClient';
import { ensureUsernameRegistrationEntity } from '../../entities/usernameRegistration';
import {
  RefundStatus,
  RegistrationStatus,
  UsernameRegistrationOrderError
} from '../../model';
import { ChainActionResult } from '../../wsClient/types';
import { createAndGetTransfer } from '../../entities/transfer';

export async function handleUsernameRegisterPayment(
  callData: CallParsed<'D_REG_PAY', true>,
  ctx: Ctx
) {
  const {
    amount,
    remark: {
      content: { domainName, registrant }
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
    return;
  }

  /**
   * We don't need to create this entity earlier as there are at least 2 steps
   * where process can be terminated. So we don't need wast time for redundant
   * async functionality.
   */
  const usernameRegistrationEntity = await ensureUsernameRegistrationEntity(
    callData,
    ctx,
    await createAndGetTransfer(callData, ctx)
  );
  const saveUnameRegEntityOnFail = async (
    errorData: ChainActionResult
  ): Promise<void> => {
    usernameRegistrationEntity.status = RegistrationStatus.Failed;
    usernameRegistrationEntity.refundStatus = RefundStatus.Waiting;
    usernameRegistrationEntity.error = new UsernameRegistrationOrderError(
      errorData
    );

    await ctx.store.save(usernameRegistrationEntity);
  };

  /**
   * Check is username available for registration
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
    // TODO run refund if head of archive
    return;
  }
  if (existingDomain.length > 0) {
    const domainsOwnedByRegistrant = existingDomain.find(
      (d) => WalletClient.addressToHex(d.get('owner').toString()) === registrant
    );

    if (domainsOwnedByRegistrant) {
      ctx.log.info({
        success: true,
        status: 'Domain is already owned by registrant'
      });
      usernameRegistrationEntity.status = RegistrationStatus.Processing;
      /**
       * In this case status marked as Processing and squid will check next
       * blocks for "D_REG_COMP" remark which will confirm that username is
       * registered and registration order can be completed. Usually such case
       * can be occurred if squid is reindexing the chain from the start.
       */
    } else {
      ctx.log.error({
        success: false,
        ...buyerChainClient.clientError.getError(20100),
        ...(await buyerChainClient.getBlockMeta())
      });
      usernameRegistrationEntity.status = RegistrationStatus.Failed;
      usernameRegistrationEntity.refundStatus = RefundStatus.Waiting;
      /**
       * This situation be occurred in both cases reindexing squid from the
       * start and normal work. If it's reindexing (not head of archive),
       * refund action will be delayed till the head. If it's head, refund
       * should be initiated immediately.
       */
      // TODO if it's head of archive we need initiate refund action right here.
    }
    await ctx.store.save(usernameRegistrationEntity);
    return;
  }

  /**
   * Check username ending
   */

  // TODO get supported tlds from blockchain "domains.supportedTlds"
  if (!domainName.endsWith('sub')) {
    const eData = {
      success: false,
      ...buyerChainClient.clientError.getError(20200),
      ...(await buyerChainClient.getBlockMeta())
    };
    ctx.log.error(eData);
    await saveUnameRegEntityOnFail(eData);
    // TODO run refund if head of archive
    return;
  }

  /**
   * Check username length
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
    // TODO run refund if head of archive
    return;
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
    // TODO run refund if head of archive
    return;
  }

  /**
   * Execute registration process
   */

  try {
    const { domainName, registrant, currency, attemptId } =
      callData.remark.content;

    const result = await buyerChainClient.registerDomain({
      registrant: WalletClient.addressFromHex(registrant, 28),
      domain: domainName
    });
    console.log('handleUsernameRegisterPayment result >>>');
    console.dir(result, { depth: null });

    if (result.success && result.status === 201) {
      usernameRegistrationEntity.status = RegistrationStatus.Processing;

      await ctx.store.save(usernameRegistrationEntity);

      const compRmrkMsg: SubSclSource<'D_REG_COMP'> = {
        title: 't3_subscl',
        action: 'D_REG_COMP',
        version: '0.1',
        content: {
          domainName: domainName,
          registrant: registrant,
          currency: currency,
          attemptId: attemptId
        }
      };

      const compRemarkResult = await SellerChainClient.getInstance().sendRemark(
        WalletClient.getInstance().account.sellerTreasury,
        new SubSclRemark().fromSource(compRmrkMsg).toMessage()
      );

      console.log('compRemarkResult >>> ');
      console.dir(compRemarkResult, { depth: null });
    } else {
      const eData = {
        success: false,
        ...buyerChainClient.clientError.getError(20300),
        ...(await buyerChainClient.getBlockMeta())
      };
      ctx.log.error(eData);
      await saveUnameRegEntityOnFail(eData);
      // TODO run refund process
    }
  } catch (rejected) {
    console.log('handleUsernameRegisterPayment result >>>');
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
  }
}
