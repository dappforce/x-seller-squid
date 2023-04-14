import { RequestCheckContext } from '@subsquid/graphql-server/src/check';
import { FieldNode } from 'graphql/language/ast';
import { getChain } from '../chains';
import { decodeAddress, naclOpen } from '@polkadot/util-crypto';
import { hexToU8a, u8aToString } from '@polkadot/util';
import { WalletClient } from '../walletClient';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

const protectedQueries = ['createPendingOrder', 'deletePendingOrderById'];

/**
 * We need to check such headers as:
 * - authorization
 * - client-id
 */
export async function requestCheck(
  req: RequestCheckContext
): Promise<boolean | string> {
  // Extract a token from the HTTP Authorization header
  let token: string | undefined = req.http.headers
    .get('authorization')
    ?.split(' ')[1];

  let clientId: string | undefined =
    req.http.headers.get('client-id') ?? undefined;

  req.context.openreader.clientId = clientId;

  try {
    const selections = new Set<string>(
      req.operation.selectionSet.selections
        .filter((s) => s.kind === 'Field')
        // @ts-ignore
        .map((selection: FieldNode) => selection.name.value)
    );

    if (!protectedQueries.some((query) => selections.has(query))) return true;
    if (!token) return 'Method is not allowed. Token has not been provided.'; // TODO add method name to error message
    if (!clientId)
      return 'Method is not allowed. Client ID has not been provided.'; // TODO add method name to error message

    return await isTokenValid(token, clientId);
  } catch (e) {
    console.log(e);
    return true;
  }
}

export async function isTokenValid(
  token: string,
  clientId: string
): Promise<string | boolean> {
  dayjs.extend(utc);
  const {
    config: {
      sellerClient: { allowedApiClients },
      sellerIndexer: { apiAuthTokenExp, apiDebugMode }
    }
  } = getChain();

  try {
    if (!allowedApiClients.has(WalletClient.addressToHex(clientId)))
      return 'Method is not allowed. Client is not allowed.';

    const nonce = new Uint8Array(24);
    nonce[0] = 111;

    const decodedToken = naclOpen(
      hexToU8a(token),
      nonce,
      decodeAddress(clientId),
      (await WalletClient.getInstance().init()).account
        .sellerIndexerAuthTokenMngEd25519.secretKey
    );

    const tokenTimestamp = dayjs.utc(
      Number.parseInt(u8aToString(decodedToken))
    );
    const diff = dayjs.utc().diff(tokenTimestamp);

    if (!diff || Number.isNaN(diff))
      return 'Method is not allowed. Token is not valid.';

    console.log('apiDebugMode - ', apiDebugMode);
    if (apiDebugMode) return true;

    /**
     * We need add 100ms for execution previous decoding functionality.
     */
    if (diff > apiAuthTokenExp + 100)
      return 'Method is not allowed. Token is not valid.';

    return true;
  } catch (e) {
    console.log(e);
    return 'Authorization is failed with unknown error.';
  }
}
