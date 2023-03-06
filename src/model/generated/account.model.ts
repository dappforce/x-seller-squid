import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Domain} from "./domain.model"
import {DomainRegistrationOrder} from "./domainRegistrationOrder.model"
import {EnergyBox} from "./energyBox.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @OneToMany_(() => Domain, e => e.owner)
    domains!: Domain[]

    @OneToMany_(() => DomainRegistrationOrder, e => e.target)
    domainRegistrationOrders!: DomainRegistrationOrder[]

    @OneToMany_(() => EnergyBox, e => e.owner)
    energyBoxes!: EnergyBox[]
}
