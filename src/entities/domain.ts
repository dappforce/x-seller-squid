import { Domain } from '../model';
import { Ctx } from '../processor';

export async function getOrCreateDomain(
  id: string,
  ctx: Ctx
): Promise<Domain> {
  let domain = await ctx.store.get(Domain, id);

  if (domain) return domain;

  domain = new Domain({
    id
  });

  await ctx.store.save(domain);
  return domain;
}
