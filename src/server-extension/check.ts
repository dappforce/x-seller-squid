import { RequestCheckContext } from '@subsquid/graphql-server/src/check';
import { FieldNode, SelectionNode } from 'graphql/language/ast';
import { getChain } from '../chains';
import { naclOpen } from '@polkadot/util-crypto';
import {
  hexToU8a,
  stringToHex,
  stringToU8a,
  u8aToHex,
  u8aToString
} from '@polkadot/util';
import { WalletClient } from '../walletClient';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

const protectedQueries = [
  'publishDraftOrder',
  'getAllDraftOrdersByClientId',
  'getDraftOrderByDomain'
];

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

    return isTokenValid(token, clientId);

    return 'Method is not allowed. Token is not valid.'; // TODO add method name to error message
  } catch (e) {
    console.log(e);
    return true;
  }
}

export function isTokenValid(
  token: string,
  clientId: string
): string | boolean {
  const {
    config: {
      sellerClient: { allowedApiClients },
      sellerIndexer: { apiAuthTokenExp }
    }
  } = getChain();
  try {
    console.log('allowedApiClients - ', allowedApiClients);

    if (!allowedApiClients.has(WalletClient.addressToHex(clientId)))
      return 'Method is not allowed. Client is not allowed.';

    const nonce = new Uint8Array(24);
    nonce[0] = 111;

    const decodedToken = naclOpen(
      stringToU8a(token),
      nonce,
      stringToU8a(clientId),
      WalletClient.getInstance().account.sellerIndexerTokenManager.secretKey
    );

    const tokenTimestamp = dayjs.utc(
      Number.parseInt(u8aToString(decodedToken))
    );
    const diff = dayjs.utc().diff(tokenTimestamp);

    /**
     * We need add 100ms for execution previous decoding functionality.
     */
    if (diff > apiAuthTokenExp + 100)
      return 'Method is not allowed. Token is not valid.';
    return true;
  } catch (e) {
    console.log(e);
    return 'Method is not allowed.';
  }
}
