import { ServiceLocalStorage } from '../src/serviceLocalStorageClient/client';
import { PendingOrder } from '../src/serviceLocalStorageClient/model';

describe('ServiceLocalStorage Unit', () => {
  beforeAll(async () => {
    const lsClient = await ServiceLocalStorage.getInstance().init();
  });

  test('SocialRemark from Source to Message', () => {
    expect(1).toEqual(1);
  });
});
