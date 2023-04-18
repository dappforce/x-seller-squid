import { ServiceLocalStorage } from '../../../serviceLocalStorageClient';
import { ChainActionResult } from '../../../wsClient/types';
import {
  DomainRegistrationOrder,
  OrderError,
  OrderRefundStatus,
  OrderRequestStatus
} from '../../../model';
import { Ctx } from '../../../processor';

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
  domainRegistrationOrder.status = OrderRequestStatus.Failed;
  domainRegistrationOrder.refundStatus = OrderRefundStatus.Waiting;
  domainRegistrationOrder.errorRegistration = new OrderError(errorData);

  await saveRegOrderEntity(domainRegistrationOrder, ctx);
}

export async function saveDomainRegOrderOnRefundFailed(
  registrationOrderEntity: DomainRegistrationOrder,
  errorData: ChainActionResult,
  ctx: Ctx
): Promise<void> {
  registrationOrderEntity.refundStatus = OrderRefundStatus.Failed;
  registrationOrderEntity.errorRefund = new OrderError(errorData);

  await ctx.store.save(registrationOrderEntity);
}

