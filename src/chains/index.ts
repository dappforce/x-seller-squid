import { ProcessorConfig } from './interfaces/processorConfig';

function withDecorator({ config }: { config: ProcessorConfig }): {
  config: ProcessorConfig;
} {
  return {
    config
  };
}

export function getChain(): {
  config: ProcessorConfig;
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
