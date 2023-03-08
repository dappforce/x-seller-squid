import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"

@Entity_()
export class Transfer {
    constructor(props?: Partial<Transfer>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    blockHash!: string

    @Column_("text", {nullable: false})
    extrinsicHash!: string

    @Column_("int4", {nullable: false})
    eventIndex!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Column_("text", {nullable: true})
    token!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    from!: Account

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    to!: Account

    @Column_("text", {nullable: true})
    addressChainPrefix!: string | undefined | null
}
