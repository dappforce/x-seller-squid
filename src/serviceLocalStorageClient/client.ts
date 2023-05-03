import { DataSource, EntityManager, LessThan, MongoRepository } from 'typeorm';
import { PendingOrder } from './model';
import cron, { ScheduledTask } from 'node-cron';
import { ProcessorConfig } from '../chains/interfaces/processorConfig';
import { getChain } from '../chains';
import dayjs from 'dayjs';
import { createLogger, Logger } from '@subsquid/logger';
import { TgLoggerMessage } from './model/tgLoggerMessage';

export class ServiceLocalStorage {
  private static instance: ServiceLocalStorage;
  private ds!: DataSource;
  private initialized: boolean = false; // TODO should be refactored to native DataSource check
  private chainConfig: ProcessorConfig;
  private sqdLogger: Logger = createLogger('service-local-storage');

  private dmnRegPendingOrdersCleanTasks: Map<string, ScheduledTask> = new Map();

  constructor() {
    this.chainConfig = getChain().config;
  }

  get dataSource(): DataSource {
    if (!this.ds || !this.ds.isInitialized)
      throw new Error('DataSource is not available yet.');
    return this.ds;
  }

  get repository(): {
    pendingOrder: MongoRepository<PendingOrder>;
    tgLoggerMessage: MongoRepository<TgLoggerMessage>;
  } {
    return {
      pendingOrder: this.ds.getMongoRepository(PendingOrder),
      tgLoggerMessage: this.ds.getMongoRepository(TgLoggerMessage)
    };
  }

  static getInstance(): ServiceLocalStorage {
    if (!ServiceLocalStorage.instance) {
      ServiceLocalStorage.instance = new ServiceLocalStorage();
    }
    return ServiceLocalStorage.instance;
  }

  async init() {
    if (this.initialized) return this;

    // this.ds = new DataSource({
    //   type: 'better-sqlite3',
    //   // database: ':memory:',
    //   database: 'src/serviceLocalStorageClient/db/serviceLSDb.sql',
    //   dropSchema: false,
    //   synchronize: true,
    //   logging: false,
    //   entities: [PendingOrder, TgLoggerMessage]
    // });

    if (
      !this.chainConfig.sellerIndexer.serviceLocalStorageDbUrl ||
      this.chainConfig.sellerIndexer.serviceLocalStorageDbUrl.length === 0
    )
      throw new Error('ServiceLocalStorageDbUrl is undefined');

    this.ds = new DataSource({
      type: 'mongodb',
      url: this.chainConfig.sellerIndexer.serviceLocalStorageDbUrl,
      useNewUrlParser: true,
      synchronize: true,
      logging: false,
      entities: [PendingOrder, TgLoggerMessage],
      migrations: [],
      subscribers: []
    });

    await this.ds.initialize();
    this.initialized = true;

    await this.deletePendingOrderWhenExpInitial();

    return this;
  }

  async deletePendingOrderById(orderId: string): Promise<void> {
    this.sqdLogger.info(`>>>>> deletePendingOrderById - ${orderId}`);
    await this.repository.pendingOrder.deleteOne({ id: { $eq: orderId } });
  }

  private async deletePendingOrderWhenExpInitial() {
    const intervalMinutes =
      this.chainConfig.sellerIndexer.dmnRegPendingOrderExpTime / 60 / 1000;
    const expiredPendingOrders = await this.repository.pendingOrder.findBy({
      timestamp: { $lt: dayjs().subtract(intervalMinutes, 'm').toDate() }
    });
    const idsToDelete = expiredPendingOrders.map((or) => or.id);
    if (!idsToDelete || idsToDelete.length === 0) return;
    await this.repository.pendingOrder.deleteMany({ id: { $in: idsToDelete } });
    this.sqdLogger.info(
      `Next Pending Orders have been deleted automatically due to reaching expiration time: ${idsToDelete.join(
        ', '
      )}`
    );
  }

  public cronDeletePendingOrderWhenExp(orderId: string, schedule?: string) {
    const intervalMinutes =
      this.chainConfig.sellerIndexer.dmnRegPendingOrderExpTime / 60 / 1000;

    this.dmnRegPendingOrdersCleanTasks.set(
      orderId,
      cron.schedule(schedule || `*/${intervalMinutes} * * * *`, async () => {
        await this.deletePendingOrderById(orderId);
        this.sqdLogger.info(
          `Pending Order with ID: "${orderId}" has been automatically deleted by cron job in ${intervalMinutes} minutes after creation.`
        );
        if (this.dmnRegPendingOrdersCleanTasks.has(orderId)) {
          this.dmnRegPendingOrdersCleanTasks.get(orderId)!.stop();
          this.dmnRegPendingOrdersCleanTasks.delete(orderId);
        }
      })
    );
  }
}
