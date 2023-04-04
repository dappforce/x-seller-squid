import { DataSource, EntityManager } from 'typeorm';
import { DraftOrder } from './model';

export class ServiceLocalStorage {
  private static instance: ServiceLocalStorage;
  private ds!: DataSource;

  constructor() {}

  get dataSource(): DataSource {
    if (!this.ds || !this.ds.isInitialized)
      throw new Error('DataSource is not available yet.');
    return this.ds;
  }

  get em(): EntityManager {
    return this.dataSource.manager;
  }

  static getInstance(): ServiceLocalStorage {
    if (!ServiceLocalStorage.instance) {
      ServiceLocalStorage.instance = new ServiceLocalStorage();
    }
    return ServiceLocalStorage.instance;
  }

  async init() {
    this.ds = new DataSource({
      type: 'better-sqlite3',
      // database: ':memory:',
      database: 'src/serviceLocalStorageClient/db/serviceLSDb.sql',
      dropSchema: false,
      synchronize: true,
      logging: false,
      entities: [DraftOrder]
    });

    await this.ds.initialize();
    return this;
  }

  async deleteDraftOrderById(orderId: string): Promise<void> {
    await this.em.delete(DraftOrder, orderId);
  }
}
