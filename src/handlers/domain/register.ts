import { CallParsed } from '../../parser/types';
import { BuyerChainClient } from '../../wsClient';

export async function handleDomainRegisterPayment(
  batchData: CallParsed<'D_REG_PAY'>
) {
  let result = null;

  try {
    result = await BuyerChainClient.getInstance().registerDomain({
      registrant: batchData.remark.content!.registrant,
      domain: batchData.remark.content!.domainName
    });
    console.log('handleDomainRegisterPayment result >>>');
    console.dir(result, { depth: null });
  } catch (rejected) {
    console.log('handleDomainRegisterPayment result >>>');
    console.dir(rejected, { depth: null });
  }
}
