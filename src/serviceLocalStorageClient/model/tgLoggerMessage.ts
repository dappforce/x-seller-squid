import {
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Column,
  ObjectIdColumn
} from 'typeorm';

@Entity()
export class TgLoggerMessage {
  constructor(props?: Partial<TgLoggerMessage>) {
    Object.assign(this, props);
  }

  @ObjectIdColumn()
  _id!: string;

  @PrimaryColumn()
  id!: string;

  @Column()
  tgMsgId!: number;

  @Column()
  tgMsgText!: string;

  @Column()
  timestamp?: number;
}
