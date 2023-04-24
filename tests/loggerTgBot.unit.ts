import { LoggerTgBot } from '../src/loggerTgBot';

jest.useRealTimers();

describe('LoggerTgBot Unit', () => {
  let tgBot: LoggerTgBot | null = null;

  jest.setTimeout(1000 * 60 * 5);
  beforeAll(async () => {
    tgBot = LoggerTgBot.getInstance().init();
  });

  test('Send test Message', async () => {
    const msgResp = await tgBot!.createMessage('Hello! Im squid unit test');
    console.log(msgResp);

    // tgBot!.botClient.on('message', (ctx) => console.log(ctx.message));

    // expect(1).toEqual(1);
  });
});
