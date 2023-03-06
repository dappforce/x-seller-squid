import { SubSclRemark } from '../src/remark';
import { SubSclRemarkMessageProtocolName, SubSclSource } from '../src/remark/types';

describe('Remark Unit', () => {
  const testRemarkTitle: SubSclRemarkMessageProtocolName = 'test_remark_title';
  const subsclRemarkMessageDomainRegPay = `${testRemarkTitle}::D_REG_PAY::0.1::testDomain.sub::0xde9f30be09a7cc7f0014261362069b66ce798d7a990def1b7deaa8b4b2a57668::DOT::0xa6a548df942e68a32fab3d325a25d8b5306a938aafc6bf205c2edc516cb92000`;
  const subsclRemarkSourceDomainRegPay: SubSclSource<'DMN_REG'> = {
    protName: testRemarkTitle,
    version: '0.1',
    action: 'DMN_REG',
    content: {
      domainName: 'testDomain.sub',
      target:
        '0xde9f30be09a7cc7f0014261362069b66ce798d7a990def1b7deaa8b4b2a57668',
      token: 'DOT',
      opId:
        '0xa6a548df942e68a32fab3d325a25d8b5306a938aafc6bf205c2edc516cb92000'
    }
  };

  beforeAll(() => {
    SubSclRemark.setConfig({ protNames: [testRemarkTitle] });
  });

  test('SubSclRemark from Source to Message', () => {
    const remarkMessage = new SubSclRemark()
      .fromSource(subsclRemarkSourceDomainRegPay)
      .toMessage();

    expect(remarkMessage).toEqual(subsclRemarkMessageDomainRegPay);
  });

  test('SubSclRemark from Message to Source', () => {
    const remarkSource = new SubSclRemark().fromMessage(
      subsclRemarkMessageDomainRegPay
    ).message;

    expect({ ...subsclRemarkSourceDomainRegPay, valid: true }).toMatchObject(
      remarkSource
    );
  });
});
