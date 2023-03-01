import { CallParsed } from '../../parser/types';
import { BuyerChainClient } from '../../wsClient';
import { Ctx } from '../../processor';

export async function handleDomainRegisterPayment(
  callData: CallParsed<'D_REG_PAY', true>,
  ctx: Ctx
) {
  const {
    amount,
    remark: {
      content: { domainName, registrant }
    }
  } = callData;

  let result = null;
  const buyerChainClient = BuyerChainClient.getInstance();

  // TODO check purchase transfer amount

  const registrationPrice = await buyerChainClient.getDomainRegistrationPrice();

  if (amount < registrationPrice) {
    // TODO implement handling for this case
    ctx.log.error(
      `Paid amount is not enough for registrations. Required ${registrationPrice.toString()} but transferred ${amount.toString()}`
    );
    return;
  }

  const existingDomain = await buyerChainClient.registeredDomains([domainName]);

  if (!existingDomain) {
    ctx.log.error({
      success: false,
      status: 10100,
      reason: `registeredDomains request is failed`,
      ...(await buyerChainClient.getBlockMeta())
    });
    return;
  }

  if (existingDomain.length > 0) {
    const domainsOwnedByRegistrant = existingDomain.find(
      (d) => d.get('owner').toString() === registrant
    );

    if (domainsOwnedByRegistrant) {
      ctx.log.info({
        success: true,
        status: 'Domain is already owned by registrant'
      });
      return;
    } else {
      ctx.log.error({
        success: false,
        ...buyerChainClient.clientError.getError(20100),
        ...(await buyerChainClient.getBlockMeta())
      });
      return;
    }
  }

  if (!domainName.endsWith('sub')) {
    ctx.log.error({
      success: false,
      ...buyerChainClient.clientError.getError(20200),
      ...(await buyerChainClient.getBlockMeta())
    });
    return;
  }

  // TODO use toNumber instead of toHuman, add wrapper
  const minDomainLength =
    buyerChainClient.api.consts.domains.minDomainLength.toString();

  if (!minDomainLength) {
    ctx.log.error({
      success: false,
      status: 10100,
      reason: 'minDomainLength request is failed',
      ...(await buyerChainClient.getBlockMeta())
    });
    return;
  }

  if (domainName.length < Number.parseInt(minDomainLength)) {
    ctx.log.error({
      success: false,
      ...buyerChainClient.clientError.getError(20300),
      ...(await buyerChainClient.getBlockMeta())
    });
    return;
  }

  try {
    result = await BuyerChainClient.getInstance().registerDomain({
      registrant: callData.remark.content.registrant,
      domain: callData.remark.content.domainName
    });
    console.log('handleDomainRegisterPayment result >>>');
    console.dir(result, { depth: null });
  } catch (rejected) {
    console.log('handleDomainRegisterPayment result >>>');
    console.dir(rejected, { depth: null });
  }
}
