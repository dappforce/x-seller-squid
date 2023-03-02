import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Username} from "./username.model"
import {UsernameRegistrationOrder} from "./usernameRegistrationOrder.model"
import {EnergyBox} from "./energyBox.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @OneToMany_(() => Username, e => e.owner)
    usernames!: Username[]

    @OneToMany_(() => UsernameRegistrationOrder, e => e.registrant)
    unameRegistrationOrders!: UsernameRegistrationOrder[]

    @OneToMany_(() => EnergyBox, e => e.owner)
    energyBoxes!: EnergyBox[]
}
