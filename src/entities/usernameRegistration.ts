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

export async function updateDomainRegistrationOrderRefundStatus(
  id: string,
  newStatus: RefundStatus,
  ctx: Ctx
) {
  const existingRegistrationOrder = await ctx.store.findOne(
    UsernameRegistrationOrder,
    {
      where: {
        id
      },
      relations: {
        username: true,
        registrant: true
      }
    }
  );

  if (!existingRegistrationOrder)
    throw new Error(
      `UsernameRegistrationOrder with ID #${id} cannot be found.`
    );

  existingRegistrationOrder.refundStatus = newStatus;
  await ctx.store.save(existingRegistrationOrder);
}
