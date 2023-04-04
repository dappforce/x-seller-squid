import { Field, ObjectType } from 'type-graphql';
import { Column } from 'typeorm';

@ObjectType()
export class DraftOrderData {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  timestamp!: Date;

  @Field(() => String, { nullable: false })
  account!: string;

  @Field(() => String, { nullable: false })
  clientId!: string;

  constructor(props?: Partial<DraftOrderData>) {
    Object.assign(this, props);
  }
}

@ObjectType()
export class DraftOrdersAll {
  @Field(() => [DraftOrderData], { nullable: false })
  orders!: DraftOrderData[];

  constructor(props?: Partial<DraftOrdersAll>) {
    Object.assign(this, props);
  }
}
