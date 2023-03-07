import assert from "assert"
import * as marshal from "./marshal"

export class DmnRegRemarkContent {
    private _opId!: string
    private _target!: string
    private _domainName!: string
    private _token!: string

    constructor(props?: Partial<Omit<DmnRegRemarkContent, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._opId = marshal.string.fromJSON(json.opId)
            this._target = marshal.string.fromJSON(json.target)
            this._domainName = marshal.string.fromJSON(json.domainName)
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

    get domainName(): string {
        assert(this._domainName != null, 'uninitialized access')
        return this._domainName
    }

    set domainName(value: string) {
        this._domainName = value
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
            domainName: this.domainName,
            token: this.token,
        }
    }
}
