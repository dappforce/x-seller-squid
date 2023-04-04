import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import 'reflect-metadata';
import {
  ServiceLocalStorage,
  DraftOrder
} from '../../serviceLocalStorageClient';
import { DraftOrderData, DraftOrdersAll } from '../model/draftOrder.model';

@Resolver()
export class DraftOrdersResolver {
  @Mutation(() => Boolean, {description: "Create new Draft Order for provided domain and Seller Client"})
  async publishDraftOrder(
    @Arg('domain', {
      nullable: false,
      description: 'Draft Order domain name (can be unique in Seller storage).'
    })
    domain: string,
    @Arg('account', {
      nullable: false,
      description: 'Account who initiates Draft Order'
    })
    account: string,
    @Arg('clientId', { nullable: false, description: 'Seller Client ID.' })
    clientId: string
  ): Promise<boolean> {
    const lsClient = await ServiceLocalStorage.getInstance().init();
    await lsClient.em.insert(
      DraftOrder,
      new DraftOrder({
        id: domain,
        timestamp: new Date(),
        account,
        clientId
      })
    );
    return true;
  }

  @Query(() => DraftOrdersAll, {
    nullable: false,
    description: 'Get all Draft Orders for specific Seller Client'
  })
  async getAllDraftOrdersByClientId(
    @Arg('clientId', { nullable: false, description: 'Seller Client ID.' })
    clientId: string
  ): Promise<DraftOrdersAll> {
    const lsClient = await ServiceLocalStorage.getInstance().init();
    const savedOrders = await lsClient.em.find(DraftOrder, {
      where: { clientId }
    });
    return new DraftOrdersAll({
      orders: savedOrders.map(
        (savedOrder) =>
          new DraftOrderData({
            id: savedOrder.id,
            timestamp: savedOrder.timestamp,
            account: savedOrder.account,
            clientId: savedOrder.clientId
          })
      )
    });
  }

  @Query(() => DraftOrderData, {
    nullable: true,
    description: 'Get existing Draft Order entity by provided domain name.'
  })
  async getDraftOrderByDomain(
    @Arg('domain', { nullable: false, description: 'Draft Order domain name.' })
    domain: string
  ): Promise<DraftOrderData | null> {
    const lsClient = await ServiceLocalStorage.getInstance().init();
    const savedOrder = await lsClient.em.findOneBy(DraftOrder, {
      id: domain
    });

    if (!savedOrder) return null;

    return new DraftOrderData({
      id: savedOrder.id,
      timestamp: savedOrder.timestamp,
      account: savedOrder.account,
      clientId: savedOrder.clientId
    });
  }
}
