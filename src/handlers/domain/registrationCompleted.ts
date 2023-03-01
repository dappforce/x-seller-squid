import { CallParsed } from '../../parser/types';
import { BuyerChainClient } from '../../wsClient';
import { Ctx } from '../../processor';

export async function handleDomainRegistrationCompleted(
  callData: CallParsed<'D_REG_COMP', true>,
  ctx: Ctx
) {
  const {
    remark: {
      content: { domainName, registrant }
    }
  } = callData;

}
