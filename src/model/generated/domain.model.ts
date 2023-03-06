import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Account} from "./account.model"
import {DomainRegistrationOrder} from "./domainRegistrationOrder.model"

@Entity_()
export class Domain {
    constructor(props?: Partial<Domain>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account | undefined | null

    @OneToMany_(() => DomainRegistrationOrder, e => e.domain)
    domainRegistrationOrders!: DomainRegistrationOrder[]

    @Column_("timestamp with time zone", {nullable: true})
    createdAt!: Date | undefined | null

    @Column_("int4", {nullable: true})
    createdAtBlock!: number | undefined | null
}
