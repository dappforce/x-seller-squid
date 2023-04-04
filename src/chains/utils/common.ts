import { WalletClient } from '../../walletClient';

export function decodeAllowedApiClients(
  src: string,
  addressToHexConvertor?: (acc: string) => string
): Set<string> {
  console.log('addressToHexConvertor - ', addressToHexConvertor);
  return new Set<string>(
    src
      .split(',')
      .map((client) =>
        addressToHexConvertor
          ? addressToHexConvertor(client)
          : WalletClient.addressToHex(client)
      )
  );
}
