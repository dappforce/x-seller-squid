import { ChainApi } from '../../interfaces/chainApi';
import { parseBalancesTransferEvent } from './events';
import { parseSystemRemarkCall } from './calls';

export const api: ChainApi = {
  events: {
    parseBalancesTransferEvent
  },
  calls: {
    parseSystemRemarkCall
  }
};
