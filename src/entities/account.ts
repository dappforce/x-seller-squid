import { Account } from '../model';
import { Ctx } from '../processor';

export async function getOrCreateAccount(
  id: string,
  ctx: Ctx
): Promise<Account> {
  let acc = await ctx.store.get(Account, id);

  if (acc) return acc;

  acc = new Account({
    id
  });
  await ctx.store.save(acc);
  return acc;
}
