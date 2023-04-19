import { Query, Resolver, Mutation, Arg, Args, Ctx } from 'type-graphql';
import { In } from 'typeorm';
import 'reflect-metadata';
import {
  ServiceLocalStorage,
  PendingOrder
} from '../../serviceLocalStorageClient';
import {
  GetPendingOrdersByIdsArgs,
  PendingOrderData,
  PendingOrdersList
} from '../model/pendingOrder.model';
import { WalletClient } from '../../walletClient';
import { getChain } from '../../chains';

@Resolver()
export class PendingOrdersResolver {
  /**
   * ===========================================================================
   * ========================== M U T A T I O N S ==============================
   * ===========================================================================
   */

  @Mutation(() => Boolean, {
    description:
      'Create new Pending Order for provided domain and Seller Client'
  })
  async createPendingOrder(
    @Arg('domain', {
      nullable: false,
      description:
        'Pending Order domain name (can be unique in Seller storage).'
    })
    domain: string,
    @Arg('destination', {
      nullable: false,
      description: 'Action destination of the order'
    })
    destination: string,
    @Arg('target', {
      nullable: false,
      description: 'Target for new domain'
    })
    target: string,
    @Arg('account', {
      nullable: false,
      description:
        'Account address who initiates Pending Order (will be saved in Hex format)'
    })
    account: string,
    @Ctx() ctx: any
  ): Promise<boolean> {
    const { config } = getChain();
    if (config.sellerIndexer.processingDisabled) return true;

    const requestClientId: string | null = ctx.openreader.clientId
      ? WalletClient.addressToHex(ctx.openreader.clientId)
      : null;

    if (!requestClientId)
      new Error('Action forbidden. Client ID has not been provided.');

    const lsClient = await ServiceLocalStorage.getInstance().init();
    await lsClient.em.insert(
      PendingOrder,
      new PendingOrder({
        destination,
        id: domain,
        timestamp: new Date(),
        account: WalletClient.addressToHex(account),
        target: WalletClient.addressToHex(target),
        clientId: requestClientId ?? undefined
      })
    );
    lsClient.cronDeletePendingOrderWhenExp(domain);
    return true;
  }

  @Mutation(() => Boolean, {
    description:
      'Create new Pending Order for provided domain and Seller Client'
  })
  async deletePendingOrderById(
    @Arg('id', {
      nullable: false,
      description: 'Domain name to delete'
    })
    id: string,
    @Ctx() ctx: any
  ): Promise<boolean> {
    const { config } = getChain();
    if (config.sellerIndexer.processingDisabled) return true;

    const requestClientId = ctx.openreader.clientId
      ? WalletClient.addressToHex(ctx.openreader.clientId)
      : '';
    const lsClient = await ServiceLocalStorage.getInstance().init();
    const itemForDelete = await lsClient.em.findOneBy(PendingOrder, {
      id
    });
    if (!itemForDelete)
      throw new Error(
        `Domain registration Pending order for domain "${id} has not been found" `
      );
    if (!requestClientId || itemForDelete.clientId !== requestClientId)
      throw new Error(
        `Permissions denied. Client ${requestClientId} can not delete Domain registration Pending order for domain "${id}" `
      );
    await lsClient.em.delete(PendingOrder, id);
    return true;
  }

  /**
   * ===========================================================================
   * ============================ Q U E R I E S ================================
   * ===========================================================================
   */

  @Query(() => PendingOrdersList, {
    nullable: false,
    description:
      'Get existing Pending Orders by provided domain names (IDs) list.'
  })
  async getPendingOrdersByIds(
    @Args()
    { ids }: GetPendingOrdersByIdsArgs
  ): Promise<PendingOrdersList> {
    const lsClient = await ServiceLocalStorage.getInstance().init();

    const savedOrders = await lsClient.em.find(PendingOrder, {
      where: {
        id: In(ids)
      }
    });

    return new PendingOrdersList({
      orders: savedOrders.map(
        (savedOrder) =>
          new PendingOrderData({
            id: savedOrder.id,
            timestamp: savedOrder.timestamp,
            account: savedOrder.account,
            destination: savedOrder.destination,
            target: savedOrder.target,
            clientId: savedOrder.clientId
          })
      )
    });
  }

  @Query(() => PendingOrdersList, {
    nullable: false,
    description:
      'Get existing Pending Orders by provided domain names (IDs) list.'
  })
  async getPendingOrdersByAccount(
    @Arg('account', {
      nullable: false,
      description:
        'Pending order owner account address (Public key in Hex format)'
    })
    account: string
  ): Promise<PendingOrdersList> {
    const lsClient = await ServiceLocalStorage.getInstance().init();
    const savedOrders = await lsClient.em.find(PendingOrder, {
      where: {
        account: WalletClient.addressToHex(account)
      }
    });

    return new PendingOrdersList({
      orders: savedOrders.map(
        (savedOrder) =>
          new PendingOrderData({
            id: savedOrder.id,
            timestamp: savedOrder.timestamp,
            account: savedOrder.account,
            destination: savedOrder.destination,
            target: savedOrder.target,
            clientId: savedOrder.clientId
          })
      )
    });
  }

  @Query(() => PendingOrdersList, {
    nullable: false,
    description:
      'Get existing Pending Orders by provided domain names (IDs) list.'
  })
  async getPendingOrdersAll(): Promise<PendingOrdersList> {
    const { config } = getChain();
    if (!config.sellerIndexer.extendedApi)
      throw new Error('Extended API is disabled.');

    const lsClient = await ServiceLocalStorage.getInstance().init();
    const savedOrders = await lsClient.em.find(PendingOrder, {
      where: {},
      order: {
        timestamp: 'ASC'
      }
    });

    return new PendingOrdersList({
      orders: savedOrders.map(
        (savedOrder) =>
          new PendingOrderData({
            id: savedOrder.id,
            timestamp: savedOrder.timestamp,
            account: savedOrder.account,
            destination: savedOrder.destination,
            target: savedOrder.target,
            clientId: savedOrder.clientId
          })
      )
    });
  }
}
