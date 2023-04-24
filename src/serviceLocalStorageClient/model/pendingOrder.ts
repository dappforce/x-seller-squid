import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class PendingOrder {
  constructor(props?: Partial<PendingOrder>) {
    Object.assign(this, props);
  }

  @PrimaryColumn()
  id!: string;

  @Column()
  timestamp!: Date;

  @Column()
  createdByAccount!: string;

  @Column()
  signer!: string;

  @Column()
  target!: string;

  @Column()
  destination!: string;

  @Column()
  purchaseInterrupted!: boolean;

  @Column()
  clientId!: string;
}
