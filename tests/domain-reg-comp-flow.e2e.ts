import {
  SocialRemark,
  SocialRemarkMessageProtocolName,
  SubSclSource
} from '@subsocial/utils';
import { BuyerChainClient, SellerChainClient } from '../src/wsClient';
import { WalletClient } from '../src/walletClient';
import { BN } from 'bn.js';
import * as dotenv from 'dotenv';
import { randomAsNumber } from '@polkadot/util-crypto';
import { getChain } from '../src/chains';

dotenv.config({ path: `${__dirname}/../.env.local` });

jest.useRealTimers();

describe('Register domain with completion flow', () => {
  let sellerWsClient: SellerChainClient | null = null;
  const validDomainPrice = new BN('100000000'); // 0.01
  const invalidDomainPrice = new BN('1000000'); // 0.0001

  const { config } = getChain();
  const testRemarkTitle: SocialRemarkMessageProtocolName =
    config.sellerChain.remark.protName;
  SocialRemark.setConfig({ protNames: [config.sellerChain.remark.protName] });

  jest.setTimeout(1000 * 60 * 5);

  beforeAll(async () => {
    sellerWsClient = await SellerChainClient.getInstance().init();
    await WalletClient.getInstance().init();
  });

  test('Send valid purchase batch', async () => {
    const buyerAccount = await WalletClient.createKeyringPairFromMnem(
      process.env.SELLER_SOONSOCIAL_ACC_MNEM_DOMAIN_BUYER || ''
    );
    if (!buyerAccount) return;
    if (!sellerWsClient) return;

    /**
     * Create Balances.Transfer transaction
     */
    const transferTx = sellerWsClient.api.tx.balances.transfer(
      WalletClient.addressFromAnyToFormatted(
        WalletClient.getInstance().account.sellerTreasuryPubKey,
        28
      ),
      validDomainPrice
      // invalidDomainPrice
    );

    /**
     * Prepare DMN_REG remark message
     */
    const regRmrkMsg: SubSclSource<'DMN_REG'> = {
      protName: testRemarkTitle,
      action: 'DMN_REG',
      destination: '3',
      version: '0.1',
      content: {
        opId: `${transferTx.hash.toHex()}-${randomAsNumber()}`,
        // domainName: `tdotdomain${randomAsNumber()}.sub`,
        domainName: `man-dude-body-3.sub`,
        target: WalletClient.addressToHex(
          process.env.SELLER_SOONSOCIAL_ACC_MNEM_DOMAIN_REGISTRANT_ADDRESS || ''
        ),
        token: 'ROC'
      }
    };

    console.log(new SocialRemark().fromSource(regRmrkMsg).toMessage());

    /**
     * Create System.Remark transaction
     */
    const remarkTx = sellerWsClient.api.tx.system.remark(
      new SocialRemark().fromSource(regRmrkMsg).toMessage()
    );

    /**
     * Create Utilities.Batch_all transaction
     */
    const batchTx = sellerWsClient.api.tx.utility.batchAll([
      transferTx,
      remarkTx
    ]);

    /**
     * Sign and Send Batch_all
     */
    await new Promise<void>(async (resolve, reject) => {
      if (!sellerWsClient) {
        reject();
        return;
      }
      const unsub = await batchTx.signAndSend(buyerAccount, (resp) => {
        const { status, txHash, txIndex, dispatchError, isCompleted } = resp;

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
            `Successful registration of domain ${regRmrkMsg.content.domainName} for address ${regRmrkMsg.content.target}`
          );
          console.log('status.asInBlock.toHex() - ', status.asInBlock.toHex());
          console.log('txHash >>>');
          console.dir(txHash.toHex(), { depth: null });

          console.log('txIndex >>>');
          console.dir(txIndex, { depth: null });

          console.log('status >>>');
          console.dir(status, { depth: null });

          resolve();
          unsub();
          return;
        } else {
          console.log(`Status of registration: ${status.type}`);
        }

        if (isCompleted) {
          unsub();
        }
      });
    });

    expect(1).toEqual(1);
  });
});
