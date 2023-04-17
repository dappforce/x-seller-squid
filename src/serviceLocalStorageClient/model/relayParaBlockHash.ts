import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RelayParaBlockRel {
  constructor(props?: Partial<RelayParaBlockRel>) {
    Object.assign(this, props);
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  paraBlockNumber!: number;

  @Column()
  paraBlockHash!: string;

  @Column({ nullable: true })
  relayBlockNumber?: number;
}
