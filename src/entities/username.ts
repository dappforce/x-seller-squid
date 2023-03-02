import { Username } from '../model';
import { Ctx } from '../processor';

export async function getOrCreateUsername(
  id: string,
  ctx: Ctx
): Promise<Username> {
  let uname = await ctx.store.get(Username, id);

  if (uname) return uname;

  uname = new Username({
    id
  });

  await ctx.store.save(uname);
  return uname;
}
