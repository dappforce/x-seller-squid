import { ProcessorConfig } from './interfaces/processorConfig';
import { ChainApi } from './interfaces/chainApi';

function withDecorator({
  config,
  api
}: {
  config: ProcessorConfig;
  api: ChainApi;
}): {
  config: ProcessorConfig;
  api: ChainApi;
} {
  return {
    config,
    api
  };
}

export function getChain(): {
  config: ProcessorConfig;
  api: ChainApi;
} {
  switch (process.env.CHAIN) {
    case 'rococoSoonsocial':
      return withDecorator(require('./rococoSoonsocial'));
    case 'polkadotSubsocial':
      return withDecorator(require('./polkadotSubsocial'));
    default:
      throw new Error(`Unsupported chain ${process.env.CHAIN}`);
  }
}
