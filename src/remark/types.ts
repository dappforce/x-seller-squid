export type DomainRegisterPayContent = {
  domainName: string;
  registrant: string;
  currency: string;
  attemptId: string;
};
export type DomainRegisterCompletedContent = {
  domainName: string;
  registrant: string;
  currency: string;
  attemptId: string;
};

export type DomainRegisterRefundContent = {
  domainName: string;
  registrant: string;
  currency: string;
  attemptId: string;
};

export type MessageCommonContent = {
  message: string;
};

export type SubSclRemarkMessageVersion = '0.1';
export type SubSclRemarkMessageAction =
  | 'D_REG_PAY'
  | 'D_REG_COMP'
  | 'D_REG_REFUND'

  | 'EN_GEN_PAY'
  | 'EN_GEN_COMP'
  | 'EN_GEN_REFUND'

  | 'M_G';
export type SubSclRemarkMessageTitle = 't_subscl' | 't2_subscl' | 'subscl';
export type SubSclRemarkMessageContent<
  A extends SubSclRemarkMessageAction | string
> = A extends 'D_REG_PAY'
  ? DomainRegisterPayContent
  : A extends 'D_REG_COMP'
  ? DomainRegisterCompletedContent
  : A extends 'D_REG_REFUND'
  ? DomainRegisterRefundContent
  : A extends 'EN_GEN_PAY'
  ? DomainRegisterRefundContent // TODO must be implemented
  : A extends 'EN_GEN_COMP'
  ? DomainRegisterRefundContent // TODO must be implemented
  : A extends 'EN_GEN_REFUND'
  ? DomainRegisterRefundContent // TODO must be implemented
  : A extends 'M_G'
  ? MessageCommonContent
  : never;

export type SubSclRemarkMessage<
  A extends SubSclRemarkMessageAction | string = '',
  V extends true | false = false
> = {
  title: SubSclRemarkMessageTitle;
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
    D_REG_PAY: {
      domainName: 3,
      registrant: 4,
      currency: 5,
      attemptId: 6
    },
    D_REG_COMP: {
      domainName: 3,
      registrant: 4,
      currency: 5,
      attemptId: 6
    },
    D_REG_REFUND: {
      domainName: 3,
      registrant: 4,
      currency: 5,
      attemptId: 6
    },
    EN_GEN_PAY: {
      // TODO must be implemented
    },
    EN_GEN_COMP: {
      // TODO must be implemented
    },
    EN_GEN_REFUND: {
      // TODO must be implemented
    },
    M_G: {
      message: 3
    }
  }
};
