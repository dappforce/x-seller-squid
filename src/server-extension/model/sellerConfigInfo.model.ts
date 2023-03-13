import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Token {
  @Field((type) => String, { nullable: true })
  name!: string;

  @Field((type) => Number, { nullable: true })
  decimal!: number;
}

@ObjectType()
export class SellerConfigInfo {
  @Field(() => String, { nullable: false })
  sellerChain!: string;

  @Field(() => Number, { nullable: true })
  sellerChainPrefix!: number | null;

  @Field(() => String, { nullable: false })
  domainHostChain!: string;

  @Field(() => Number, { nullable: true })
  domainHostChainPrefix!: number | null;

  @Field(() => Token, { nullable: false })
  sellerToken!: Token;

  @Field(() => String, { nullable: false })
  remarkProtName!: string;

  @Field(() => String, { nullable: false })
  remarkProtVersion!: string;

  @Field(() => BigInt, { nullable: false })
  domainRegistrationPriceFixed!: bigint;

  constructor(props?: Partial<SellerConfigInfo>) {
    Object.assign(this, props);
  }
}
