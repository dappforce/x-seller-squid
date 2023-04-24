import { DomainRegistrationTgLogger } from '../src/loggerTgBot';
import {
  DomainRegistrationOrder,
  OrderRefundStatus,
  OrderRequestStatus,
  Account,
  Domain,
  DmnRegRemark,
  Transfer
} from '../src/model';
import { randomAsNumber } from '@polkadot/util-crypto';
import { getOrCreateAccount, getOrCreateDomain } from '../src/entities';
import { BuyerChainClient } from '../src/wsClient';
import { ensureDomainRegRemark } from '../src/entities/remark';
import { SocialRemark, SocialRemarkDestChainsNameId } from '@subsocial/utils';

async function sleepTo(delay = 4000) {
  await new Promise((res) => {
    setTimeout(res, delay);
  });
}

(async function () {
  const domainRegTgLogger =
    await DomainRegistrationTgLogger.getInstance().init();

  await sleepTo(10000);

  const domainRegistrationOrder = new DomainRegistrationOrder({
    id: `0x99993ac3cfa1551a2827d0d6e78ac80e0b9cb9a3d6451628ec872b61fbcaa7ee-${randomAsNumber()}`,
    createdAtBlock: 5003204,
    createdAtTime: new Date(),
    blockHashSellerChain:
      '0x99993ac3cfa1551a2827d0d6e78ac80e0b9cb9a3d6451628ec872b61fbcaa7ee',
    target: {
      id: '3t5NA8UKsGzrCDMfp8XMEBghiYthWGXGsHbjtJY45NUJDY5P'
    } as Account,
    domain: { id: 'some-test-domain.sub' } as Domain,
    price: 100000n,
    token: 'ROC',
    purchaseTx: {
      from: {
        id: '3q5gLiDzdPZpuYL6LMXevC9W22rDTfSDMZemZstHrd7UgcJp'
      } as Account
    } as Transfer,
    status: OrderRequestStatus.Processing,
    refundStatus: OrderRefundStatus.None,
    purchaseRmrk: {
      protName: 'test',
      version: '0.1',
      destination: SocialRemarkDestChainsNameId.soonsocial,
      action: 'DMN_REG',
      content: {
        domainName: 'testDomain.sub',
        target: '3t5NA8UKsGzrCDMfp8XMEBghiYthWGXGsHbjtJY45NUJDY5P',
        token: 'DOT',
        opId: '0xa6a548df942e68a32fab3d325a25d8b5306a938aafc6bf205c2edc516cb92000'
      }
    } as DmnRegRemark
  });

  await domainRegTgLogger.postInitialStatus(domainRegistrationOrder);
  await domainRegTgLogger.addOrderStatus(
    domainRegistrationOrder.id,
    'ProcessingStarted'
  );

  await sleepTo(10000);

  await domainRegTgLogger.addOrderStatus(domainRegistrationOrder.id, 'InBlock');

  await sleepTo(10000);

  await domainRegTgLogger.addOrderStatus(
    domainRegistrationOrder.id,
    'DmnRegOk'
  );
  await domainRegTgLogger.addOrderStatus(
    domainRegistrationOrder.id,
    'Successful'
  );

  // const tgBot = DomainRegistrationTgLogger.getInstance().init();
  //
  // await new Promise((res) => {
  //   setTimeout(res, 10000);
  // });
  // const message = await tgBot!.postMessage('Hello! Im a squid unit test.');
  //
  // await new Promise((res) => {
  //   setTimeout(res, 10000);
  // });
  //
  // await tgBot!.appendContentToMessage(message.message_id, '- Domain has been registered successfully.');
})();
