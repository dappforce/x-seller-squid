import assert from "assert"
import * as marshal from "./marshal"

export class OrderError {
    private _module!: string | undefined | null
    private _status!: string | undefined | null
    private _reason!: string | undefined | null

    constructor(props?: Partial<Omit<OrderError, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._module = json.module == null ? undefined : marshal.string.fromJSON(json.module)
            this._status = json.status == null ? undefined : marshal.string.fromJSON(json.status)
            this._reason = json.reason == null ? undefined : marshal.string.fromJSON(json.reason)
        }
    }

    get module(): string | undefined | null {
        return this._module
    }

    set module(value: string | undefined | null) {
        this._module = value
    }

    get status(): string | undefined | null {
        return this._status
    }

    set status(value: string | undefined | null) {
        this._status = value
    }

    get reason(): string | undefined | null {
        return this._reason
    }

    set reason(value: string | undefined | null) {
        this._reason = value
    }

    toJSON(): object {
        return {
            module: this.module,
            status: this.status,
            reason: this.reason,
        }
    }
}
