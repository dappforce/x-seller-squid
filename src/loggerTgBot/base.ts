import { Telegraf, Markup, Context } from 'telegraf';
import { ProcessorConfig } from '../chains/interfaces/processorConfig';
import { Ctx } from '../processor';
import { getChain } from '../chains';
import { Message } from 'typegram/message';
import { Command } from './commands/command.class';
import { InitChatCommand } from './commands';

export class LoggerTgBot {
  protected bot: Telegraf<Context>;
  protected chainConfig: ProcessorConfig;
  protected initialized: boolean = false;
  protected commands: Command[] = [];
  protected chatId: number | null;

  constructor(context?: Ctx) {
    this.chainConfig = getChain().config;
    this.chatId = this.chainConfig.sellerIndexer.loggerTgBotChannelId;
    this.bot = new Telegraf<Context>(
      this.chainConfig.sellerIndexer.loggerTgBotToken
    );
  }

  get botClient(): Telegraf {
    return this.bot;
  }
  get supportChatId(): number | null {
    return this.chatId;
  }

  get ensureSupportChatId(): number {
    if (!this.chatId) throw new Error('Support chat is not configured.');
    return this.chatId;
  }

  setChatId(id: number) {
    this.chatId = id;
  }

  init() {
    if (this.initialized) return this;
    this.initialized = true;

    if (this.chainConfig.sellerIndexer.processingDisabled) return this;

    this.commands = [new InitChatCommand(this.bot, this)];

    for (const command of this.commands) {
      command.handle();
    }

    this.bot.launch().then();

    return this;
  }

  public async postMessage(content: string): Promise<Message.TextMessage> {
    return await this.bot.telegram.sendMessage(
      this.ensureSupportChatId,
      content
    );
  }

  public async appendContentToMessage(
    messageId: number,
    content: string
  ): Promise<void> {
    await this.bot.telegram.editMessageText(
      this.ensureSupportChatId,
      messageId,
      undefined,
      content
    );
  }
}
