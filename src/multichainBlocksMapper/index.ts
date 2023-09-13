import axios from 'axios';
import { Ctx } from '../processor';
// import * as gql from 'gql-query-builder';
import { getChain } from '../chains';
import { ProcessorConfig } from '../chains/interfaces/processorConfig';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

type ArchiveBlockData = {
  hash: string;
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

  /**
   * Method can return null in case some error or if archive still doesn't have
   * required block in DB. Usually it means that users requests latest block in
   * blockchain and it's still not ingested by archive.
   */
  async getParaBlockHashByRelayBlockTimestamp(
    blockTimestampRaw: number
  ): Promise<string | null> {
    dayjs.extend(utc);

    const queryResp = await this.blocksMapperQuery<
      'blocks',
      ArchiveBlockData[]
    >({
      query: `query ($limit: Int, $orderBy: [BlockOrderByInput!], $blockTimestamp: DateTime) { blocks (limit: $limit, orderBy: $orderBy, where: { timestamp_gte: $blockTimestamp }) { hash } }`,
      variables: {
        limit: 1,
        orderBy: 'timestamp_ASC',
        blockTimestamp: (() =>
          dayjs.utc(blockTimestampRaw).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'))()
      }
    });

    if (!queryResp || !queryResp.data) return null;
    const blocks = queryResp.data.blocks;

    if (!blocks || blocks.length == 0) return null;

    return blocks[0].hash;
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
