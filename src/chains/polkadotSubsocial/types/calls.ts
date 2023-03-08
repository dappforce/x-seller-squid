import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'

export class SystemRemarkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - Base Weight: 0.665 µs, independent of remark length.
     *  - No DB operations.
     *  # </weight>
     */
    get isV0(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  - Base Weight: 0.665 µs, independent of remark length.
     *  - No DB operations.
     *  # </weight>
     */
    get asV0(): {remark: Uint8Array} {
        assert(this.isV0)
        return this._chain.decodeCall(this.call)
    }
}
