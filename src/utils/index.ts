import assert from 'assert';
import * as ss58 from '@subsquid/ss58';
import { decodeHex, toHex } from '@subsquid/util-internal-hex';


export function encodeAccount(
  id: Uint8Array | string | null,
  prefix?: string | number | undefined
) {
  assert(id, 'Cannot encode public key with value null.');
  if (typeof id === 'string' && !!prefix) {
    return ss58.codec(prefix).encode(decodeHex(id));
  } else if (typeof id === 'string' && !prefix) {
    return id;
  } else if (typeof id !== 'string' && !prefix) {
    return toHex(id);
  } else if (typeof id !== 'string' && !!prefix) {
    return ss58.codec(prefix).encode(id);
  }
  return id.toString();
}