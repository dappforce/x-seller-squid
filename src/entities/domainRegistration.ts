import {
  OrderRefundStatus,
  OrderRequestStatus,
  Transfer,
  DomainRegistrationOrder,
  DmnRegRemark,
  DmnRegRemarkContent
} from '../model';
import { Ctx } from '../processor';
import { CallParsed } from '../parser/types';
import { getOrCreateAccount } from './account';
import { getOrCreateDomain } from './domain';
import { BuyerChainClient } from '../wsClient';
import { ensureDomainRegRemark } from './remark';
import { getChain } from '../chains';
const { config } = getChain();

export async function ensureDomainRegistrationOrder({
  callData,
  domainPrice,
  ctx,
  purchaseTx
}: {
  callData: CallParsed<'DMN_REG'>;
  domainPrice: bigint | null;
  ctx: Ctx;
  purchaseTx?: Transfer;
}): Promise<DomainRegistrationOrder> {
  const { remark } = callData;

  return new DomainRegistrationOrder({
    id: remark.content.opId,
    createdAtBlock: callData.blockNumber,
    createdAtTime: callData.timestamp,
    blockHashSellerChain: callData.blockHash,
    target: await getOrCreateAccount(remark.content.target, ctx),
    domain: await getOrCreateDomain(remark.content.domainName, ctx),
    price: domainPrice || 0n,
    token: config.sellerChain.token.name, // TODO should be reviewed
    purchaseTx: purchaseTx ?? null,
    status: OrderRequestStatus.Processing,
    refundStatus: OrderRefundStatus.None,
    purchaseRmrk: ensureDomainRegRemark(remark)
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
