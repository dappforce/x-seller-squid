import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Username} from "./username.model"
import {UsernameRegistration} from "./usernameRegistration.model"
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

    @OneToMany_(() => UsernameRegistration, e => e.registrant)
    usernameRegPayments!: UsernameRegistration[]

    @OneToMany_(() => EnergyBox, e => e.owner)
    energyBoxes!: EnergyBox[]
}
