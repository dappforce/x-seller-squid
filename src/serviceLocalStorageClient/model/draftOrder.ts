import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class DraftOrder {
  constructor(props?: Partial<DraftOrder>) {
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
