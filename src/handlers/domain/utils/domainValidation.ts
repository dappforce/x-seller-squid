import { BuyerChainClient } from '../../../wsClient';
import { WalletClient } from '../../../walletClient';
import {
  PartialStatus,
  StatusesMng,
  StatusModule
} from '../../../utils/statusesManager';
import { getChain } from '../../../chains';
import { TokenName } from '../../../chains/interfaces/processorConfig';
import { MultiChainBlocksMapper } from '../../../multichainBlocksMapper';

const { config } = getChain();

type ValidationResult = {
  success: boolean;
  module?: StatusModule;
  status?: PartialStatus;
  reason?: string;
  txHash?: string;
  txIndex?: number;
  blockHeight?: number;
  blockHash?: string;
};

async function getFailedStatusWithMeta(
  data: Omit<ValidationResult, 'success'>
): Promise<ValidationResult> {
  return {
    ...(await BuyerChainClient.getInstance().getBlockMeta()),
    ...data,
    success: false
  };
}

export async function validateDomainRegistrationTargetAddress(address: string) {
  if (!WalletClient.isAddressValid(address))
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason('Domain', 'ErrorRegInvalidTarget')
    });

  return {
    success: true
  };
}

export async function validateRegistrationPayment(
  transferredAmount: bigint,
  transferredToken: TokenName
): Promise<ValidationResult> {
  if (transferredToken !== config.sellerChain.token.name)
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason(
        'Domain',
        'ErrorRegPaymentTokenInvalid'
      )
    });

  const buyerChainClient = BuyerChainClient.getInstance();
  const registrationPrice = await buyerChainClient.getDomainRegistrationPrice(
    config.sellerChain.token
  );

  if (registrationPrice === null || transferredAmount < registrationPrice)
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason(
        'Domain',
        'ErrorRegPaymentAmountInsufficient'
      ),
      reason: `Paid amount is insufficient for registrations. Required ${
        registrationPrice ? registrationPrice.toString() : 'NaN'
      } but transferred ${transferredAmount.toString()}`
    });

  return {
    success: true
  };
}

export async function validateDomainAvailability(
  domainName: string,
  target: string,
  relayBlockTimestampRaw: number
): Promise<ValidationResult> {
  const buyerChainClient = BuyerChainClient.getInstance();

  const existingDomain = await buyerChainClient.getRegisteredDomains(
    [domainName],
    (await MultiChainBlocksMapper.getInstance().getParaBlockHashByRelayBlockTimestamp(
      relayBlockTimestampRaw
    )) ?? undefined
  );

  if (!existingDomain) {
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason(
        'WsClient',
        'ErrorGetRegisteredDomainsFailed'
      )
    });
  }

  if (existingDomain.length > 0) {
    const domainsOwnedByRegistrant = existingDomain.find(
      (d) =>
        WalletClient.addressFromAnyToFormatted(
          d.get('owner').toString(),
          28
        ) === target
    );

    if (domainsOwnedByRegistrant) {
      /**
       * In this case status marked as Processing and squid will check next
       * blocks for "DMN_REG_OK" remark which will confirm that domain is
       * registered and registration order can be completed. Usually such case
       * can be occurred if squid is reindexing the chain from the start. We
       * don's need initiate refund in this case.
       */
      return await getFailedStatusWithMeta({
        ...StatusesMng.getStatusWithReason(
          'Domain',
          'ErrorRegAlreadyOwnedByTarget'
        )
      });
    } else {
      /**
       * This situation be occurred in both cases reindexing squid from the
       * start and normal work. If it's reindexing (not head of archive),
       * refund action will be delayed till the head. If it's head, refund
       * should be initiated immediately.
       */
      return await getFailedStatusWithMeta({
        ...StatusesMng.getStatusWithReason('Domain', 'ErrorRegUnavailable')
      });
    }
  }

  return {
    success: true
  };
}

export async function validateDomainTld(
  domainName: string
): Promise<ValidationResult> {
  const domainNameChunked = domainName.split('.');
  // TODO get supported tlds from blockchain "domains.supportedTlds"
  if (domainNameChunked.length < 2 || domainNameChunked[1] !== 'sub') {
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason('Domain', 'ErrorRegForbiddenTld')
    });
  }

  return {
    success: true
  };
}

export async function validateDomainMinLength(
  domainName: string
): Promise<ValidationResult> {
  const buyerChainClient = BuyerChainClient.getInstance();
  // TODO use toNumber instead of toHuman, add wrapper
  // TODO add try catch
  const minDomainLength =
    buyerChainClient.api.consts.domains.minDomainLength.toString();

  if (!minDomainLength) {
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason('WsClient', 'ErrorGetDomainMinLength')
    });
  }

  // TODO review is required
  if (domainName.length < Number.parseInt(minDomainLength)) {
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason('Domain', 'ErrorRegMinLengthInvalid')
    });
  }

  return {
    success: true
  };
}

export async function validateDomainMaxLength(
  domainName: string
): Promise<ValidationResult> {
  const buyerChainClient = BuyerChainClient.getInstance();
  // TODO use toNumber instead of toHuman, add wrapper
  // TODO add try catch
  const maxDomainLength =
    buyerChainClient.api.consts.domains.maxDomainLength.toString();

  if (!maxDomainLength) {
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason('WsClient', 'ErrorGetDomainMaxLength')
    });
  }

  // TODO review is required
  if (domainName.length > Number.parseInt(maxDomainLength)) {
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason('Domain', 'ErrorRegMaxLengthInvalid')
    });
  }

  return {
    success: true
  };
}

export async function validateTargetDomainsMaxLimit(
  target: string
): Promise<ValidationResult> {
  const buyerChainClient = BuyerChainClient.getInstance();
  // TODO use toNumber instead of toHuman, add wrapper
  // TODO add try catch
  const registeredDomains = await buyerChainClient.getDomainsByOwner(target);
  const maxRegisteredDomainsLimit =
    buyerChainClient.api.consts.domains.maxDomainsPerAccount ?? null; // TODO add try catch

  if (!registeredDomains || !maxRegisteredDomainsLimit) {
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason('WsClient', 'ErrorGetDomainsByOwner')
    });
  }

  // TODO review is required
  if (
    registeredDomains.length >
    Number.parseInt(maxRegisteredDomainsLimit.toString())
  ) {
    return await getFailedStatusWithMeta({
      ...StatusesMng.getStatusWithReason(
        'Domain',
        'ErrorRegMaxRegisteredDomainsLimit'
      )
    });
  }

  return {
    success: true
  };
}
