import { SocialRemarkMessage } from '@subsocial/utils';
import {
  DmnRegRemark,
  DmnRegRemarkContent,
  NrgRemark,
  NrgRemarkContent
} from '../model';

export function ensureDomainRegRemark(
  remark: SocialRemarkMessage<'DMN_REG' | 'DMN_REG_OK' | 'DMN_REG_REFUND_OK', true>
) {
  return new DmnRegRemark({
    protName: remark.protName,
    action: remark.action,
    destination: remark.destination,
    version: remark.version,
    content: new DmnRegRemarkContent({
      opId: remark.content.opId,
      domainName: remark.content.domainName,
      target: remark.content.target,
      token: remark.content.token
    })
  });
}

export function ensureEnergyGenRemark(
  remark: SocialRemarkMessage<'NRG_GEN' | 'NRG_GEN_OK' | 'NRG_GEN_REFUND', true>
) {
  return new NrgRemark({
    protName: remark.protName,
    action: remark.action,
    destination: remark.destination,
    version: remark.version,
    content: new NrgRemarkContent({
      opId: remark.content.opId,
      energyAmount: remark.content.energyAmount,
      target: remark.content.target,
      token: remark.content.token
    })
  });
}
