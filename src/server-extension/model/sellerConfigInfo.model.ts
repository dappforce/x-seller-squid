import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SellerConfigInfo {
  @Field(() => String, {nullable: false})
  sellerChain!: string

  @Field(() => Number, {nullable: true})
  sellerChainPrefix!: number | null

  @Field(() => String, {nullable: false})
  domainHostChain!: string

  @Field(() => Number, {nullable: true})
  domainHostChainPrefix!: number | null

  @Field(() => String, {nullable: false})
  token!: string

  @Field(() => String, {nullable: false})
  remarkProtName!: string

  @Field(() => String, {nullable: false})
  remarkProtVersion!: string


  constructor(props?: Partial<SellerConfigInfo>) {
    Object.assign(this, props)
  }
}