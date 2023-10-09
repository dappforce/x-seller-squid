import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class PendingOrder {
  constructor(props?: Partial<PendingOrder>) {
    Object.assign(this, props);
  }

  @ObjectIdColumn()
  _id!: string;

  @PrimaryColumn()
  id!: string;

  @Column()
  timestamp!: Date;

  @Column()
  createdByAccount!: string;

  @Column()
  signer!: string;

  @Column({ nullable: true })
  target?: string;

  @Column()
  destination!: string;

  @Column({ nullable: true })
  purchaseInterrupted!: boolean;

  @Column({ nullable: true })
  purchaseTxStarted!: boolean;

  @Column({ nullable: true })
  clientId!: string;
}
