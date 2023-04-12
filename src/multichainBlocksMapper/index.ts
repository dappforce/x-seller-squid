import axios from 'axios';
import { Ctx } from '../processor';
// import * as gql from 'gql-query-builder';
import { getChain } from '../chains';
import { ProcessorConfig } from '../chains/interfaces/processorConfig';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

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

  async getParaBlockHashByRelayBlockTimestamp(
    blockTimestampRaw: number
  ): Promise<string | null> {
    dayjs.extend(utc);
    const queryResp = await this.blocksMapperQuery<
      'relayParaBlockRels',
      BlocksMapperBlockData[]
    >({
      query: `query ($limit: Int, $orderBy: [RelayParaBlockRelOrderByInput!], $blockTimestamp: DateTime) { relayParaBlockRels (limit: $limit, orderBy: $orderBy, where: { paraBlockTimestamp_gte: $blockTimestamp }) { relayBlockNumber, paraBlockTimestamp, paraBlockNumber, paraBlockHash, id } }`,
      variables: {
        limit: 1,
        orderBy: 'paraBlockTimestamp_ASC',
        blockTimestamp: (() =>
          dayjs.utc(blockTimestampRaw).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'))()
      }
    });

    if (!queryResp) return null;
    const blocks = queryResp.data.relayParaBlockRels;

    if (!blocks || blocks.length == 0) return null;

    return blocks[0].paraBlockHash;
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