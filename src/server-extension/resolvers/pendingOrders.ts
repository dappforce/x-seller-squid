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
import { getPendingOrdersByAccount } from '../utils';

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
    @Arg('signer', {
      nullable: false,
      description:
        'Account address who signed request transaction (batchAll with transfer and remark) (will be saved in Hex format)'
    })
    signer: string,
    @Arg('createdByAccount', {
      nullable: false,
      description:
        'Account address who created Pending Order (will be saved in Hex format)'
    })
    createdByAccount: string,
    @Arg('target', {
      nullable: false,
      description: 'Target for new domain (domain recipient)'
    })
    target: string,
    @Arg('destination', {
      nullable: false,
      description: 'Action destination of the order'
    })
    destination: string,
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
        purchaseInterrupted: false,
        signer: WalletClient.addressToHex(signer),
        createdByAccount: WalletClient.addressToHex(createdByAccount),
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
  async updatePendingOrderPurchaseStatusById(
    @Arg('id', {
      nullable: false,
      description: 'Domain name to delete'
    })
    id: string,
    @Arg('interrupted', {
      nullable: false,
      description: 'Purchase interruption status'
    })
    interrupted: boolean,
    @Ctx() ctx: any
  ): Promise<boolean> {
    const { config } = getChain();
    if (config.sellerIndexer.processingDisabled) return true;

    const requestClientId = ctx.openreader.clientId
      ? WalletClient.addressToHex(ctx.openreader.clientId)
      : '';
    const lsClient = await ServiceLocalStorage.getInstance().init();
    const itemForUpdate = await lsClient.em.findOneBy(PendingOrder, {
      id
    });
    if (!itemForUpdate)
      throw new Error(
        `Domain registration Pending order for domain "${id} has not been found" `
      );
    if (!requestClientId || itemForUpdate.clientId !== requestClientId)
      throw new Error(
        `Permissions denied. Client ${requestClientId} can not update Domain registration Pending order for domain "${id}" `
      );
    itemForUpdate.purchaseInterrupted = interrupted;
    await lsClient.em.save(itemForUpdate);
    return true;
  }

  @Mutation(() => Boolean, {
    description: 'Delete Pending Order by ID'
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
            purchaseInterrupted: savedOrder.purchaseInterrupted,
            signer: savedOrder.signer,
            createdByAccount: savedOrder.createdByAccount,
            target: savedOrder.target,
            destination: savedOrder.destination,
            clientId: savedOrder.clientId
          })
      )
    });
  }

  @Query(() => PendingOrdersList, {
    nullable: false,
    description:
      'Get existing Pending Orders by provided purchase transaction signer'
  })
  async getPendingOrdersBySigner(
    @Arg('signer', {
      nullable: false,
      description:
        'Account address who signed request transaction (Public key in Hex format)'
    })
    signer: string
  ): Promise<PendingOrdersList> {
    return new PendingOrdersList({
      orders: await getPendingOrdersByAccount(signer, 'signer')
    });
  }

  @Query(() => PendingOrdersList, {
    nullable: false,
    description: `Get existing Pending Orders by it's creator`
  })
  async getPendingOrdersByCreatedByAccount(
    @Arg('createdByAccount', {
      nullable: false,
      description:
        'Account address who created Pending Order (Public key in Hex format)'
    })
    createdByAccount: string
  ): Promise<PendingOrdersList> {
    return new PendingOrdersList({
      orders: await getPendingOrdersByAccount(
        createdByAccount,
        'createdByAccount'
      )
    });
  }

  @Query(() => PendingOrdersList, {
    nullable: false,
    description: `Get existing Pending Orders by domain registration target`
  })
  async getPendingOrdersByTarget(
    @Arg('target', {
      nullable: false,
      description:
        'Account address or domain recipient (Public key in Hex format)'
    })
    target: string
  ): Promise<PendingOrdersList> {
    return new PendingOrdersList({
      orders: await getPendingOrdersByAccount(target, 'target')
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
            purchaseInterrupted: savedOrder.purchaseInterrupted,
            signer: savedOrder.signer,
            createdByAccount: savedOrder.createdByAccount,
            destination: savedOrder.destination,
            target: savedOrder.target,
            clientId: savedOrder.clientId
          })
      )
    });
  }
}
