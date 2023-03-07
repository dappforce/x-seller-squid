import assert from "assert"
import * as marshal from "./marshal"

export class NrgRemarkContent {
    private _opId!: string
    private _target!: string
    private _energyAmount!: string
    private _token!: string

    constructor(props?: Partial<Omit<NrgRemarkContent, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._opId = marshal.string.fromJSON(json.opId)
            this._target = marshal.string.fromJSON(json.target)
            this._energyAmount = marshal.string.fromJSON(json.energyAmount)
            this._token = marshal.string.fromJSON(json.token)
        }
    }

    get opId(): string {
        assert(this._opId != null, 'uninitialized access')
        return this._opId
    }

    set opId(value: string) {
        this._opId = value
    }

    get target(): string {
        assert(this._target != null, 'uninitialized access')
        return this._target
    }

    set target(value: string) {
        this._target = value
    }

    get energyAmount(): string {
        assert(this._energyAmount != null, 'uninitialized access')
        return this._energyAmount
    }

    set energyAmount(value: string) {
        this._energyAmount = value
    }

    get token(): string {
        assert(this._token != null, 'uninitialized access')
        return this._token
    }

    set token(value: string) {
        this._token = value
    }

    toJSON(): object {
        return {
            opId: this.opId,
            target: this.target,
            energyAmount: this.energyAmount,
            token: this.token,
        }
    }
}
