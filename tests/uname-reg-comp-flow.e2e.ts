import { SubSclRemark } from '../src/remark';
import { SubSclSource } from '../src/remark/types';
import { BuyerChainClient, SellerChainClient } from '../src/wsClient';
import { WalletClient } from '../src/walletClient';
import { BN } from 'bn.js';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../.env.local` });

jest.useRealTimers();

describe('Register username with completion flow', () => {
  let sellerWsClient: SellerChainClient | null = null;
  const validDomainPrice = new BN('10000000000'); // 0.01
  const invalidDomainPrice = new BN('100000000'); // 0.0001
  jest.setTimeout(1000 * 60 * 5);

  beforeAll(async () => {
    sellerWsClient = await SellerChainClient.getInstance().init();
    await WalletClient.getInstance().init();
  });

  test('Send valid purchase batch', async () => {
    const buyerAccount =
      await WalletClient.getInstance().createKeyringPairFromMnem(
        process.env.SOONSOCIAL_ACC_MNEM_DOMAIN_BUYER || ''
      );
    if (!buyerAccount) return;
    if (!sellerWsClient) return;
    const transferTx = sellerWsClient.api.tx.balances.transfer(
      WalletClient.getInstance().account.sellerTreasury.address,
      validDomainPrice
    );

    const regRmrkMsg: SubSclSource<'D_REG_PAY'> = {
      title: 't3_subscl',
      action: 'D_REG_PAY',
      version: '0.1',
      content: {
        domainName: `t3dotdomain${Date.now()}.sub`,
        registrant: WalletClient.addressToHex(
          process.env.SOONSOCIAL_ACC_MNEM_DOMAIN_REGISTRANT_ADDRESS || ''
        ),
        currency: 'DOT',
        attemptId: transferTx.hash.toHex()
      }
    };

    console.log(new SubSclRemark().fromSource(regRmrkMsg).toMessage());

    const remarkTx = sellerWsClient.api.tx.system.remark(
      new SubSclRemark().fromSource(regRmrkMsg).toMessage()
    );

    await new Promise<void>(async (resolve, reject) => {
      if (!sellerWsClient) {
        reject();
        return;
      }
      const unsub = await sellerWsClient.api.tx.utility
        .batchAll([transferTx, remarkTx])
        .signAndSend(buyerAccount, (resp) => {
          const { status, txHash, txIndex, dispatchError } = resp;

          console.log('txHash >>>');
          console.dir(txHash.toHex(), { depth: null });

          console.log('txIndex >>>');
          console.dir(txIndex, { depth: null });

          if (dispatchError) {
            console.log(
              `dispatchError reason - ${sellerWsClient!.getTxSubDispatchErrorMessage(
                dispatchError
              )}`
            );
            console.log(
              `dispatchError blockHash - ${sellerWsClient!.getTxSubDispatchErrorBlockHash(
                status
              )}`
            );
            unsub();
            return;
          }

          if (status.isInBlock) {
            console.log(
              `Successful registration of domain ${regRmrkMsg.content.domainName} for address ${regRmrkMsg.content.registrant}`
            );
            console.log(
              'status.asInBlock.toHex() - ',
              status.asInBlock.toHex()
            );
            resolve();
            unsub();
            return;
          } else {
            console.log(`Status of registration: ${status.type}`);
          }
        });
    });

    expect(1).toEqual(1);
  });
});
