import {
  RefundStatus,
  RegistrationStatus,
  Transfer,
  UsernameRegistrationOrder
} from '../model';
import { Ctx } from '../processor';
import { CallParsed } from '../parser/types';
import { getOrCreateAccount } from './account';
import { getOrCreateUsername } from './username';
import { BuyerChainClient } from '../wsClient';

export async function ensureUsernameRegistrationEntity(
  callData: CallParsed<'D_REG_PAY'>,
  ctx: Ctx,
  purchaseTx?: Transfer
): Promise<UsernameRegistrationOrder> {
  const { remark } = callData;

  return new UsernameRegistrationOrder({
    id: remark.content.attemptId,
    blockHashSellerChain: callData.blockHash,
    registrant: await getOrCreateAccount(remark.content.registrant, ctx),
    username: await getOrCreateUsername(remark.content.domainName, ctx),
    price: await BuyerChainClient.getInstance().getDomainRegistrationPrice(),
    currency: 'DOT', // TODO should be reviewed
    purchaseTx: purchaseTx ?? null,
    status: RegistrationStatus.Processing,
    refundStatus: RefundStatus.None,
    purchaseRmrk: remark
  });
}
