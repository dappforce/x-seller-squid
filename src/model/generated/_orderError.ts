import assert from "assert"
import * as marshal from "./marshal"

export class OrderError {
    private _status!: number | undefined | null
    private _reason!: string | undefined | null

    constructor(props?: Partial<Omit<OrderError, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._status = json.status == null ? undefined : marshal.int.fromJSON(json.status)
            this._reason = json.reason == null ? undefined : marshal.string.fromJSON(json.reason)
        }
    }

    get status(): number | undefined | null {
        return this._status
    }

    set status(value: number | undefined | null) {
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
            status: this.status,
            reason: this.reason,
        }
    }
}
