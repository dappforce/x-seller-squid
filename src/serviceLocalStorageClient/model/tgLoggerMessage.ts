import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class TgLoggerMessage {
  constructor(props?: Partial<TgLoggerMessage>) {
    Object.assign(this, props);
  }

  @PrimaryColumn()
  id!: string;

  @Column()
  tgMsgId!: number;

  @Column()
  tgMsgText!: string;

  @Column()
  timestamp?: number;
}
