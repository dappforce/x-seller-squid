export type DomainRegisterPayContent = {
  domainName: string;
  target: string;
  token: string;
  opId: string;
};
export type DomainRegisterCompletedContent = {
  domainName: string;
  target: string;
  token: string;
  opId: string;
};

export type DomainRegisterRefundContent = {
  domainName: string;
  target: string;
  token: string;
  opId: string;
};

export type SubSclRemarkMessageVersion = '0.1';
export type SubSclRemarkMessageAction =
  | 'DMN_REG'
  | 'DMN_REG_OK'
  | 'DMN_REG_REFUND'
  | 'NRG_GEN'
  | 'NRG_GEN_OK'
  | 'NRG_GEN_REFUND';

export type SubSclRemarkMessageProtocolName =
  | 'test_remark_title'
  | 't_subscl'
  | 't2_subscl'
  | 't3_subscl'
  | 't4_subscl'
  | 'social';

export type SubSclRemarkMessageContent<
  A extends SubSclRemarkMessageAction | string
> = A extends 'DMN_REG'
  ? DomainRegisterPayContent
  : A extends 'DMN_REG_OK'
  ? DomainRegisterCompletedContent
  : A extends 'DMN_REG_REFUND'
  ? DomainRegisterRefundContent
  : A extends 'NRG_GEN'
  ? DomainRegisterRefundContent // TODO must be implemented
  : A extends 'NRG_GEN_OK'
  ? DomainRegisterRefundContent // TODO must be implemented
  : A extends 'NRG_GEN_REFUND'
  ? DomainRegisterRefundContent // TODO must be implemented
  : never;

export type SubSclRemarkMessage<
  A extends SubSclRemarkMessageAction | string = '',
  V extends true | false = false
> = {
  protName: SubSclRemarkMessageProtocolName;
  version: SubSclRemarkMessageVersion;
  action: A;
  valid: V; // TODO make this prop optional
  content: V extends true ? SubSclRemarkMessageContent<A> : null;
};

export type SubSclSource<A extends SubSclRemarkMessageAction | string = ''> =
  Omit<SubSclRemarkMessage<A, true>, 'valid'>;

//TODO add type for variable
export const REMARK_CONTENT_VERSION_ACTION_MAP = {
  '0.1': {
    DMN_REG: {
      opId: 3,
      target: 4,
      domainName: 5,
      token: 6,
    },
    DMN_REG_OK: {
      opId: 3,
      target: 4,
      domainName: 5,
      token: 6,
    },
    DMN_REG_REFUND: {
      opId: 3,
      target: 4,
      domainName: 5,
      token: 6,
    },
    NRG_GEN: {
      // TODO must be implemented
    },
    NRG_GEN_OK: {
      // TODO must be implemented
    },
    NRG_GEN_REFUND: {
      // TODO must be implemented
    },
  }
};
