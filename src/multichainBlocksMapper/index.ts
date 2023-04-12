import axios from 'axios';
import { Ctx } from '../processor';
// import * as gql from 'gql-query-builder';
import { getChain } from '../chains';
import { ProcessorConfig } from '../chains/interfaces/processorConfig';

type BlocksMapperBlockData = {
  id: string;
  relayBlockNumber: number | null;
  paraBlockTimestamp: string;
  paraBlockNumber: number;
  paraBlockHash: string;
};

export class MultiChainBlocksMapper {
  private static instance: MultiChainBlocksMapper;

  private chainConfig: ProcessorConfig;

  private context: Ctx | null = null;

  private constructor(context?: Ctx) {
    this.context = context ?? null;
    this.chainConfig = getChain().config;
  }

  static getInstance(ctx?: Ctx) {
    if (!MultiChainBlocksMapper.instance) {
      MultiChainBlocksMapper.instance = new MultiChainBlocksMapper(ctx);
    }
    return MultiChainBlocksMapper.instance;
  }

  async getParaBlockHashByRelayBlockNumber(
    blockNumber: number
  ): Promise<string | null> {
    const queryResp = await this.blocksMapperQuery<
      'relayParaBlockRels',
      BlocksMapperBlockData[]
    >({
      query: `query ($limit: Int, $orderBy: [RelayParaBlockRelOrderByInput!], $blocksRange: [Int!]) { relayParaBlockRels (limit: $limit, orderBy: $orderBy, where: { relayBlockNumber_in: $blocksRange }) { relayBlockNumber, paraBlockTimestamp, paraBlockNumber, paraBlockHash, id } }`,
      variables: {
        limit: 10,
        orderBy: 'paraBlockTimestamp_DESC',
        blocksRange: (() => [
          blockNumber + 2,
          blockNumber + 1,
          blockNumber,
          blockNumber - 1,
          blockNumber - 2
        ])()
      }
    });

    if (!queryResp) return null;
    const blocks = queryResp.data.relayParaBlockRels;

    let matchedBlock = blocks.find(
      (block) =>
        block.relayBlockNumber !== null &&
        block.relayBlockNumber === blockNumber
    );

    if (matchedBlock) return matchedBlock.paraBlockHash;

    matchedBlock = blocks.find(
      (block) =>
        block.relayBlockNumber !== null && block.relayBlockNumber > blockNumber
    );
    if (matchedBlock) return matchedBlock.paraBlockHash;
    matchedBlock = blocks.find(
      (block) =>
        block.relayBlockNumber !== null && block.relayBlockNumber < blockNumber
    );

    return matchedBlock ? matchedBlock.paraBlockHash : null;
  }

  private async blocksMapperQuery<N extends string, R>(graphqlQuery: {
    variables: any;
    query: string;
  }): Promise<null | {
    data: Record<N, R>;
  }> {
    const options = {
      url: this.chainConfig.blocksMapper.dataSource.endpoint,
      method: 'POST',
      data: graphqlQuery,
      headers: {
        'content-type': 'application/json'
      }
    };
    try {
      return (await axios(options)).data;
    } catch (e) {
      console.log(e);
    }
    return null;
  }
}
