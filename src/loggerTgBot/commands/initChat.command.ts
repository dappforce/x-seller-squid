import { Command } from './command.class';
import { Context, Telegraf } from 'telegraf';
import { LoggerTgBot } from '../base';

export class InitChatCommand extends Command {
  constructor(bot: Telegraf<Context>, private logger: LoggerTgBot) {
    super(bot);
  }

  handle(): void {
    this.bot.command('init_chat', (ctx) => {
      if (this.logger.supportChatId) {
        ctx.reply(
          `Support chat is already configured (char id: ${this.logger.supportChatId}).`
        );
        return;
      }
      this.logger.setChatId(ctx.update.message.chat.id);
      ctx.reply(
        `Support chat been configured successfully (char id: ${this.logger.supportChatId}).`
      );
    });
  }
}
