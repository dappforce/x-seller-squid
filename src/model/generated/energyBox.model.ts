import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Transfer} from "./transfer.model"
import {RegistrationStatus} from "./_registrationStatus"
import {RefundStatus} from "./_refundStatus"

@Entity_()
export class EnergyBox {
    constructor(props?: Partial<EnergyBox>) {
        Object.assign(this, props)
    }

    /**
     * Attempt ID from remark and it's the same value for all generation, confirmation and refund(if it's existing) remarks
     */
    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    blockHashSellerChain!: string | undefined | null

    @Column_("text", {nullable: true})
    blockHashEnergyHostChain!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    energyAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    boxPrice!: bigint

    /**
     * TODO should be reviewed
     */
    @Column_("text", {nullable: false})
    currency!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account | undefined | null

    @Index_()
    @ManyToOne_(() => Transfer, {nullable: true})
    purchaseTx!: Transfer | undefined | null

    @Index_()
    @ManyToOne_(() => Transfer, {nullable: true})
    refundTx!: Transfer | undefined | null

    @Column_("varchar", {length: 10, nullable: true})
    status!: RegistrationStatus | undefined | null

    @Column_("varchar", {length: 9, nullable: true})
    refundStatus!: RefundStatus | undefined | null

    @Column_("jsonb", {nullable: true})
    generationRmrk!: unknown | undefined | null

    @Column_("jsonb", {nullable: true})
    confirmationRmrk!: unknown | undefined | null

    @Column_("jsonb", {nullable: true})
    refundRmrk!: unknown | undefined | null
}
