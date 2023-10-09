import { ServiceLocalStorage } from '../../../serviceLocalStorageClient';
import { ChainActionResult } from '../../../wsClient/types';
import {
  DomainRegistrationOrder,
  OrderError,
  OrderRefundStatus,
  OrderRequestStatus
} from '../../../model';
import { Ctx } from '../../../processor';
import { getChain } from '../../../chains';
import { DomainRegistrationTgLogger } from '../../../loggerTgBot';

export async function saveRegOrderEntity(
  domainRegistrationOrder: DomainRegistrationOrder,
  ctx: Ctx
) {
  const lsClient = await ServiceLocalStorage.getInstance().init();

  ctx.log
    .child('service-local-storage')
    .info(`PO with ID ${domainRegistrationOrder.domain.id} will be deleted.`);
  await lsClient.deletePendingOrderById(domainRegistrationOrder.domain.id);
  ctx.log
    .child('Service-Local-Storage')
    .info(`PO with ID ${domainRegistrationOrder.domain.id} has been deleted.`);
  await ctx.store.save(domainRegistrationOrder);
}

export async function saveDomainRegOrderOnRegistrationFailed(
  domainRegistrationOrder: DomainRegistrationOrder,
  errorData: ChainActionResult,
  ctx: Ctx
): Promise<void> {
  const { config } = getChain();
  const domainRegTgLogger =
    await DomainRegistrationTgLogger.getInstance().init();
  const lsClient = await ServiceLocalStorage.getInstance().init();

  domainRegistrationOrder.status = OrderRequestStatus.Failed;
  domainRegistrationOrder.refundStatus = OrderRefundStatus.Waiting;
  domainRegistrationOrder.errorRegistration = new OrderError(errorData);

  ctx.log.error(
    `Order ${domainRegistrationOrder.id} for domain name "${
      domainRegistrationOrder.domain.id
    }" has status Failed${
      config.sellerIndexer.autoRefundDisabled ? 'and refund is required.' : '.'
    } `
  );

  await saveRegOrderEntity(domainRegistrationOrder, ctx);
  await lsClient.updatePendingOrder(domainRegistrationOrder.domain.id, {
    purchaseTxStarted: false
  });
  await domainRegTgLogger.addOrderStatus(
    domainRegistrationOrder.id,
    'DmnRegFailed'
  );
}

export async function saveDomainRegOrderOnRefundFailed(
  registrationOrderEntity: DomainRegistrationOrder,
  errorData: ChainActionResult,
  ctx: Ctx
): Promise<void> {
  const domainRegTgLogger =
    await DomainRegistrationTgLogger.getInstance().init();

  registrationOrderEntity.refundStatus = OrderRefundStatus.Failed;
  registrationOrderEntity.errorRefund = new OrderError(errorData);

  await ctx.store.save(registrationOrderEntity);
  await domainRegTgLogger.addOrderStatus(
    registrationOrderEntity.id,
    'DmnRegRefundFailed'
  );
}
