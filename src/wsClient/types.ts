import { ApiPromise } from '@polkadot/api';
import { PalletName } from '@subsocial/api/types';

export type ApiClientListeners = {
  error: (e: Error) => void;
  connected: (api?: ApiPromise) => void;
  disconnected: () => void;
  ready: (api?: ApiPromise) => void;
};

export type ChainActionResult = {
  success: boolean;
  module?: string;
  reason?: string;
  status?: string;
  txHash?: string;
  txIndex?: number;
  blockHeight?: number;
  blockHash?: string;
};

export type SubstrateApiProps = {
  rpcUrl: string;
};

export type RpcParams = any[];

export type StorageItem = {
  moduleName: PalletName;
  method: string;
};

export type RpcResult = {
  result: any;
};
