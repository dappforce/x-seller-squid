import { WalletClient } from '../../walletClient';

export function parseAllowedApiClients(src: string): Set<string> {
  return new Set<string>(
    src.split(',').map((client) => WalletClient.addressToHex(client))
  );
}

export function parsePendingOrderExpTime(
  envVar: string | undefined,
  defVal: number
): number {
  if (!envVar) return defVal * 60 * 1000;
  return (
    (!Number.isNaN(Number.parseInt(envVar))
      ? Number.parseInt(envVar)
      : defVal) *
    60 *
    1000
  );
}
export function parseApiAuthTokenExpTime(
  envVar: string | undefined,
  defVal: number
): number {
  if (!envVar) return defVal;
  return !Number.isNaN(Number.parseInt(envVar))
    ? Number.parseInt(envVar)
    : defVal;
}
