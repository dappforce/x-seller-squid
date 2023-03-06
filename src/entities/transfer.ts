import { Transfer } from '../model';
import { Ctx } from '../processor';
import { CallParsed, TransferData } from '../parser/types';
import { getChain } from '../chains';
import { getOrCreateAccount } from './account';

const { config } = getChain();

export async function createAndGetTransfer(
  callData: CallParsed<'DMN_REG' | 'NRG_GEN'>,
  ctx: Ctx
): Promise<Transfer> {
  const {
    blockHash,
    blockNumber: blockHeight,
    timestamp,
    from,
    to,
    amount,
    batchAllCallId
  } = callData as TransferData<CallParsed>; // TODO types should be reviewed

  const transfer = new Transfer({
    id: batchAllCallId, // TODO should be reimplemented for using transfer event id
    addressChainPrefix: config.sellerChain.prefix.toString(),
    from: await getOrCreateAccount(from, ctx),
    to: await getOrCreateAccount(to, ctx),
    amount,
    blockHeight,
    blockHash,
    timestamp
  });

  await ctx.store.save(transfer);
  return transfer;
}
