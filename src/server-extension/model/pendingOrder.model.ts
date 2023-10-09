import { ArgsType, Field, InputType, ObjectType } from 'type-graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class PendingOrderData {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  createdByAccount!: string;

  @Field(() => String, { nullable: false })
  signer!: string;

  @Field(() => String, { nullable: true })
  target?: string;

  @Field(() => String, { nullable: false })
  destination!: string;

  @Field(() => String, { nullable: false })
  clientId!: string;

  @Field(() => Boolean, { nullable: true })
  purchaseInterrupted?: boolean;

  @Field(() => Boolean, { nullable: true })
  purchaseTxStarted?: boolean;

  @Field(() => Date, { nullable: false })
  timestamp!: Date;

  constructor(props?: Partial<PendingOrderData>) {
    Object.assign(this, props);
  }
}

@ObjectType()
export class PendingOrdersList {
  @Field(() => [PendingOrderData], { nullable: false })
  orders!: PendingOrderData[];

  constructor(props?: Partial<PendingOrdersList>) {
    Object.assign(this, props);
  }
}

@ArgsType()
export class GetPendingOrdersByIdsArgs {
  @IsString({ each: true })
  @Field(() => [String!]!, {
    nullable: false,
    description: 'Pending Order domain names list.'
  })
  ids!: string[];
}

@ArgsType()
export class UpdatePendingOrderPurchaseStatusArgs {
  @Field(() => String!, { nullable: false })
  id!: string;

  @Field(() => Boolean!, { nullable: true })
  interrupted?: boolean;

  @Field(() => Boolean!, { nullable: true })
  txStarted?: boolean;
}
