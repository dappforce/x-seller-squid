import { MultiChainBlocksMapper } from '../src/multichainBlocksMapper';

describe('MultiChain Blocks Mapper Unit', () => {
  beforeAll(async () => {});

  test('Gat parachain block hash by relaychain block number range', async () => {
    const blockHash =
      await MultiChainBlocksMapper.getInstance().getParaBlockHashByRelayBlockNumber(
        2184845
      );

    expect(blockHash).toEqual(
      '0xcdd4f873f85de6c57c38c1121e43d740a6eab9debbbb44e5d12e5a3c855c0eba'
    );
  });
});
