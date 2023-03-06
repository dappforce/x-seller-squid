import {
  OrderRefundStatus,
  OrderRequestStatus,
  Transfer,
  DomainRegistrationOrder
} from '../model';
import { Ctx } from '../processor';
import { CallParsed } from '../parser/types';
import { getOrCreateAccount } from './account';
import { getOrCreateDomain } from './domain';
import { BuyerChainClient } from '../wsClient';

export async function ensureUsernameRegistrationEntity(
  callData: CallParsed<'DMN_REG'>,
  ctx: Ctx,
  purchaseTx?: Transfer
): Promise<DomainRegistrationOrder> {
  const { remark } = callData;

  return new DomainRegistrationOrder({
    id: remark.content.opId,
    blockHashSellerChain: callData.blockHash,
    target: await getOrCreateAccount(remark.content.target, ctx),
    domain: await getOrCreateDomain(remark.content.domainName, ctx),
    price: await BuyerChainClient.getInstance().getDomainRegistrationPrice(),
    token: 'DOT', // TODO should be reviewed
    purchaseTx: purchaseTx ?? null,
    status: OrderRequestStatus.Processing,
    refundStatus: OrderRefundStatus.None,
    purchaseRmrk: remark
  });
}

export async function updateDomainRegistrationOrderRefundStatus(
  id: string,
  newStatus: OrderRefundStatus,
  ctx: Ctx
) {
  const existingRegistrationOrder = await ctx.store.findOne(
    DomainRegistrationOrder,
    {
      where: {
        id
      },
      relations: {
        domain: true,
        target: true
      }
    }
  );

  if (!existingRegistrationOrder)
    throw new Error(`DomainRegistrationOrder with ID #${id} cannot be found.`);

  existingRegistrationOrder.refundStatus = newStatus;
  await ctx.store.save(existingRegistrationOrder);
}
