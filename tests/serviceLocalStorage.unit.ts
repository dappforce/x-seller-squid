import { ServiceLocalStorage } from '../src/serviceLocalStorageClient/client';
import { DraftOrder } from '../src/serviceLocalStorageClient/model';

describe('ServiceLocalStorage Unit', () => {
  beforeAll(async () => {
    const lsClient = await ServiceLocalStorage.getInstance().init();
    console.log('isInitialized - ', lsClient.dataSource.isInitialized);
    console.log(
      'dataSource.hasMetadata(User) 2 - ',
      lsClient.dataSource.hasMetadata(DraftOrder)
    );
  });

  test('SocialRemark from Source to Message', () => {
    expect(1).toEqual(1);
  });
});
