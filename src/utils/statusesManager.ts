export type StatusModule = 'Common' | 'WsClient' | 'Domain' | 'Custom';

export type CommonModuleStatusName = 'ErrorCommon' | 'ErrorUnknown';

export type DomainModuleStatusName =
  | 'ErrorRegMinLengthInvalid'
  | 'ErrorRegMaxLengthInvalid'
  | 'ErrorRegPaymentAmountInsufficient'
  | 'ErrorRegAlreadyOwnedByTarget'
  | 'ErrorRegUnavailable'
  | 'ErrorRegForbiddenTld'
  | 'ErrorRegMaxRegisteredDomainsLimit'
  | 'ErrorRefundUnknownError';

export type WsClientModuleStatusName =
  | 'ErrorUnknown'
  | 'ErrorCommon'
  | 'ErrorGetRegisteredDomainsFailed'
  | 'ErrorGetDomainMinLength'
  | 'ErrorGetDomainMaxLength'
  | 'ErrorGetDomainsByOwner';

export type PartialStatus = CommonModuleStatusName &
  DomainModuleStatusName &
  WsClientModuleStatusName;

const statusReasonMap: Record<
  StatusModule,
  Record<
    PartialStatus,
    {
      reason: string;
      module: StatusModule;
      status: PartialStatus;
    }
  >
> = {
  Domain: {
    ErrorRegPaymentAmountInsufficient: {
      module: 'Domain',
      status: 'ErrorRegPaymentAmountInsufficient',
      reason: 'Transferred amount is '
    },
    ErrorRegMinLengthInvalid: {
      module: 'Domain',
      status: 'ErrorRegMinLengthInvalid',
      reason: 'Domain length is too short'
    },
    ErrorRegMaxLengthInvalid: {
      module: 'Domain',
      status: 'ErrorRegMaxLengthInvalid',
      reason: 'Domain length is too long'
    },
    ErrorRegAlreadyOwnedByTarget: {
      module: 'Domain',
      status: 'ErrorRegAlreadyOwnedByTarget',
      reason: 'Domain is already owned by target'
    },
    ErrorRegUnavailable: {
      module: 'Domain',
      status: 'ErrorRegUnavailable',
      reason: 'Domain is no longer available'
    },
    ErrorRegForbiddenTld: {
      module: 'Domain',
      status: 'ErrorRegForbiddenTld',
      reason: 'TLD of domain is invalid.'
    },
    ErrorRegMaxRegisteredDomainsLimit: {
      module: 'Domain',
      status: 'ErrorRegMaxRegisteredDomainsLimit',
      reason:
        'Maximum number of registered domains for current target is reached.'
    },
    ErrorRefundUnknownError: {
      module: 'Domain',
      status: 'ErrorRefundUnknownError',
      reason: 'Unknown error has been occurred' // TODO add text
    }
  },
  WsClient: {
    ErrorGetRegisteredDomainsFailed: {
      module: 'WsClient',
      status: 'ErrorGetRegisteredDomainsFailed',
      reason: 'Fetch registered domains has failed.'
    },
    ErrorUnknown: {
      module: 'WsClient',
      status: 'ErrorUnknown',
      reason: 'Unknown error has been occurred' // TODO add text
    },
    ErrorCommon: {
      module: 'WsClient',
      status: 'ErrorCommon',
      reason: 'Unknown error has been occurred' // TODO add text
    },
    ErrorGetDomainMinLength: {
      module: 'WsClient',
      status: 'ErrorGetDomainMinLength',
      reason: 'Unknown error has been occurred' // TODO add text
    },
    ErrorGetDomainMaxLength: {
      module: 'WsClient',
      status: 'ErrorGetDomainMaxLength',
      reason: 'Unknown error has been occurred' // TODO add text
    },
    ErrorGetDomainsByOwner: {
      module: 'WsClient',
      status: 'ErrorGetDomainsByOwner',
      reason: 'Unknown error has been occurred' // TODO add text
    }
  },
  Common: {
    ErrorCommon: {
      module: 'Common',
      status: 'ErrorCommon',
      reason: 'Unknown error has been occurred'
    },
    ErrorUnknown: {
      module: 'Common',
      status: 'ErrorUnknown',
      reason: 'Unknown error has been occurred'
    }
  },
  Custom: {
    ErrorCommon: {
      module: 'Custom',
      status: 'ErrorCommon',
      reason: 'Unknown error has been occurred'
    }
  }
};

type StatusNameFromModule<M extends StatusModule> = M extends 'Common'
  ? CommonModuleStatusName
  : M extends 'WsClient'
  ? WsClientModuleStatusName
  : M extends 'Domain'
  ? DomainModuleStatusName
  : M extends 'Custom'
  ? string
  : never;

export class StatusesMng {
  static getStatusWithReason<M extends StatusModule>(
    module: M,
    statusName: StatusNameFromModule<M>,
    customReason?: string
  ): {
    reason: string;
    module: StatusModule;
    status: PartialStatus;
  } {
    return statusReasonMap[module as StatusModule][
      statusName as CommonModuleStatusName &
        DomainModuleStatusName &
        WsClientModuleStatusName
    ];
  }
}

//
//
// // type StatusModule = 'Common' | 'WsClient' | 'Domain' | 'Custom';
//
// type CommonModuleStatusName = 'ErrorCommon';
//
// type DomainModuleStatusName =
//   | 'ErrorRegMinLengthInvalid'
//   | 'ErrorRegMaxLengthInvalid';
//
// type WsClientModuleStatusName =
//   | 'ErrorDmnRegMinLengthInvalid'
//   | 'ErrorDmnRegMaxLengthInvalid';
//
// enum StatusModule {
//   Common = 'Common',
//   WsClient = 'WsClient',
//   Domain = 'Domain',
//   Custom = 'Custom'
// }
//
// enum CommonModuleStatus {
//   ErrorCommon = 'ErrorCommon'
// }
//
// enum DomainModuleStatus {
//   ErrorRegMinLengthInvalid = 'ErrorRegMinLengthInvalid',
//   ErrorRegMaxLengthInvalid = 'ErrorRegMaxLengthInvalid'
// }
//
// enum WsClientModuleStatus {
//   ErrorRegMinLengthInvalid = 'ErrorRegMinLengthInvalid'
// }
//
// const StatusReasonMap: Record<
//   StatusModule,
//   Record<
//     Partial<CommonModuleStatus & DomainModuleStatus & WsClientModuleStatus>,
//     {
//       reason: string;
//       module: StatusModule;
//       status: Partial<
//         CommonModuleStatus & DomainModuleStatus & WsClientModuleStatus
//       >;
//     }
//   >
// > = {
//   [StatusModule.Domain]: {
//     [DomainModuleStatus.ErrorRegMinLengthInvalid]: {
//       module: StatusModule.Domain,
//       status: DomainModuleStatus.ErrorRegMinLengthInvalid,
//       reason: 'Domain length is too short'
//     },
//     [DomainModuleStatus.ErrorRegMaxLengthInvalid]: {
//       module: StatusModule.Domain,
//       status: DomainModuleStatus.ErrorRegMaxLengthInvalid,
//       reason: 'Domain length is too long'
//     }
//   },
//   [StatusModule.WsClient]: {
//     [WsClientModuleStatus.ErrorRegMinLengthInvalid]: {
//       module: StatusModule.WsClient,
//       status: WsClientModuleStatus.ErrorRegMinLengthInvalid,
//       reason: ''
//     }
//   },
//   [StatusModule.Common]: {
//     [CommonModuleStatus.ErrorCommon]: {
//       module: StatusModule.Common,
//       status: CommonModuleStatus.ErrorCommon,
//       reason: 'Unknown error has been occurred'
//     }
//   },
//   [StatusModule.Custom]: {
//     [CommonModuleStatus.ErrorCommon]: {
//       module: StatusModule.Common,
//       status: CommonModuleStatus.ErrorCommon,
//       reason: 'Unknown error has been occurred'
//     }
//   }
// };
//
// type StatusNameFromModule<M extends StatusModule> =
//   M extends StatusModule.Common
//     ? CommonModuleStatus
//     : M extends StatusModule.WsClient
//       ? WsClientModuleStatus
//       : M extends StatusModule.Domain
//         ? DomainModuleStatus
//         : M extends StatusModule.Custom
//           ? string
//           : never;
//
// export class StatusesMng {
//   static getStatusWithReason<M extends StatusModule>(
//     module: M,
//     statusName: StatusNameFromModule<M>
//   ): {
//     reason: string;
//     module: StatusModule;
//     status: Partial<
//       CommonModuleStatus & DomainModuleStatus & WsClientModuleStatus
//     >;
//   } {
//     return StatusReasonMap[module][statusName]
//   }
//
//   static getStatusCode<M extends StatusModule>(
//     module: M,
//     statusName: StatusNameFromModule<M>
//   ): number {}
// }
