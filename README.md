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

Current squid has custom API calls upon main API which is based on [schema.graphql](./schema.graphql).
Custom resolvers are implemented regarding [Subsquid's recommendations.](https://docs.subsquid.io/graphql-api/custom-resolvers/)

### PendingOrder entity

As Pending Orders must be available for all clients immediately after creation, so we cannot use
native Squid Store functions and its native DB (because Squid saves data to DB by one transaction which commits in
the end of each batch. This provides pretty big delay in accessibility of custom data for fetch by other clients).

As result, Pending Orders are managed by [ServiceLocalStorage](./src/serviceLocalStorageClient/client.ts) client
which based on TypeORM + SQLite. It's fast and lightweight solution.

#### Structure of PendingOrder entity

Source code can be found [here](./src/serviceLocalStorageClient/model/pendingOrder.ts).

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

Values `account` and `clientId` - account public key and for better compatibility these values
are saved in DB as Hex value of public key. API resolvers can receive address in any format and
automatically converts to Hex format.

---

### PendingOrder API

#### Calls authorization flow

All mutation are protected by Authorization tokens. This feature is based on
[Access Control feature](https://docs.subsquid.io/graphql-api/authorization/)
from Subsquid framework and asymmetric encryption.

Seller squid and each client application which works with squid's restricted API has
its own substrate account for decoding/encoding auth token message with asymmetric encryption
approach. Public and secret keys of these accounts are generated in `ED25519` crypto type from mnemonics.
It's **important** to understand, as in squid's whitelist, `Client-Id` header, encode/decode functions
we need to use exactly `ED25519` type of keys but not `SR25519` keys, which we can find in the wallet dapp after
creation process.

For access to restricted calls, a client application must be added to clients whitelist in the
squid (public key of client's account in any format should be added to the whitelist).
To each mutation request client app must must add 2 headers:

- `Authorization: Bearer <SignedTokenMessage>` - `SignedTokenMessage` is a current timestamp
  in milliseconds in UTC timezone which is stringified and encoded with such encode function as below:

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

Timestamp will be decoded in Seller squid and token will be validated by bunch of parameters
and especially by expiration time. If timestamp in token is older to expiration time (configured in env variables
of the squid), than mutation will be rejected as token is expired.

- `Client-Id` - client application account `ED25519` public key in any format, which will be used for
  decoding of the token message in `Authorization` header.

```typescript
const decodedTimestamp = naclOpen(
  hexToU8a(signedTokenMessage),
  nonce, // hardcoded 24 bytes Uint8Array with value "111"
  clientId,
  sellerSquidAccSecretKey
);
```

---

Custom API calls implementation can be found [here](./src/server-extension/resolvers/pendingOrders.ts).

Custom API calls data types can be found [here](./src/server-extension/model/pendingOrder.model.ts)

X-Seller has such custom API queries/mutations as:

#### _Mutations_

- `createPendingOrder(account, domain)` - create PendingOrder entity. New entity will have field
  `clientId` which will be automatically filled by value from `Clien-Id` header of mutation request.
  - _account_ - owner/initiator of the particular order;
  - _domain_ - domain name which is booked by `account`. This value will be used for a new
    PendingOrder entity as unique ID value. So creation of duplicates of PendingOrders are
    impossible.

```graphql
mutation CreatePendingOrder($domain: String!, $account: String!) {
  createPendingOrder(account: $account, domain: $domain)
}
```

- `deletePendingOrderById(id)` - delete PendingOrder entity. Client Application can delete only
  that entities which were created by this particular client. Validation based on `Client-Id` header
  and `clientId` field in each PendingOrder entity.
  - _id_ - in practice it is a domain name which has been booked and its name has been used as
    id of PendingOrder entity.

```graphql
mutation DeletePendingOrderById($id: String!) {
  deletePendingOrderById(id: $id)
}
```

---

#### _Queries_

- `getPendingOrdersByIds(ids)` - get PendingOrder entities by list of ids (domain names).
  - _ids_ - array of entities ids === domain names

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
  - _account_ - account public address of owner of PendingOrder entity.
    Can be provided in any format, even in Hex.

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

Seller squid has implemented functionality for automatic removing all Pending Orders,
which are older than PendinOrder expiration time which is configured in the squid env variables
and exposed to clients via `sellerConfigInfo.dmnRegPendingOrderExpTime` in milliseconds.
In opposite of exposed value in millisecond, value in squid's env variable must be provided in
minutes for better DevX.
