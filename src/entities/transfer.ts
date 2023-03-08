import { Transfer } from '../model';
import { Ctx } from '../processor';
import { BalanceTransferData } from '../parser/types';
import { getChain } from '../chains';
import { getOrCreateAccount } from './account';

const { config } = getChain();

export async function createAndGetTransfer(
  transferData: BalanceTransferData,
  ctx: Ctx
): Promise<Transfer> {
  const { blockHash, extrinsicHash, txIndex, from, to, amount, token } =
    transferData; // TODO types should be reviewed

  const transfer = new Transfer({
    id: `${blockHash}-${txIndex}`,
    addressChainPrefix: config.sellerChain.prefix.toString(),
    from: await getOrCreateAccount(from, ctx),
    to: await getOrCreateAccount(to, ctx),
    eventIndex: txIndex,
    amount,
    blockHash,
    extrinsicHash,
    token
  });

  await ctx.store.save(transfer);
  return transfer;
}
