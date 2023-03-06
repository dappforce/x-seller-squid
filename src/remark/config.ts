import { SubSclRemarkMessageAction, SubSclRemarkMessageProtocolName, SubSclRemarkMessageVersion } from './types';

export type SubSclRemarkConfigData = {
  protNames?: SubSclRemarkMessageProtocolName[];
  actions?: SubSclRemarkMessageAction[];
  versions?: SubSclRemarkMessageVersion[];
};

export class SubSclRemarkConfig {
  private static instance: SubSclRemarkConfig;

  private conf: Required<SubSclRemarkConfigData> = {
    protNames: [
      'test_remark_title',
      't_subscl',
      't2_subscl',
      't3_subscl',
      't4_subscl',
      'social'
    ],
    actions: [
      'DMN_REG',
      'DMN_REG_OK',
      'DMN_REG_REFUND',
      'NRG_GEN',
      'NRG_GEN_OK',
      'NRG_GEN_REFUND',
    ],
    versions: ['0.1']
  };

  static getInstance(): SubSclRemarkConfig {
    if (!SubSclRemarkConfig.instance) {
      SubSclRemarkConfig.instance = new SubSclRemarkConfig();
    }
    return SubSclRemarkConfig.instance;
  }

  public get config() {
    return this.conf;
  }

  public setConfig(data: SubSclRemarkConfigData) {
    this.conf = {
      ...this.conf,
      ...data
    };
  }
}
