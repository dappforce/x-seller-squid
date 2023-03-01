import { SubSclRemark } from '../src/remark';
import { SubSclSource } from '../src/remark/types';

describe('Remark Unit', () => {
  const subsclRemarkMessageDomainRegPay =
    't_subscl::D_REG_PAY::0.1::testDomain.sub::3q5gLiDzdPZpuYL6LMXevC9W22rDTfSDMZemZstHrd7UgcJp::DOT::0xa6a548df942e68a32fab3d325a25d8b5306a938aafc6bf205c2edc516cb92000';
  const subsclRemarkSourceDomainRegPay: SubSclSource<'D_REG_PAY'> = {
    title: 't_subscl',
    version: '0.1',
    action: 'D_REG_PAY',
    content: {
      domainName: 'testDomain.sub',
      registrant: '3q5gLiDzdPZpuYL6LMXevC9W22rDTfSDMZemZstHrd7UgcJp',
      currency: 'DOT',
      attemptId:
        '0xa6a548df942e68a32fab3d325a25d8b5306a938aafc6bf205c2edc516cb92000'
    }
  };

  test('SubSclRemark toMessage', () => {
    const remarkMessage = new SubSclRemark()
      .fromSource(subsclRemarkSourceDomainRegPay)
      .toMessage();

    expect(remarkMessage).toEqual(subsclRemarkMessageDomainRegPay);
  });
});
