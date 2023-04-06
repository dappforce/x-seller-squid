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
  account!: string;

  @Column()
  clientId!: string;
}
