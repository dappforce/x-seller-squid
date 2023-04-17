import { MultiChainBlocksMapper } from '../src/multichainBlocksMapper';

describe('MultiChain Blocks Mapper Unit', () => {
  beforeAll(async () => {});

  test('Gat parachain block hash by relaychain block number range', async () => {
    const blockHash =
      await MultiChainBlocksMapper.getInstance().getParaBlockHashByRelayBlockTimestamp(
        1681335579674 //'2023-04-12T21:39:39.674Z'
      );

    expect(blockHash).toEqual(
      '0x82f20c98cf14369fd905285027d5cf239f4eb046bf46727f33da68080c0fc4ea'
    );
  });
});
