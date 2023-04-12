# X-Seller-Squid

Based on Subsquid

## Seller-Squid configuration information `sellerConfigInfo`

Seller squid has custom API query for exposing seller configurations, treasure account, etc.

Implementation of query resolver can be found [here](./src/server-extension/resolvers/sellerConfigInfo.ts).

Data types can be found [here](./src/server-extension/model/sellerConfigInfo.model.ts)

- `dmnRegPendingOrderExpTime`: expiration time of PendingOrder (milliseconds)
- `domainHostChain`: blockchain name where domain will be registered (subsocial/soonsocial)
- `domainHostChainPrefix`: blockchain prefix where domain will be registered
- `domainRegistrationPriceFixed`: DEPRECATED
- `remarkProtName`: SocialRemark protocol name, particular seller squid instance works with
- `remarkProtVersion`: SocialRemark protocol version, particular seller squid instance works with
- `sellerApiAuthTokenManager`: seller squid account `ED25519` public key, which should be used by
  client app for signing auth token message (explained below)
- `sellerChain`: blockchain name where payment will be done (polkadot/rococo)
- `sellerChainPrefix`: blockchain prefix where payment will be done (polkadot/rococo)
- `sellerToken `: details of token, which will be used for purchases in seller blockchain
  - `decimal`
  - `name`
- `sellerTreasuryAccount`: seller blockchain account, which will receive payments

---

## Pending Orders

The current Squid has custom API calls based on the main API which is based on [schema.graphql](./schema.graphql).
Custom resolvers have been implemented based on [Subsquid's recommendations](https://docs.subsquid.io/graphql-api/custom-resolvers/).

### PendingOrder Entity

Pending Orders must be available for all clients immediately after creation, so we cannot use
the native Squid Store functions and its native DB. This is because Squid saves data to the DB with just one transaction which commits at
the end of each batch. This provides a pretty big delay in the accessibility of custom data for retrieval by other clients.

As result, Pending Orders are managed by a [ServiceLocalStorage](./src/serviceLocalStorageClient/client.ts) client
which is based on TypeORM + SQLite. It's a fast and lightweight solution.

#### Structure Of The PendingOrder Entity

The source code can be found [here](./src/serviceLocalStorageClient/model/pendingOrder.ts).

```typescript
export class PendingOrder {
  constructor(props?: Partial<PendingOrder>) {
    Object.assign(this, props);
  }

  @PrimaryColumn()
  id!: string;

  @Column()
  timestamp!: Date;

  @Column()
  account!: string;

  @Column()
  clientId!: string;
}
```

`account` and `clientId` are substrate account public keys, and for better compatibility these values
are saved in the DB as a Hex value of the public key. API resolvers can receive `account` and `clientId` in any format and will
automatically convert them to the Hex format.

---

### PendingOrder API

#### The Calls Authorization Flow

All mutation are protected by Authorization tokens. This is based on asymmetric encryption and the
[Access Control feature](https://docs.subsquid.io/graphql-api/authorization/)
from the Subsquid framework.

The Seller Squid, and each client application which works with the Squid's restricted API, have
their own substrate accounts for encoding/decoding auth token message with the asymmetric encryption
approach. Public and secret keys of these accounts are generated in the `ED25519` crypto type from mnemonic phrases.
It's **important** to understand, as in the Squid's whitelist (with the `Client-Id` header), that the encode/decode functions
need to use exactly the `ED25519` type of keys, but not `SR25519` keys, which we can find in the wallet dapp after the
creation process.

For access to restricted calls, a client application must be added to the clients whitelist in the
Squid (the public key of the client's account in any format should be added to the whitelist).
To each mutation request the client app must add two headers:

- `Authorization: Bearer <SignedTokenMessage>` - `SignedTokenMessage` is a current millisecond timestamp in the UTC timezone
  that is turned into a string and encoded with the below encode function:

```typescript
import { stringToU8a, u8aToHex } from '@polkadot/util';
import { naclSeal } from '@polkadot/util-crypto';

const messageSigned = naclSeal(
  stringToU8a('1680869251230'),
  clientAccSecretKey,
  sellerSquidAccPublicKey, // exposed in query "sellerConfigInfo.sellerApiAuthTokenManager"
  nonce // hardcoded 24 bytes Uint8Array with value "111"
);

const signedTokenMessage = u8aToHex(signedToken.sealed);
```

The timestamp will be decoded in the Seller Squid and the token will be validated by a bunch of parameters,
especially by expiration time. If the timestamp of token is older than the expiration time (which is configured in the env variables
of the Squid), then the mutation will be rejected as the token is expired.

- `Client-Id` - The client application account's `ED25519` public key in any format, which will be used for
  decoding of the token message that is in the `Authorization` header.

```typescript
const decodedTimestamp = naclOpen(
  hexToU8a(signedTokenMessage),
  nonce, // hardcoded 24 bytes Uint8Array with value "111"
  clientId,
  sellerSquidAccSecretKey
);
```

---

The implementation of custom API calls can be found [here](./src/server-extension/resolvers/pendingOrders.ts).

Data types for custom API calls can be found [here](./src/server-extension/model/pendingOrder.model.ts)

X-Seller has custom API queries/mutations such as:

#### _Mutations_

- `createPendingOrder(account, domain)` - create a PendingOrder entity. The new entity will have the
  `clientId` field which will be automatically filled with the value from the `Client-Id` header of the mutation request.
  - _account_ - the owner/initiator of the particular order;
  - _domain_ - the domain name that was booked by `account`. This value will be used as a new unique ID value
    for a new PendingOrder entity in the DB, so that creation of duplicate PendingOrder entities is
    impossible.

```graphql
mutation CreatePendingOrder($domain: String!, $account: String!) {
  createPendingOrder(account: $account, domain: $domain)
}
```

- `deletePendingOrderById(id)` - delete a PendingOrder entity. The client application can delete only
  those entities which were created by that particular client. Validation is based on the `Client-Id` header
  and `clientId` field in each PendingOrder entity.
  - _id_ - in practice, this is a domain name which has been booked, and its name has been used as the
    id of a PendingOrder entity.

```graphql
mutation DeletePendingOrderById($id: String!) {
  deletePendingOrderById(id: $id)
}
```

---

#### _Queries_

- `getPendingOrdersByIds(ids)` - get PendingOrder entities by a list of ids (domain names).
  - _ids_ - an array of the ids of entities === domain names

```graphql
query GetPendingOrdersByIds($ids: [String!]!) {
  getPendingOrdersByIds(ids: $ids) {
    orders {
      id
      account
      clientId
      timestamp
    }
  }
}
```

- `getPendingOrdersByAccount(account)` - get PendingOrder entities by account.
  - _account_ - the substrate account public address of the owner of a PendingOrder entity.
    This can be provided in any format, even in Hex.

```graphql
query GetPendingOrdersByAccount($account: String!) {
  getPendingOrdersByAccount(account: $account) {
    orders {
      id
      account
      clientId
      timestamp
    }
  }
}
```

---

### Garbage collector for expired PendingOrders

The Seller Squid has implemented functionality for automatically removing all Pending Orders
that are older than the PendingOrder expiration time. The expiration time is configured in the Squid's new env variables
in minutes, but exposed to clients via `sellerConfigInfo.dmnRegPendingOrderExpTime` in milliseconds.
