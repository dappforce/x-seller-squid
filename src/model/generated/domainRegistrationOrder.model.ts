import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Domain} from "./domain.model"
import {Transfer} from "./transfer.model"
import {OrderRequestStatus} from "./_orderRequestStatus"
import {OrderRefundStatus} from "./_orderRefundStatus"
import {DmnRegRemark} from "./_dmnRegRemark"
import {OrderError} from "./_orderError"

@Entity_()
export class DomainRegistrationOrder {
    constructor(props?: Partial<DomainRegistrationOrder>) {
        Object.assign(this, props)
    }

    /**
     * Attempt ID from remark and it's the same value for all purchase, confirmation and refund(if it's existing) remarks
     */
    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    blockHashSellerChain!: string | undefined | null

    @Column_("text", {nullable: true})
    blockHashUnameHostChain!: string | undefined | null

    @Column_("text", {nullable: true})
    confirmedBlockHashSellerChain!: string | undefined | null

    @Column_("text", {nullable: true})
    confirmedRemarkCallId!: string | undefined | null

    @Column_("text", {nullable: true})
    refundBlockHashSellerChain!: string | undefined | null

    @Column_("text", {nullable: true})
    refundRemarkCallId!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    target!: Account

    @Index_()
    @ManyToOne_(() => Domain, {nullable: true})
    domain!: Domain

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    price!: bigint

    /**
     * TODO should be reviewed
     */
    @Column_("text", {nullable: false})
    token!: string

    @Index_()
    @ManyToOne_(() => Transfer, {nullable: true})
    purchaseTx!: Transfer | undefined | null

    @Index_()
    @ManyToOne_(() => Transfer, {nullable: true})
    refundTx!: Transfer | undefined | null

    @Column_("varchar", {length: 10, nullable: true})
    status!: OrderRequestStatus | undefined | null

    @Column_("varchar", {length: 9, nullable: true})
    refundStatus!: OrderRefundStatus | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new DmnRegRemark(undefined, obj)}, nullable: true})
    purchaseRmrk!: DmnRegRemark | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new DmnRegRemark(undefined, obj)}, nullable: true})
    confirmationRmrk!: DmnRegRemark | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new DmnRegRemark(undefined, obj)}, nullable: true})
    refundRmrk!: DmnRegRemark | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new OrderError(undefined, obj)}, nullable: true})
    errorRegistration!: OrderError | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new OrderError(undefined, obj)}, nullable: true})
    errorRefund!: OrderError | undefined | null
}
