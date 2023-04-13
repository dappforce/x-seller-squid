import {
  SocialRemark,
  SocialRemarkMessageProtocolName,
  SubSclSource,
  SocialRemarkDestChainsNameId
} from '@subsocial/utils';
import { randomAsNumber } from '@polkadot/util-crypto';

describe('Remark Unit', () => {
  const testRemarkTitle: SocialRemarkMessageProtocolName = 'social_t_0';
  const protocolVersion = '0.1';

  const testAddressSubsocial =
    '3t5NA8UKsGzrCDMfp8XMEBghiYthWGXGsHbjtJY45NUJDY5P';

  const subsclRemarkSourceDomainRegPay: SubSclSource<'DMN_REG'> = {
    protName: testRemarkTitle,
    version: protocolVersion,
    destination: SocialRemarkDestChainsNameId.soonsocial,
    action: 'DMN_REG',
    content: {
      domainName: `tdotdomain${randomAsNumber()}.sub`,
      target: testAddressSubsocial,
      token: 'DOT',
      opId: `0xa6a548df942e68a32fab3d325a25d8b5306a938aafc6bf205c2edc516cb92000-${randomAsNumber()}`
    }
  };

  beforeAll(() => {
    SocialRemark.setConfig({ protNames: [testRemarkTitle] });
  });

  test('SocialRemark from Source to Message', () => {
    const remarkMessage = new SocialRemark()
      .fromSource(subsclRemarkSourceDomainRegPay)
      .toMessage();

    console.log(remarkMessage);

    expect(remarkMessage).toEqual(remarkMessage);
  });
});
