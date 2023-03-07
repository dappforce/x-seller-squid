import { Ctx } from '../processor';
import { ProcessingState } from '../model';

export async function getOrCreateProcessingState(
  ctx: Ctx
): Promise<ProcessingState> {
  let processingState = await ctx.store.get(ProcessingState, '1');

  if (processingState) return processingState;

  processingState = new ProcessingState({
    id: '1',
    domainRegRefundFullProcessingAtBlock: 0
  });
  await ctx.store.save(processingState);
  return processingState;
}
