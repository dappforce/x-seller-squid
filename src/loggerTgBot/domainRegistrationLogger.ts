import { Ctx } from '../processor';
import { LoggerTgBot } from './base';
import {
  DomainRegistrationOrder,
  OrderRefundStatus,
  OrderRequestStatus
} from '../model';
import { ServiceLocalStorage } from '../serviceLocalStorageClient';
import { TgLoggerMessage } from '../serviceLocalStorageClient/model/tgLoggerMessage';
import { SocialRemarkMessageAction } from '@subsocial/utils';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

export class DomainRegistrationTgLogger extends LoggerTgBot {
  private static instance: DomainRegistrationTgLogger;
  private lsClient: ServiceLocalStorage | null = null;

  private constructor(context?: Ctx) {
    super(context);
    dayjs.extend(utc);
  }

  static getInstance(ctx?: Ctx) {
    if (!DomainRegistrationTgLogger.instance) {
      DomainRegistrationTgLogger.instance = new DomainRegistrationTgLogger(ctx);
    }
    return DomainRegistrationTgLogger.instance;
  }

  async storageClient() {
    if (this.lsClient) return this.lsClient;
    this.lsClient = await ServiceLocalStorage.getInstance().init();
    return this.lsClient;
  }

  async postInitialStatus(order: DomainRegistrationOrder) {
    const text = `
    \n
    🔰🔰🔰🔰🔰🔰🔰🔰🔰🔰🔰🔰
    Domain Registration
        \- order ID \- ${order.id}
        \- domain \- ${order.domain.id}
        \- signer \- ${order.purchaseTx?.from.id}
        \- target \- ${order.purchaseRmrk?.content.target}
    Statuses: \n`;
    const tgMsg = await this.postMessage(text);

    await (
      await this.storageClient()
    ).repository.tgLoggerMessage.save(
      new TgLoggerMessage({
        id: order.id,
        tgMsgId: tgMsg.message_id,
        tgMsgText: tgMsg.text,
        timestamp: tgMsg.date
      })
    );
  }

  async addOrderStatus(
    orderId: string,
    // action: SocialRemarkMessageAction,
    status:
      | 'ProcessingStarted'
      | 'InBlock'
      | 'DmnRegOk'
      | 'Successful'
      | 'DmnRegFailed'
      | 'DmnRegRefundFailed'
      | 'DmnRegRefundOk'
      | 'DmnRegOkRemarkFailed'
  ) {
    const existingTgMessage = await (
      await this.storageClient()
    ).repository.tgLoggerMessage.findOneBy({ id: { $eq: orderId } });

    if (!existingTgMessage) {
      console.log('Tg message has not been found');
      return;
    }

    let text = `${existingTgMessage.tgMsgText} \n`;

    const currentTime = dayjs.utc().format('HH:mm:ss') + ' GMT';

    switch (status) {
      case 'ProcessingStarted':
        text += `      ➡️ [${currentTime}] Request received and processing has been started.`;
        break;
      case 'InBlock':
        text += `      ✅ [${currentTime}] Domain has been registered in blockchain.`;
        break;
      case 'DmnRegOk':
        text += `      ✅ [${currentTime}] Proof remark DMN_REG_OK has been found in blockchain.`;
        break;
      case 'DmnRegFailed':
        text += `      ❎ [${currentTime}] Domain registration has failed. Refund is required`;
        break;
      case 'DmnRegOkRemarkFailed':
        text += `      ❎ [${currentTime}] Domain registration proof remark DMN_REG_OK has not been sent.`;
        break;
      case 'DmnRegRefundFailed':
        text += `      ❎ [${currentTime}] Domain registration refund has failed.`;
        break;
      case 'DmnRegRefundOk':
        text += `      🏁 [${currentTime}] Domain registration refund has fulfilled successfully.`;
        break;
      case 'Successful':
        text += `      🏁 [${currentTime}] Domain registration order has been closed with status Success`;
        break;
      default:
    }

    await this.appendContentToMessage(existingTgMessage.tgMsgId, text);

    existingTgMessage.tgMsgText = text;

    await (
      await this.storageClient()
    ).repository.tgLoggerMessage.save(existingTgMessage);
  }
}
