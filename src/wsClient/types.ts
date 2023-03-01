import { ApiPromise } from '@polkadot/api';

export type ApiClientListeners = {
  error: (e: Error) => void;
  connected: (api?: ApiPromise) => void;
  disconnected: () => void;
  ready: (api?: ApiPromise) => void;
};

export type ChainActionResult = {
  success: boolean;
  txHash?: string;
  blockHeight?: number;
  blockHash?: string;
  reason?: string;
};
