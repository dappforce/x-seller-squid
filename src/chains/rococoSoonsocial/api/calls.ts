import { Call, ChainContext, Event } from '../types/support';
import { Ctx, EventItem } from '../../../processor';
import { SystemRemarkCall } from '../types/calls';
import { UnknownVersionError } from '../../utils/errors';
import { SocialRemark } from '../../../remark';

export function parseSystemRemarkCall(call: Call, ctx: Ctx): string {
  const callData = new SystemRemarkCall(ctx, call);

  if (callData.isV9190) {
    const { remark } = callData.asV9190;
    return SocialRemark.bytesToString(remark);
  }
  throw new UnknownVersionError(callData.constructor.name);
}
