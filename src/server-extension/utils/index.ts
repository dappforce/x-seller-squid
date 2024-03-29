import {
  PendingOrderData,
  PendingOrdersList
} from '../model/pendingOrder.model';
import {
  PendingOrder,
  ServiceLocalStorage
} from '../../serviceLocalStorageClient';
import { WalletClient } from '../../walletClient';

export async function getPendingOrdersByAccount(
  accountValue: string,
  accountName: 'signer' | 'target' | 'createdByAccount'
): Promise<PendingOrderData[]> {
  const lsClient = await ServiceLocalStorage.getInstance().init();
  const savedOrders = await lsClient.repository.pendingOrder.findBy({
    [accountName]: WalletClient.addressToHex(accountValue)
  });

  return savedOrders.map(
    (savedOrder) =>
      new PendingOrderData({
        id: savedOrder.id,
        timestamp: savedOrder.timestamp,
        purchaseInterrupted: savedOrder.purchaseInterrupted,
        signer: savedOrder.signer,
        createdByAccount: savedOrder.createdByAccount,
        target: savedOrder.target,
        destination: savedOrder.destination,
        clientId: savedOrder.clientId
      })
  );
}
