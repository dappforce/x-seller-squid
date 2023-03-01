import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v9190 from './v9190'
import * as v9220 from './v9220'
import * as v9250 from './v9250'
import * as v9300 from './v9300'
import * as v9310 from './v9310'
import * as v9321 from './v9321'
import * as v9370 from './v9370'

export class AssignedSlotsAssignPermParachainSlotCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssignedSlots.assign_perm_parachain_slot')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Assign a permanent parachain slot and immediately create a lease for it.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('AssignedSlots.assign_perm_parachain_slot') === '0fb20b5afc6a2830162f8daea8abc92a50d6411d977d5e83e205bdeb2dcd6598'
    }

    /**
     * Assign a permanent parachain slot and immediately create a lease for it.
     */
    get asV9190(): {id: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class AssignedSlotsAssignTempParachainSlotCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssignedSlots.assign_temp_parachain_slot')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Assign a temporary parachain slot. The function tries to create a lease for it
     * immediately if `SlotLeasePeriodStart::Current` is specified, and if the number
     * of currently active temporary slots is below `MaxTemporarySlotPerLeasePeriod`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('AssignedSlots.assign_temp_parachain_slot') === '5b9a8d8ada8f003c5e19777e0e5305a363e6405ca8fca5f42ad9638e0b01552a'
    }

    /**
     * Assign a temporary parachain slot. The function tries to create a lease for it
     * immediately if `SlotLeasePeriodStart::Current` is specified, and if the number
     * of currently active temporary slots is below `MaxTemporarySlotPerLeasePeriod`.
     */
    get asV9190(): {id: number, leasePeriodStart: v9190.SlotLeasePeriodStart} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class AssignedSlotsUnassignParachainSlotCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'AssignedSlots.unassign_parachain_slot')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unassign a permanent or temporary parachain slot
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('AssignedSlots.unassign_parachain_slot') === '0fb20b5afc6a2830162f8daea8abc92a50d6411d977d5e83e205bdeb2dcd6598'
    }

    /**
     * Unassign a permanent or temporary parachain slot
     */
    get asV9190(): {id: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class AuctionsBidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Auctions.bid')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make a new bid from an account (including a parachain account) for deploying a new
     * parachain.
     * 
     * Multiple simultaneous bids from the same bidder are allowed only as long as all active
     * bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
     * 
     * - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
     * funded by) the same account.
     * - `auction_index` is the index of the auction to bid on. Should just be the present
     * value of `AuctionCounter`.
     * - `first_slot` is the first lease period index of the range to bid on. This is the
     * absolute lease period index value, not an auction-specific offset.
     * - `last_slot` is the last lease period index of the range to bid on. This is the
     * absolute lease period index value, not an auction-specific offset.
     * - `amount` is the amount to bid to be held as deposit for the parachain should the
     * bid win. This amount is held throughout the range.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Auctions.bid') === '875d3f461aae7e3ba782bc8174e50928c136bb1285ec107fb43dee7de4f50f54'
    }

    /**
     * Make a new bid from an account (including a parachain account) for deploying a new
     * parachain.
     * 
     * Multiple simultaneous bids from the same bidder are allowed only as long as all active
     * bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
     * 
     * - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
     * funded by) the same account.
     * - `auction_index` is the index of the auction to bid on. Should just be the present
     * value of `AuctionCounter`.
     * - `first_slot` is the first lease period index of the range to bid on. This is the
     * absolute lease period index value, not an auction-specific offset.
     * - `last_slot` is the last lease period index of the range to bid on. This is the
     * absolute lease period index value, not an auction-specific offset.
     * - `amount` is the amount to bid to be held as deposit for the parachain should the
     * bid win. This amount is held throughout the range.
     */
    get asV9190(): {para: number, auctionIndex: number, firstSlot: number, lastSlot: number, amount: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class AuctionsCancelAuctionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Auctions.cancel_auction')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel an in-progress auction.
     * 
     * Can only be called by Root origin.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Auctions.cancel_auction') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Cancel an in-progress auction.
     * 
     * Can only be called by Root origin.
     */
    get asV9190(): null {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class AuctionsNewAuctionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Auctions.new_auction')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a new auction.
     * 
     * This can only happen when there isn't already an auction in progress and may only be
     * called by the root origin. Accepts the `duration` of this auction and the
     * `lease_period_index` of the initial lease period of the four that are to be auctioned.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Auctions.new_auction') === 'f9c6104e2d8ee4a5650bf6b22307030d44c7c7014eb5b79c3fdc26e37431996c'
    }

    /**
     * Create a new auction.
     * 
     * This can only happen when there isn't already an auction in progress and may only be
     * called by the root origin. Accepts the `duration` of this auction and the
     * `lease_period_index` of the initial lease period of the four that are to be auctioned.
     */
    get asV9190(): {duration: number, leasePeriodIndex: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class AuthorshipSetUnclesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Authorship.set_uncles')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Provide a set of uncles.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
    }

    /**
     * Provide a set of uncles.
     */
    get asV9190(): {newUncles: v9190.Header[]} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BabePlanConfigChangeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.plan_config_change')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Plan an epoch config change. The epoch config change is recorded and will be enacted on
     * the next call to `enact_epoch_change`. The config will be activated one epoch after.
     * Multiple calls to this method will replace any existing planned config change that had
     * not been enacted yet.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Babe.plan_config_change') === '445d07b89db2246e1bb7a27672210d26caa40906751dc15e2e91036d19c646c3'
    }

    /**
     * Plan an epoch config change. The epoch config change is recorded and will be enacted on
     * the next call to `enact_epoch_change`. The config will be activated one epoch after.
     * Multiple calls to this method will replace any existing planned config change that had
     * not been enacted yet.
     */
    get asV9190(): {config: v9190.NextConfigDescriptor} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BabeReportEquivocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.report_equivocation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Babe.report_equivocation') === '40d799eb32ff6f2d8c0e11e555d627ab95ad001691371ef039423f40d5d53b2b'
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     */
    get asV9190(): {equivocationProof: v9190.EquivocationProof, keyOwnerProof: v9190.MembershipProof} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BabeReportEquivocationUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Babe.report_equivocation_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Babe.report_equivocation_unsigned') === '40d799eb32ff6f2d8c0e11e555d627ab95ad001691371ef039423f40d5d53b2b'
    }

    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    get asV9190(): {equivocationProof: v9190.EquivocationProof, keyOwnerProof: v9190.MembershipProof} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get asV9190(): {source: v9190.MultiAddress, dest: v9190.MultiAddress, value: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceUnreserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_unreserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asV9190(): {who: v9190.MultiAddress, amount: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.set_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also alter the total issuance of the system (`TotalIssuance`) appropriately.
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === 'beb82909d38c015bc075ff8b107e47a02f8772bf5cf681d6cd84ef685e448a8f'
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also alter the total issuance of the system (`TotalIssuance`) appropriately.
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     */
    get asV9190(): {who: v9190.MultiAddress, newFree: bigint, newReserved: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     * 
     * # <weight>
     * - Dependent on arguments but not critical, given proper implementations for input config
     *   types. See related functions below.
     * - It contains a limited number of reads and writes internally and no complex
     *   computation.
     * 
     * Related functions:
     * 
     *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *   - Transferring balances to accounts that did not exist before will cause
     *     `T::OnNewAccount::on_new_account` to be called.
     *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *     that the transfer will not kill the origin account.
     * ---------------------------------
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Balances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     * 
     * # <weight>
     * - Dependent on arguments but not critical, given proper implementations for input config
     *   types. See related functions below.
     * - It contains a limited number of reads and writes internally and no complex
     *   computation.
     * 
     * Related functions:
     * 
     *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *   - Transferring balances to accounts that did not exist before will cause
     *     `T::OnNewAccount::on_new_account` to be called.
     *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *     that the transfer will not kill the origin account.
     * ---------------------------------
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    get asV9190(): {dest: v9190.MultiAddress, value: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '9c94c2ca9979f6551af6e123fb6b6ba14d026f862f9a023706f8f88c556b355f'
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    get asV9190(): {dest: v9190.MultiAddress, keepAlive: boolean} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    get asV9190(): {dest: v9190.MultiAddress, value: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesAcceptCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.accept_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV9300(): {bountyId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesApproveBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.approve_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve a bounty proposal. At a later time, the bounty will be funded and become active
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Bounties.approve_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Approve a bounty proposal. At a later time, the bounty will be funded and become active
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV9300(): {bountyId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesAwardBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.award_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
     * after a delay.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to award.
     * - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Bounties.award_bounty') === 'cfa73dafdcbe89b3b4e24bfc41cf4f3b1fcd9527b052ecc6549b6ac07b965606'
    }

    /**
     * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
     * after a delay.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to award.
     * - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV9300(): {bountyId: number, beneficiary: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesClaimBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.claim_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim the payout from an awarded bounty after payout delay.
     * 
     * The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     * - `bounty_id`: Bounty ID to claim.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Bounties.claim_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Claim the payout from an awarded bounty after payout delay.
     * 
     * The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     * - `bounty_id`: Bounty ID to claim.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV9300(): {bountyId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesCloseBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.close_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a proposed or active bounty. All the funds will be sent to treasury and
     * the curator deposit will be unreserved if possible.
     * 
     * Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     * - `bounty_id`: Bounty ID to cancel.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Bounties.close_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Cancel a proposed or active bounty. All the funds will be sent to treasury and
     * the curator deposit will be unreserved if possible.
     * 
     * Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     * - `bounty_id`: Bounty ID to cancel.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV9300(): {bountyId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesExtendBountyExpiryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.extend_bounty_expiry')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Extend the expiry time of an active bounty.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to extend.
     * - `remark`: additional information.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Bounties.extend_bounty_expiry') === '710d6b76ffcee45bd9bffc1f299fa0b621450769559963379fa259c0f427f1bb'
    }

    /**
     * Extend the expiry time of an active bounty.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to extend.
     * - `remark`: additional information.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV9300(): {bountyId: number, remark: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesProposeBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.propose_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose a new bounty.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     * or slashed when rejected.
     * 
     * - `curator`: The curator account whom will manage this bounty.
     * - `fee`: The curator fee.
     * - `value`: The total payment amount of this bounty, curator fee included.
     * - `description`: The description of this bounty.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Bounties.propose_bounty') === '6a012b4069a991972d0d3268cb20dfba3163919c325c7ebbe980b2dc15f1b1f5'
    }

    /**
     * Propose a new bounty.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     * or slashed when rejected.
     * 
     * - `curator`: The curator account whom will manage this bounty.
     * - `fee`: The curator fee.
     * - `value`: The total payment amount of this bounty, curator fee included.
     * - `description`: The description of this bounty.
     */
    get asV9300(): {value: bigint, description: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesProposeCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.propose_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Assign a curator to a funded bounty.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Bounties.propose_curator') === 'db115713847ce9db3eac62037c4aefcca595bcd9aa876776d8fba64491d881d3'
    }

    /**
     * Assign a curator to a funded bounty.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV9300(): {bountyId: number, curator: v9300.MultiAddress, fee: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesUnassignCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.unassign_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Bounties.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * # <weight>
     * - O(1).
     * # </weight>
     */
    get asV9300(): {bountyId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoGrandpaInitializeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoGrandpa.initialize')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Bootstrap the bridge pallet with an initial header and authority set from which to sync.
     * 
     * The initial configuration provided does not need to be the genesis header of the bridged
     * chain, it can be any arbitrary header. You can also provide the next scheduled set
     * change if it is already know.
     * 
     * This function is only allowed to be called from a trusted origin and writes to storage
     * with practically no checks in terms of the validity of the data. It is important that
     * you ensure that valid data is being passed in.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoGrandpa.initialize') === '02735bc3c56ac8d0fc9812dc994727345a80975c5fc4104db04bcd5d9934822a'
    }

    /**
     * Bootstrap the bridge pallet with an initial header and authority set from which to sync.
     * 
     * The initial configuration provided does not need to be the genesis header of the bridged
     * chain, it can be any arbitrary header. You can also provide the next scheduled set
     * change if it is already know.
     * 
     * This function is only allowed to be called from a trusted origin and writes to storage
     * with practically no checks in terms of the validity of the data. It is important that
     * you ensure that valid data is being passed in.
     */
    get asV9190(): {initData: v9190.InitializationData} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoGrandpaSetOperationalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoGrandpa.set_operational')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Halt or resume all pallet operations.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoGrandpa.set_operational') === 'bddcd3dc7a87604f28ed263ceba618d54b98b2330d7a30cb36c3e39a9ed8449e'
    }

    /**
     * Halt or resume all pallet operations.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get asV9190(): {operational: boolean} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoGrandpaSetOwnerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoGrandpa.set_owner')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change `PalletOwner`.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoGrandpa.set_owner') === '68ac74f07a38a8af1d52e491c1aa969d4de4524e2f60f6a4f61a8a7350bc913d'
    }

    /**
     * Change `PalletOwner`.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get asV9190(): {newOwner: (Uint8Array | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoGrandpaSubmitFinalityProofCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoGrandpa.submit_finality_proof')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Verify a target header is finalized according to the given finality proof.
     * 
     * It will use the underlying storage pallet to fetch information about the current
     * authorities and best finalized header in order to verify that the header is finalized.
     * 
     * If successful in verification, it will write the target header to the underlying storage
     * pallet.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoGrandpa.submit_finality_proof') === 'afddf1621094ebbf4d6fe738cc3daf0ef5ba90c5494230ef755d02b641452981'
    }

    /**
     * Verify a target header is finalized according to the given finality proof.
     * 
     * It will use the underlying storage pallet to fetch information about the current
     * authorities and best finalized header in order to verify that the header is finalized.
     * 
     * If successful in verification, it will write the target header to the underlying storage
     * pallet.
     */
    get asV9190(): {finalityTarget: v9190.Header, justification: v9190.GrandpaJustification} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoMessagesIncreaseMessageFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoMessages.increase_message_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Pay additional fee for the message.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoMessages.increase_message_fee') === 'f4cd7424c97341dea5dc9c0f598ee8cdfbf2bb35224942edb5bc43fb7d57b751'
    }

    /**
     * Pay additional fee for the message.
     */
    get asV9190(): {laneId: Uint8Array, nonce: bigint, additionalFee: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoMessagesReceiveMessagesDeliveryProofCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoMessages.receive_messages_delivery_proof')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Receive messages delivery proof from bridged chain.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoMessages.receive_messages_delivery_proof') === 'c405e68c980717aa1f294b7f187003a54d66988ef1f89873bc6623b6001192f3'
    }

    /**
     * Receive messages delivery proof from bridged chain.
     */
    get asV9190(): {proof: v9190.FromBridgedChainMessagesDeliveryProof, relayersState: v9190.UnrewardedRelayersState} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoMessagesReceiveMessagesProofCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoMessages.receive_messages_proof')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Receive messages proof from bridged chain.
     * 
     * The weight of the call assumes that the transaction always brings outbound lane
     * state update. Because of that, the submitter (relayer) has no benefit of not including
     * this data in the transaction, so reward confirmations lags should be minimal.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoMessages.receive_messages_proof') === '093f913ae0c914f82fa2eb932e1340eec49ff4353028ce83585be733ce091f80'
    }

    /**
     * Receive messages proof from bridged chain.
     * 
     * The weight of the call assumes that the transaction always brings outbound lane
     * state update. Because of that, the submitter (relayer) has no benefit of not including
     * this data in the transaction, so reward confirmations lags should be minimal.
     */
    get asV9190(): {relayerIdAtBridgedChain: Uint8Array, proof: v9190.FromBridgedChainMessagesProof, messagesCount: number, dispatchWeight: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoMessagesSendMessageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoMessages.send_message')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send message over lane.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoMessages.send_message') === 'de0c95d59bd011b08dde673dff9f5fed48d7749dd87c5f431778a87597e0a509'
    }

    /**
     * Send message over lane.
     */
    get asV9190(): {laneId: Uint8Array, payload: v9190.MessagePayload, deliveryAndDispatchFee: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoMessagesSetOperatingModeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoMessages.set_operating_mode')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Halt or resume all/some pallet operations.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoMessages.set_operating_mode') === '48316468aa1201521e381e61eaa31da57d43c1fd7c7cc3c1d9bd324dceb168c8'
    }

    /**
     * Halt or resume all/some pallet operations.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get asV9190(): {operatingMode: v9190.OperatingMode} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoMessagesSetOwnerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoMessages.set_owner')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change `PalletOwner`.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoMessages.set_owner') === '68ac74f07a38a8af1d52e491c1aa969d4de4524e2f60f6a4f61a8a7350bc913d'
    }

    /**
     * Change `PalletOwner`.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get asV9190(): {newOwner: (Uint8Array | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeRococoMessagesUpdatePalletParameterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeRococoMessages.update_pallet_parameter')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update pallet parameter.
     * 
     * May only be called either by root, or by `PalletOwner`.
     * 
     * The weight is: single read for permissions check + 2 writes for parameter value and
     * event.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeRococoMessages.update_pallet_parameter') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Update pallet parameter.
     * 
     * May only be called either by root, or by `PalletOwner`.
     * 
     * The weight is: single read for permissions check + 2 writes for parameter value and
     * event.
     */
    get asV9190(): null {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoGrandpaInitializeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoGrandpa.initialize')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Bootstrap the bridge pallet with an initial header and authority set from which to sync.
     * 
     * The initial configuration provided does not need to be the genesis header of the bridged
     * chain, it can be any arbitrary header. You can also provide the next scheduled set
     * change if it is already know.
     * 
     * This function is only allowed to be called from a trusted origin and writes to storage
     * with practically no checks in terms of the validity of the data. It is important that
     * you ensure that valid data is being passed in.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoGrandpa.initialize') === '02735bc3c56ac8d0fc9812dc994727345a80975c5fc4104db04bcd5d9934822a'
    }

    /**
     * Bootstrap the bridge pallet with an initial header and authority set from which to sync.
     * 
     * The initial configuration provided does not need to be the genesis header of the bridged
     * chain, it can be any arbitrary header. You can also provide the next scheduled set
     * change if it is already know.
     * 
     * This function is only allowed to be called from a trusted origin and writes to storage
     * with practically no checks in terms of the validity of the data. It is important that
     * you ensure that valid data is being passed in.
     */
    get asV9190(): {initData: v9190.InitializationData} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoGrandpaSetOperationalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoGrandpa.set_operational')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Halt or resume all pallet operations.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoGrandpa.set_operational') === 'bddcd3dc7a87604f28ed263ceba618d54b98b2330d7a30cb36c3e39a9ed8449e'
    }

    /**
     * Halt or resume all pallet operations.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get asV9190(): {operational: boolean} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoGrandpaSetOwnerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoGrandpa.set_owner')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change `PalletOwner`.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoGrandpa.set_owner') === '68ac74f07a38a8af1d52e491c1aa969d4de4524e2f60f6a4f61a8a7350bc913d'
    }

    /**
     * Change `PalletOwner`.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get asV9190(): {newOwner: (Uint8Array | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoGrandpaSubmitFinalityProofCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoGrandpa.submit_finality_proof')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Verify a target header is finalized according to the given finality proof.
     * 
     * It will use the underlying storage pallet to fetch information about the current
     * authorities and best finalized header in order to verify that the header is finalized.
     * 
     * If successful in verification, it will write the target header to the underlying storage
     * pallet.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoGrandpa.submit_finality_proof') === 'afddf1621094ebbf4d6fe738cc3daf0ef5ba90c5494230ef755d02b641452981'
    }

    /**
     * Verify a target header is finalized according to the given finality proof.
     * 
     * It will use the underlying storage pallet to fetch information about the current
     * authorities and best finalized header in order to verify that the header is finalized.
     * 
     * If successful in verification, it will write the target header to the underlying storage
     * pallet.
     */
    get asV9190(): {finalityTarget: v9190.Header, justification: v9190.GrandpaJustification} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoMessagesIncreaseMessageFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoMessages.increase_message_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Pay additional fee for the message.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoMessages.increase_message_fee') === 'f4cd7424c97341dea5dc9c0f598ee8cdfbf2bb35224942edb5bc43fb7d57b751'
    }

    /**
     * Pay additional fee for the message.
     */
    get asV9190(): {laneId: Uint8Array, nonce: bigint, additionalFee: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoMessagesReceiveMessagesDeliveryProofCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoMessages.receive_messages_delivery_proof')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Receive messages delivery proof from bridged chain.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoMessages.receive_messages_delivery_proof') === 'c405e68c980717aa1f294b7f187003a54d66988ef1f89873bc6623b6001192f3'
    }

    /**
     * Receive messages delivery proof from bridged chain.
     */
    get asV9190(): {proof: v9190.FromBridgedChainMessagesDeliveryProof, relayersState: v9190.UnrewardedRelayersState} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoMessagesReceiveMessagesProofCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoMessages.receive_messages_proof')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Receive messages proof from bridged chain.
     * 
     * The weight of the call assumes that the transaction always brings outbound lane
     * state update. Because of that, the submitter (relayer) has no benefit of not including
     * this data in the transaction, so reward confirmations lags should be minimal.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoMessages.receive_messages_proof') === '093f913ae0c914f82fa2eb932e1340eec49ff4353028ce83585be733ce091f80'
    }

    /**
     * Receive messages proof from bridged chain.
     * 
     * The weight of the call assumes that the transaction always brings outbound lane
     * state update. Because of that, the submitter (relayer) has no benefit of not including
     * this data in the transaction, so reward confirmations lags should be minimal.
     */
    get asV9190(): {relayerIdAtBridgedChain: Uint8Array, proof: v9190.FromBridgedChainMessagesProof, messagesCount: number, dispatchWeight: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoMessagesSendMessageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoMessages.send_message')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send message over lane.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoMessages.send_message') === 'de0c95d59bd011b08dde673dff9f5fed48d7749dd87c5f431778a87597e0a509'
    }

    /**
     * Send message over lane.
     */
    get asV9190(): {laneId: Uint8Array, payload: v9190.MessagePayload, deliveryAndDispatchFee: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoMessagesSetOperatingModeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoMessages.set_operating_mode')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Halt or resume all/some pallet operations.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoMessages.set_operating_mode') === '48316468aa1201521e381e61eaa31da57d43c1fd7c7cc3c1d9bd324dceb168c8'
    }

    /**
     * Halt or resume all/some pallet operations.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get asV9190(): {operatingMode: v9190.OperatingMode} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoMessagesSetOwnerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoMessages.set_owner')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change `PalletOwner`.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoMessages.set_owner') === '68ac74f07a38a8af1d52e491c1aa969d4de4524e2f60f6a4f61a8a7350bc913d'
    }

    /**
     * Change `PalletOwner`.
     * 
     * May only be called either by root, or by `PalletOwner`.
     */
    get asV9190(): {newOwner: (Uint8Array | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class BridgeWococoMessagesUpdatePalletParameterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'BridgeWococoMessages.update_pallet_parameter')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update pallet parameter.
     * 
     * May only be called either by root, or by `PalletOwner`.
     * 
     * The weight is: single read for permissions check + 2 writes for parameter value and
     * event.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('BridgeWococoMessages.update_pallet_parameter') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Update pallet parameter.
     * 
     * May only be called either by root, or by `PalletOwner`.
     * 
     * The weight is: single read for permissions check + 2 writes for parameter value and
     * event.
     */
    get asV9190(): null {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ChildBountiesAcceptCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChildBounties.accept_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Accept the curator role for the child-bounty.
     * 
     * The dispatch origin for this call must be the curator of this
     * child-bounty.
     * 
     * A deposit will be reserved from the curator and refund upon
     * successful payout or cancellation.
     * 
     * Fee for curator is deducted from curator fee of parent bounty.
     * 
     * Parent bounty must be in active state, for this child-bounty call to
     * work.
     * 
     * Child-bounty must be in "CuratorProposed" state, for processing the
     * call. And state of child-bounty is moved to "Active" on successful
     * call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('ChildBounties.accept_curator') === '3dca7b9fd6bc92337517a800e3ddd90a757f5b4e8ccfd63c20fde7d675eed25e'
    }

    /**
     * Accept the curator role for the child-bounty.
     * 
     * The dispatch origin for this call must be the curator of this
     * child-bounty.
     * 
     * A deposit will be reserved from the curator and refund upon
     * successful payout or cancellation.
     * 
     * Fee for curator is deducted from curator fee of parent bounty.
     * 
     * Parent bounty must be in active state, for this child-bounty call to
     * work.
     * 
     * Child-bounty must be in "CuratorProposed" state, for processing the
     * call. And state of child-bounty is moved to "Active" on successful
     * call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get asV9300(): {parentBountyId: number, childBountyId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ChildBountiesAddChildBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChildBounties.add_child_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new child-bounty.
     * 
     * The dispatch origin for this call must be the curator of parent
     * bounty and the parent bounty must be in "active" state.
     * 
     * Child-bounty gets added successfully & fund gets transferred from
     * parent bounty to child-bounty account, if parent bounty has enough
     * funds, else the call fails.
     * 
     * Upper bound to maximum number of active  child bounties that can be
     * added are managed via runtime trait config
     * [`Config::MaxActiveChildBountyCount`].
     * 
     * If the call is success, the status of child-bounty is updated to
     * "Added".
     * 
     * - `parent_bounty_id`: Index of parent bounty for which child-bounty is being added.
     * - `value`: Value for executing the proposal.
     * - `description`: Text description for the child-bounty.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('ChildBounties.add_child_bounty') === '9b64a969bb5d19a05e1a3105d04ed330d9a8ddbbbde926a9fd4d997acab9553a'
    }

    /**
     * Add a new child-bounty.
     * 
     * The dispatch origin for this call must be the curator of parent
     * bounty and the parent bounty must be in "active" state.
     * 
     * Child-bounty gets added successfully & fund gets transferred from
     * parent bounty to child-bounty account, if parent bounty has enough
     * funds, else the call fails.
     * 
     * Upper bound to maximum number of active  child bounties that can be
     * added are managed via runtime trait config
     * [`Config::MaxActiveChildBountyCount`].
     * 
     * If the call is success, the status of child-bounty is updated to
     * "Added".
     * 
     * - `parent_bounty_id`: Index of parent bounty for which child-bounty is being added.
     * - `value`: Value for executing the proposal.
     * - `description`: Text description for the child-bounty.
     */
    get asV9300(): {parentBountyId: number, value: bigint, description: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ChildBountiesAwardChildBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChildBounties.award_child_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Award child-bounty to a beneficiary.
     * 
     * The beneficiary will be able to claim the funds after a delay.
     * 
     * The dispatch origin for this call must be the parent curator or
     * curator of this child-bounty.
     * 
     * Parent bounty must be in active state, for this child-bounty call to
     * work.
     * 
     * Child-bounty must be in active state, for processing the call. And
     * state of child-bounty is moved to "PendingPayout" on successful call
     * completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     * - `beneficiary`: Beneficiary account.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('ChildBounties.award_child_bounty') === '21ccef873d503d210c4bdfa475a51fbd212513d7a7e99964ec19e6491df69e6b'
    }

    /**
     * Award child-bounty to a beneficiary.
     * 
     * The beneficiary will be able to claim the funds after a delay.
     * 
     * The dispatch origin for this call must be the parent curator or
     * curator of this child-bounty.
     * 
     * Parent bounty must be in active state, for this child-bounty call to
     * work.
     * 
     * Child-bounty must be in active state, for processing the call. And
     * state of child-bounty is moved to "PendingPayout" on successful call
     * completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     * - `beneficiary`: Beneficiary account.
     */
    get asV9300(): {parentBountyId: number, childBountyId: number, beneficiary: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ChildBountiesClaimChildBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChildBounties.claim_child_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim the payout from an awarded child-bounty after payout delay.
     * 
     * The dispatch origin for this call may be any signed origin.
     * 
     * Call works independent of parent bounty state, No need for parent
     * bounty to be in active state.
     * 
     * The Beneficiary is paid out with agreed bounty value. Curator fee is
     * paid & curator deposit is unreserved.
     * 
     * Child-bounty must be in "PendingPayout" state, for processing the
     * call. And instance of child-bounty is removed from the state on
     * successful call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('ChildBounties.claim_child_bounty') === '3dca7b9fd6bc92337517a800e3ddd90a757f5b4e8ccfd63c20fde7d675eed25e'
    }

    /**
     * Claim the payout from an awarded child-bounty after payout delay.
     * 
     * The dispatch origin for this call may be any signed origin.
     * 
     * Call works independent of parent bounty state, No need for parent
     * bounty to be in active state.
     * 
     * The Beneficiary is paid out with agreed bounty value. Curator fee is
     * paid & curator deposit is unreserved.
     * 
     * Child-bounty must be in "PendingPayout" state, for processing the
     * call. And instance of child-bounty is removed from the state on
     * successful call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get asV9300(): {parentBountyId: number, childBountyId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ChildBountiesCloseChildBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChildBounties.close_child_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a proposed or active child-bounty. Child-bounty account funds
     * are transferred to parent bounty account. The child-bounty curator
     * deposit may be unreserved if possible.
     * 
     * The dispatch origin for this call must be either parent curator or
     * `T::RejectOrigin`.
     * 
     * If the state of child-bounty is `Active`, curator deposit is
     * unreserved.
     * 
     * If the state of child-bounty is `PendingPayout`, call fails &
     * returns `PendingPayout` error.
     * 
     * For the origin other than T::RejectOrigin, parent bounty must be in
     * active state, for this child-bounty call to work. For origin
     * T::RejectOrigin execution is forced.
     * 
     * Instance of child-bounty is removed from the state on successful
     * call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('ChildBounties.close_child_bounty') === '3dca7b9fd6bc92337517a800e3ddd90a757f5b4e8ccfd63c20fde7d675eed25e'
    }

    /**
     * Cancel a proposed or active child-bounty. Child-bounty account funds
     * are transferred to parent bounty account. The child-bounty curator
     * deposit may be unreserved if possible.
     * 
     * The dispatch origin for this call must be either parent curator or
     * `T::RejectOrigin`.
     * 
     * If the state of child-bounty is `Active`, curator deposit is
     * unreserved.
     * 
     * If the state of child-bounty is `PendingPayout`, call fails &
     * returns `PendingPayout` error.
     * 
     * For the origin other than T::RejectOrigin, parent bounty must be in
     * active state, for this child-bounty call to work. For origin
     * T::RejectOrigin execution is forced.
     * 
     * Instance of child-bounty is removed from the state on successful
     * call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get asV9300(): {parentBountyId: number, childBountyId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ChildBountiesProposeCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChildBounties.propose_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose curator for funded child-bounty.
     * 
     * The dispatch origin for this call must be curator of parent bounty.
     * 
     * Parent bounty must be in active state, for this child-bounty call to
     * work.
     * 
     * Child-bounty must be in "Added" state, for processing the call. And
     * state of child-bounty is moved to "CuratorProposed" on successful
     * call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     * - `curator`: Address of child-bounty curator.
     * - `fee`: payment fee to child-bounty curator for execution.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('ChildBounties.propose_curator') === '09efda450821b39ea5773344d5f1bf8266853d4e7804037ae70b689acf2c9e80'
    }

    /**
     * Propose curator for funded child-bounty.
     * 
     * The dispatch origin for this call must be curator of parent bounty.
     * 
     * Parent bounty must be in active state, for this child-bounty call to
     * work.
     * 
     * Child-bounty must be in "Added" state, for processing the call. And
     * state of child-bounty is moved to "CuratorProposed" on successful
     * call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     * - `curator`: Address of child-bounty curator.
     * - `fee`: payment fee to child-bounty curator for execution.
     */
    get asV9300(): {parentBountyId: number, childBountyId: number, curator: v9300.MultiAddress, fee: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ChildBountiesUnassignCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChildBounties.unassign_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unassign curator from a child-bounty.
     * 
     * The dispatch origin for this call can be either `RejectOrigin`, or
     * the curator of the parent bounty, or any signed origin.
     * 
     * For the origin other than T::RejectOrigin and the child-bounty
     * curator, parent bounty must be in active state, for this call to
     * work. We allow child-bounty curator and T::RejectOrigin to execute
     * this call irrespective of the parent bounty state.
     * 
     * If this function is called by the `RejectOrigin` or the
     * parent bounty curator, we assume that the child-bounty curator is
     * malicious or inactive. As a result, child-bounty curator deposit is
     * slashed.
     * 
     * If the origin is the child-bounty curator, we take this as a sign
     * that they are unable to do their job, and are willingly giving up.
     * We could slash the deposit, but for now we allow them to unreserve
     * their deposit and exit without issue. (We may want to change this if
     * it is abused.)
     * 
     * Finally, the origin can be anyone iff the child-bounty curator is
     * "inactive". Expiry update due of parent bounty is used to estimate
     * inactive state of child-bounty curator.
     * 
     * This allows anyone in the community to call out that a child-bounty
     * curator is not doing their due diligence, and we should pick a new
     * one. In this case the child-bounty curator deposit is slashed.
     * 
     * State of child-bounty is moved to Added state on successful call
     * completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('ChildBounties.unassign_curator') === '3dca7b9fd6bc92337517a800e3ddd90a757f5b4e8ccfd63c20fde7d675eed25e'
    }

    /**
     * Unassign curator from a child-bounty.
     * 
     * The dispatch origin for this call can be either `RejectOrigin`, or
     * the curator of the parent bounty, or any signed origin.
     * 
     * For the origin other than T::RejectOrigin and the child-bounty
     * curator, parent bounty must be in active state, for this call to
     * work. We allow child-bounty curator and T::RejectOrigin to execute
     * this call irrespective of the parent bounty state.
     * 
     * If this function is called by the `RejectOrigin` or the
     * parent bounty curator, we assume that the child-bounty curator is
     * malicious or inactive. As a result, child-bounty curator deposit is
     * slashed.
     * 
     * If the origin is the child-bounty curator, we take this as a sign
     * that they are unable to do their job, and are willingly giving up.
     * We could slash the deposit, but for now we allow them to unreserve
     * their deposit and exit without issue. (We may want to change this if
     * it is abused.)
     * 
     * Finally, the origin can be anyone iff the child-bounty curator is
     * "inactive". Expiry update due of parent bounty is used to estimate
     * inactive state of child-bounty curator.
     * 
     * This allows anyone in the community to call out that a child-bounty
     * curator is not doing their due diligence, and we should pick a new
     * one. In this case the child-bounty curator deposit is slashed.
     * 
     * State of child-bounty is moved to Added state on successful call
     * completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get asV9300(): {parentBountyId: number, childBountyId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsAttestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.attest')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Attest to a statement, needed to finalize the claims process.
     * 
     * WARNING: Insecure unless your chain includes `PrevalidateAttests` as a `SignedExtension`.
     * 
     * Unsigned Validation:
     * A call to attest is deemed valid if the sender has a `Preclaim` registered
     * and provides a `statement` which is expected for the account.
     * 
     * Parameters:
     * - `statement`: The identity of the statement which is being attested to in the signature.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to do pre-validation on `attest` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Claims.attest') === '110ca18454a6d22ce0d47f5b3af09a22580ef5eb8a4478c2c65f7982144f5c73'
    }

    /**
     * Attest to a statement, needed to finalize the claims process.
     * 
     * WARNING: Insecure unless your chain includes `PrevalidateAttests` as a `SignedExtension`.
     * 
     * Unsigned Validation:
     * A call to attest is deemed valid if the sender has a `Preclaim` registered
     * and provides a `statement` which is expected for the account.
     * 
     * Parameters:
     * - `statement`: The identity of the statement which is being attested to in the signature.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to do pre-validation on `attest` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asV9300(): {statement: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make a claim to collect your DOTs.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `dest` account.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message
     *    matching the format described above.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Claims.claim') === '46f6fbe643b51ee7e3a08e102493b6291f118e76145971a19fb90446b9af7251'
    }

    /**
     * Make a claim to collect your DOTs.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `dest` account.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message
     *    matching the format described above.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asV9300(): {dest: Uint8Array, ethereumSignature: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsClaimAttestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.claim_attest')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make a claim to collect your DOTs by signing a statement.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to `claim_attest` is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)(statement)
     * 
     * and `address` matches the `dest` account; the `statement` must match that which is
     * expected according to your purchase arrangement.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message
     *    matching the format described above.
     * - `statement`: The identity of the statement which is being attested to in the signature.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim_attest` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Claims.claim_attest') === 'de61f8dbba6a3bc8fcf3266422fc3463ad981e728b6ada5f53490d822a372fb9'
    }

    /**
     * Make a claim to collect your DOTs by signing a statement.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to `claim_attest` is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)(statement)
     * 
     * and `address` matches the `dest` account; the `statement` must match that which is
     * expected according to your purchase arrangement.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message
     *    matching the format described above.
     * - `statement`: The identity of the statement which is being attested to in the signature.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim_attest` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asV9300(): {dest: Uint8Array, ethereumSignature: Uint8Array, statement: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsMintClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.mint_claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Mint a new claim to collect DOTs.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * Parameters:
     * - `who`: The Ethereum address allowed to collect this claim.
     * - `value`: The number of DOTs that will be claimed.
     * - `vesting_schedule`: An optional vesting schedule for these DOTs.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * We assume worst case that both vesting and statement is being inserted.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Claims.mint_claim') === '63bb967752cf979f3cee14fba71b5a6c81590665d3b84d1ca8674865ec9104ff'
    }

    /**
     * Mint a new claim to collect DOTs.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * Parameters:
     * - `who`: The Ethereum address allowed to collect this claim.
     * - `value`: The number of DOTs that will be claimed.
     * - `vesting_schedule`: An optional vesting schedule for these DOTs.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * We assume worst case that both vesting and statement is being inserted.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asV9300(): {who: Uint8Array, value: bigint, vestingSchedule: ([bigint, bigint, number] | undefined), statement: (v9300.StatementKind | undefined)} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsMoveClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.move_claim')
        this._chain = ctx._chain
        this.call = call
    }

    get isV9300(): boolean {
        return this._chain.getCallHash('Claims.move_claim') === '141d7420c9fafec5c9c80590a2dc9e528311f92ec2465a0dfc29eb44c0c7f2c5'
    }

    get asV9300(): {old: Uint8Array, new: Uint8Array, maybePreclaim: (Uint8Array | undefined)} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class CollectiveCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Collective.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Collective.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV9190(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CollectiveDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Collective.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Collective.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get asV9190(): {proposalHash: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CollectiveExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Collective.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Collective.execute') === '2a869476c3d8b78bb0f4db75e81c08434343f7b1cc70320e59e5178a35188d2e'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9190(): {proposal: v9190.Call, lengthBound: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Collective.execute') === '7bb77d3786b06cd7e066ef6bfe8a88671983a655329926514c780bb2bd16e4bd'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9220(): {proposal: v9220.Call, lengthBound: number} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Collective.execute') === 'd2e91d9a229c6acb21306c6d6b4d4e1ec50de2f4eaeb5da4c5216a3690da197b'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9250(): {proposal: v9250.Call, lengthBound: number} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }
}

export class CollectiveProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Collective.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Collective.propose') === '23ed64df5de1f504ebd8c2507ee5b61d4c7bcc41185555eebe494852bbf08258'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9190(): {threshold: number, proposal: v9190.Call, lengthBound: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Collective.propose') === 'a5e326fc6e73526ff007a75ceb69271b75c8e4389d42cfb5962fdca2eac42121'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9220(): {threshold: number, proposal: v9220.Call, lengthBound: number} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Collective.propose') === '9573da982afc2979e33b43776868d848ada1d9ce9f8c8c432b9be7630e112af1'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9250(): {threshold: number, proposal: v9250.Call, lengthBound: number} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }
}

export class CollectiveSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Collective.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Collective.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get asV9190(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CollectiveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Collective.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Collective.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get asV9190(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetBypassConsistencyCheckCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_bypass_consistency_check')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Setting this to true will disable consistency checks for the configuration setters.
     * Use with caution.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_bypass_consistency_check') === 'd05b18ea2c0001429a8a368f643f1f81d54c8340ae4e7a6d0779f3174891b509'
    }

    /**
     * Setting this to true will disable consistency checks for the configuration setters.
     * Use with caution.
     */
    get asV9190(): {new: boolean} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetChainAvailabilityPeriodCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_chain_availability_period')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the availability period for parachains.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_chain_availability_period') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the availability period for parachains.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetCodeRetentionPeriodCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_code_retention_period')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the acceptance period for an included candidate.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_code_retention_period') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the acceptance period for an included candidate.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetDisputeConclusionByTimeOutPeriodCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_dispute_conclusion_by_time_out_period')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the dispute conclusion by time out period.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_dispute_conclusion_by_time_out_period') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the dispute conclusion by time out period.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetDisputeMaxSpamSlotsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_dispute_max_spam_slots')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the maximum number of dispute spam slots.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_dispute_max_spam_slots') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the maximum number of dispute spam slots.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetDisputePeriodCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_dispute_period')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the dispute period, in number of sessions to keep for disputes.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_dispute_period') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the dispute period, in number of sessions to keep for disputes.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetDisputePostConclusionAcceptancePeriodCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_dispute_post_conclusion_acceptance_period')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the dispute post conclusion acceptance period.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_dispute_post_conclusion_acceptance_period') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the dispute post conclusion acceptance period.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetGroupRotationFrequencyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_group_rotation_frequency')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the parachain validator-group rotation frequency
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_group_rotation_frequency') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the parachain validator-group rotation frequency
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpChannelMaxCapacityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_channel_max_capacity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum number of messages allowed in an HRMP channel at once.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_channel_max_capacity') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum number of messages allowed in an HRMP channel at once.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpChannelMaxMessageSizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_channel_max_message_size')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum size of a message that could ever be put into an HRMP channel.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_channel_max_message_size') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum size of a message that could ever be put into an HRMP channel.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpChannelMaxTotalSizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_channel_max_total_size')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_channel_max_total_size') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpMaxMessageNumPerCandidateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_max_message_num_per_candidate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum number of outbound HRMP messages can be sent by a candidate.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_max_message_num_per_candidate') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum number of outbound HRMP messages can be sent by a candidate.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpMaxParachainInboundChannelsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_max_parachain_inbound_channels')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_max_parachain_inbound_channels') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpMaxParachainOutboundChannelsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_max_parachain_outbound_channels')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_max_parachain_outbound_channels') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpMaxParathreadInboundChannelsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_max_parathread_inbound_channels')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_max_parathread_inbound_channels') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpMaxParathreadOutboundChannelsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_max_parathread_outbound_channels')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_max_parathread_outbound_channels') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpOpenRequestTtlCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_open_request_ttl')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the number of sessions after which an HRMP open channel request expires.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_open_request_ttl') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the number of sessions after which an HRMP open channel request expires.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpRecipientDepositCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_recipient_deposit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the amount of funds that the recipient should provide for accepting opening an HRMP
     * channel.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_recipient_deposit') === '86d3c70a5efeaca7d1a72b006ed6757b84fb71871eb54ca1d98d6a8fdeb79e3a'
    }

    /**
     * Sets the amount of funds that the recipient should provide for accepting opening an HRMP
     * channel.
     */
    get asV9190(): {new: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetHrmpSenderDepositCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_hrmp_sender_deposit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the amount of funds that the sender should provide for opening an HRMP channel.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_hrmp_sender_deposit') === '86d3c70a5efeaca7d1a72b006ed6757b84fb71871eb54ca1d98d6a8fdeb79e3a'
    }

    /**
     * Sets the amount of funds that the sender should provide for opening an HRMP channel.
     */
    get asV9190(): {new: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMaxCodeSizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_max_code_size')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the max validation code size for incoming upgrades.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_max_code_size') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the max validation code size for incoming upgrades.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMaxDownwardMessageSizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_max_downward_message_size')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the critical downward message size.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_max_downward_message_size') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the critical downward message size.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMaxHeadDataSizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_max_head_data_size')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the max head data size for paras.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_max_head_data_size') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the max head data size for paras.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMaxPovSizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_max_pov_size')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the max POV block size for incoming upgrades.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_max_pov_size') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the max POV block size for incoming upgrades.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMaxUpwardMessageNumPerCandidateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_max_upward_message_num_per_candidate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum number of messages that a candidate can contain.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_max_upward_message_num_per_candidate') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum number of messages that a candidate can contain.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMaxUpwardMessageSizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_max_upward_message_size')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum size of an upward message that can be sent by a candidate.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_max_upward_message_size') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum size of an upward message that can be sent by a candidate.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMaxUpwardQueueCountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_max_upward_queue_count')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum items that can present in a upward dispatch queue at once.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_max_upward_queue_count') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum items that can present in a upward dispatch queue at once.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMaxUpwardQueueSizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_max_upward_queue_size')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum total size of items that can present in a upward dispatch queue at once.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_max_upward_queue_size') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the maximum total size of items that can present in a upward dispatch queue at once.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMaxValidatorsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_max_validators')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the maximum number of validators to use in parachain consensus.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_max_validators') === 'b271d6a449f9641d900bc39e1a293351b09e8f890436186c9fc6db7592ba0967'
    }

    /**
     * Set the maximum number of validators to use in parachain consensus.
     */
    get asV9190(): {new: (number | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMaxValidatorsPerCoreCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_max_validators_per_core')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the maximum number of validators to assign to any core.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_max_validators_per_core') === 'b271d6a449f9641d900bc39e1a293351b09e8f890436186c9fc6db7592ba0967'
    }

    /**
     * Set the maximum number of validators to assign to any core.
     */
    get asV9190(): {new: (number | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetMinimumValidationUpgradeDelayCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_minimum_validation_upgrade_delay')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the minimum delay between announcing the upgrade block for a parachain until the
     * upgrade taking place.
     * 
     * See the field documentation for information and constraints for the new value.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_minimum_validation_upgrade_delay') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Sets the minimum delay between announcing the upgrade block for a parachain until the
     * upgrade taking place.
     * 
     * See the field documentation for information and constraints for the new value.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetNDelayTranchesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_n_delay_tranches')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the total number of delay tranches.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_n_delay_tranches') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the total number of delay tranches.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetNeededApprovalsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_needed_approvals')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the number of validators needed to approve a block.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_needed_approvals') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the number of validators needed to approve a block.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetNoShowSlotsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_no_show_slots')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the no show slots, in number of number of consensus slots.
     * Must be at least 1.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_no_show_slots') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the no show slots, in number of number of consensus slots.
     * Must be at least 1.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetParathreadCoresCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_parathread_cores')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the number of parathread execution cores.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_parathread_cores') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the number of parathread execution cores.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetParathreadRetriesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_parathread_retries')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the number of retries for a particular parathread.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_parathread_retries') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the number of retries for a particular parathread.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetPvfCheckingEnabledCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_pvf_checking_enabled')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Enable or disable PVF pre-checking. Consult the field documentation prior executing.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_pvf_checking_enabled') === 'd05b18ea2c0001429a8a368f643f1f81d54c8340ae4e7a6d0779f3174891b509'
    }

    /**
     * Enable or disable PVF pre-checking. Consult the field documentation prior executing.
     */
    get asV9190(): {new: boolean} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetPvfVotingTtlCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_pvf_voting_ttl')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the number of session changes after which a PVF pre-checking voting is rejected.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_pvf_voting_ttl') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the number of session changes after which a PVF pre-checking voting is rejected.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetRelayVrfModuloSamplesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_relay_vrf_modulo_samples')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_relay_vrf_modulo_samples') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetSchedulingLookaheadCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_scheduling_lookahead')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the scheduling lookahead, in expected number of blocks at peak throughput.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_scheduling_lookahead') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the scheduling lookahead, in expected number of blocks at peak throughput.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetThreadAvailabilityPeriodCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_thread_availability_period')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the availability period for parathreads.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_thread_availability_period') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the availability period for parathreads.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetUmpMaxIndividualWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_ump_max_individual_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the maximum amount of weight any individual upward message may consume.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_ump_max_individual_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Sets the maximum amount of weight any individual upward message may consume.
     */
    get asV9190(): {new: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Sets the maximum amount of weight any individual upward message may consume.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Configuration.set_ump_max_individual_weight') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Sets the maximum amount of weight any individual upward message may consume.
     */
    get asV9300(): {new: v9300.Weight} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Sets the maximum amount of weight any individual upward message may consume.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Configuration.set_ump_max_individual_weight') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Sets the maximum amount of weight any individual upward message may consume.
     */
    get asV9310(): {new: v9310.Weight} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetUmpServiceTotalWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_ump_service_total_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the soft limit for the phase of dispatching dispatchable upward messages.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_ump_service_total_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
    }

    /**
     * Sets the soft limit for the phase of dispatching dispatchable upward messages.
     */
    get asV9190(): {new: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Sets the soft limit for the phase of dispatching dispatchable upward messages.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Configuration.set_ump_service_total_weight') === 'ceb02ac7f45638dcb446470f1d43ad1d0dd56ac82f1a2cd9432b8e99555f672c'
    }

    /**
     * Sets the soft limit for the phase of dispatching dispatchable upward messages.
     */
    get asV9300(): {new: v9300.Weight} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Sets the soft limit for the phase of dispatching dispatchable upward messages.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Configuration.set_ump_service_total_weight') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Sets the soft limit for the phase of dispatching dispatchable upward messages.
     */
    get asV9310(): {new: v9310.Weight} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetValidationUpgradeCooldownCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_validation_upgrade_cooldown')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the validation upgrade cooldown.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_validation_upgrade_cooldown') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the validation upgrade cooldown.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetValidationUpgradeDelayCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_validation_upgrade_delay')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the validation upgrade delay.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_validation_upgrade_delay') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the validation upgrade delay.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConfigurationSetZerothDelayTrancheWidthCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Configuration.set_zeroth_delay_tranche_width')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the zeroth delay tranche width.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Configuration.set_zeroth_delay_tranche_width') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Set the zeroth delay tranche width.
     */
    get asV9190(): {new: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Council.close') === '683905378cce329de8c5e9460bd36984188fb48a39207d985ea43cb10bd1eb81'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV9300(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Council.close') === 'a88911953f51bddf0f0aeafa7caa7ca904d30cdb24f940ff177d2acf7088d3bd'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV9310(): {proposalHash: Uint8Array, index: number, proposalWeightBound: v9310.Weight, lengthBound: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilCloseOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.close_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Council.close_old_weight') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV9310(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Council.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get asV9300(): {proposalHash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Council.execute') === '4bf9b7677c445040a4a4169b15b4f31ba5c90574c9303d81a8f0dfbbcd894bbf'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9300(): {proposal: v9300.Call, lengthBound: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Council.execute') === 'b41bdbb616dfec6b9f545a5f47f43bf823afe2157ea8df97e88c4408319d909f'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9310(): {proposal: v9310.Call, lengthBound: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Council.execute') === 'c63ff83d48cab84e144ceff89d6cf6c8ec1263eb8fcd2e600f1cf76c1cdd0044'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9321(): {proposal: v9321.Call, lengthBound: number} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Council.execute') === '9108cd17daf0afe5291340ba757de3ee1bfb9fefd2ed224203becaa0c12336e2'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9370(): {proposal: v9370.Call, lengthBound: number} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Council.propose') === 'a5352d93827f1992a56e871a4dbe977e26314a659208057bc9aa7de768a410e6'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9300(): {threshold: number, proposal: v9300.Call, lengthBound: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Council.propose') === '510f0e7d8a484b7ea5921de2438aa2c0bb8b14fa92c97cb928950a1510bcbbdb'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9310(): {threshold: number, proposal: v9310.Call, lengthBound: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Council.propose') === 'f1efc11c0698d98e44b097936d0ce6fa2adcfc8f8764c7c0534186de62bab705'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9321(): {threshold: number, proposal: v9321.Call, lengthBound: number} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Council.propose') === 'a86ca72012c9c2a0306a45d6b5322857e79c98fbd5623e27f5e16d45df36fea1'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9370(): {threshold: number, proposal: v9370.Call, lengthBound: number} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Council.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get asV9300(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Council.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get asV9300(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanAddMemoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.add_memo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an optional memo to an existing crowdloan contribution.
     * 
     * Origin must be Signed, and the user must have contributed to the crowdloan.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Crowdloan.add_memo') === 'd6cb52d8c86e57166a333b4d42b2009bcfa3453e4607b97f850eeb1a96f78389'
    }

    /**
     * Add an optional memo to an existing crowdloan contribution.
     * 
     * Origin must be Signed, and the user must have contributed to the crowdloan.
     */
    get asV9190(): {index: number, memo: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanContributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.contribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
     * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Crowdloan.contribute') === 'c85a49d78a97667f6d8d7cdda206ad3ba38bd873ab2e82a42135a31c48152a6c'
    }

    /**
     * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
     * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
     */
    get asV9190(): {index: number, value: bigint, signature: (v9190.MultiSignature | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanContributeAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.contribute_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Contribute your entire balance to a crowd sale. This will transfer the entire balance of a user over to fund a parachain
     * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Crowdloan.contribute_all') === '321aa21eccdd4e2a7dd0dbf8127848aa93dbaa207ef379b0f6f21d3d57327f71'
    }

    /**
     * Contribute your entire balance to a crowd sale. This will transfer the entire balance of a user over to fund a parachain
     * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
     */
    get asV9190(): {index: number, signature: (v9190.MultiSignature | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanCreateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.create')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a new crowdloaning campaign for a parachain slot with the given lease period range.
     * 
     * This applies a lock to your parachain configuration, ensuring that it cannot be changed
     * by the parachain manager.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Crowdloan.create') === '9d0529ac9fb92b6a7eca157299243acd0d2eb82a352509475556c79f78f47aa3'
    }

    /**
     * Create a new crowdloaning campaign for a parachain slot with the given lease period range.
     * 
     * This applies a lock to your parachain configuration, ensuring that it cannot be changed
     * by the parachain manager.
     */
    get asV9190(): {index: number, cap: bigint, firstPeriod: number, lastPeriod: number, end: number, verifier: (v9190.MultiSigner | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanDissolveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.dissolve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a fund after the retirement period has ended and all funds have been returned.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Crowdloan.dissolve') === 'bd48b3528cf076be92c4c1f55a0268722184f1034de8ccfa09ac565bef81fa17'
    }

    /**
     * Remove a fund after the retirement period has ended and all funds have been returned.
     */
    get asV9190(): {index: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanEditCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.edit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Edit the configuration for an in-progress crowdloan.
     * 
     * Can only be called by Root origin.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Crowdloan.edit') === '9d0529ac9fb92b6a7eca157299243acd0d2eb82a352509475556c79f78f47aa3'
    }

    /**
     * Edit the configuration for an in-progress crowdloan.
     * 
     * Can only be called by Root origin.
     */
    get asV9190(): {index: number, cap: bigint, firstPeriod: number, lastPeriod: number, end: number, verifier: (v9190.MultiSigner | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanPokeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.poke')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Poke the fund into `NewRaise`
     * 
     * Origin must be Signed, and the fund has non-zero raise.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Crowdloan.poke') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Poke the fund into `NewRaise`
     * 
     * Origin must be Signed, and the fund has non-zero raise.
     */
    get asV9190(): {index: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanRefundCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.refund')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Automatically refund contributors of an ended crowdloan.
     * Due to weight restrictions, this function may need to be called multiple
     * times to fully refund all users. We will refund `RemoveKeysLimit` users at a time.
     * 
     * Origin must be signed, but can come from anyone.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Crowdloan.refund') === 'bd48b3528cf076be92c4c1f55a0268722184f1034de8ccfa09ac565bef81fa17'
    }

    /**
     * Automatically refund contributors of an ended crowdloan.
     * Due to weight restrictions, this function may need to be called multiple
     * times to fully refund all users. We will refund `RemoveKeysLimit` users at a time.
     * 
     * Origin must be signed, but can come from anyone.
     */
    get asV9190(): {index: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class CrowdloanWithdrawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Crowdloan.withdraw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Withdraw full balance of a specific contributor.
     * 
     * Origin must be signed, but can come from anyone.
     * 
     * The fund must be either in, or ready for, retirement. For a fund to be *in* retirement, then the retirement
     * flag must be set. For a fund to be ready for retirement, then:
     * - it must not already be in retirement;
     * - the amount of raised funds must be bigger than the _free_ balance of the account;
     * - and either:
     *   - the block number must be at least `end`; or
     *   - the current lease period must be greater than the fund's `last_period`.
     * 
     * In this case, the fund's retirement flag is set and its `end` is reset to the current block
     * number.
     * 
     * - `who`: The account whose contribution should be withdrawn.
     * - `index`: The parachain to whose crowdloan the contribution was made.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Crowdloan.withdraw') === '02cd16eba62d1217d4cb6a31d6568e8ad8fdc99a88200e787453e7eba24cad9e'
    }

    /**
     * Withdraw full balance of a specific contributor.
     * 
     * Origin must be signed, but can come from anyone.
     * 
     * The fund must be either in, or ready for, retirement. For a fund to be *in* retirement, then the retirement
     * flag must be set. For a fund to be ready for retirement, then:
     * - it must not already be in retirement;
     * - the amount of raised funds must be bigger than the _free_ balance of the account;
     * - and either:
     *   - the block number must be at least `end`; or
     *   - the current lease period must be greater than the fund's `last_period`.
     * 
     * In this case, the fund's retirement flag is set and its `end` is reset to the current block
     * number.
     * 
     * - `who`: The account whose contribution should be withdrawn.
     * - `index`: The parachain to whose crowdloan the contribution was made.
     */
    get asV9190(): {who: Uint8Array, index: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyBlacklistCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.blacklist')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Permanently place a proposal into the blacklist. This prevents it from ever being
     * proposed again.
     * 
     * If called on a queued public or external proposal, then this will result in it being
     * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     * then it will be cancelled.
     * 
     * The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     * - `proposal_hash`: The proposal hash to blacklist permanently.
     * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     * cancelled.
     * 
     * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *   reasonable value).
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.blacklist') === '8d8922c0775adfb1df719211ab4fc6fb40b6cc8864038bcb1b544d9cf039b30a'
    }

    /**
     * Permanently place a proposal into the blacklist. This prevents it from ever being
     * proposed again.
     * 
     * If called on a queued public or external proposal, then this will result in it being
     * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     * then it will be cancelled.
     * 
     * The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     * - `proposal_hash`: The proposal hash to blacklist permanently.
     * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     * cancelled.
     * 
     * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *   reasonable value).
     */
    get asV9300(): {proposalHash: Uint8Array, maybeRefIndex: (number | undefined)} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a proposal.
     * 
     * The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     * - `prop_index`: The index of the proposal to cancel.
     * 
     * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.cancel_proposal') === '0e50c7564a4a7f4e6a09a0abcc8022f4445c064144d2318ed086e6080bee800d'
    }

    /**
     * Remove a proposal.
     * 
     * The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     * - `prop_index`: The index of the proposal to cancel.
     * 
     * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get asV9300(): {propIndex: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelQueuedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_queued')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a proposal queued for enactment.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `which`: The index of the referendum to cancel.
     * 
     * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.cancel_queued') === '60780274011857b5305b5413b2b4742e5d41eb58a0948049d0672e81af198cb7'
    }

    /**
     * Cancel a proposal queued for enactment.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `which`: The index of the referendum to cancel.
     * 
     * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
     */
    get asV9300(): {which: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelReferendumCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_referendum')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a referendum.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `ref_index`: The index of the referendum to cancel.
     * 
     * # Weight: `O(1)`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.cancel_referendum') === 'efe4ecff834678ca8b73ea6e2f38e514997eb402e82da2ce4cf036008844a857'
    }

    /**
     * Remove a referendum.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `ref_index`: The index of the referendum to cancel.
     * 
     * # Weight: `O(1)`.
     */
    get asV9300(): {refIndex: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyClearPublicProposalsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.clear_public_proposals')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.delegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '789db36a1c43e1ffdad52288f8573a492f529890632f51821e7bd1d74ba6cffc'
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asV9300(): {to: v9300.MultiAddress, conviction: v9300.Conviction, balance: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyEmergencyCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.emergency_cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     * referendum.
     * 
     * The dispatch origin of this call must be `CancellationOrigin`.
     * 
     * -`ref_index`: The index of the referendum to cancel.
     * 
     * Weight: `O(1)`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.emergency_cancel') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     * referendum.
     * 
     * The dispatch origin of this call must be `CancellationOrigin`.
     * 
     * -`ref_index`: The index of the referendum to cancel.
     * 
     * Weight: `O(1)`.
     */
    get asV9300(): {refIndex: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyEnactProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.enact_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.enact_proposal') === 'de192ab0f058d1fb7eacc523bf0e05128d16509ec21bf445f0eefa47c89e60bf'
    }

    /**
     * Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    get asV9300(): {proposalHash: Uint8Array, index: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
     *   Decoding vec of length V. Charged as maximum
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.external_propose') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
     *   Decoding vec of length V. Charged as maximum
     */
    get asV9300(): {proposalHash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Democracy.external_propose') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     */
    get asV9310(): {proposal: v9310.Bounded} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeDefaultCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_default')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_default') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asV9300(): {proposalHash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_default') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asV9310(): {proposal: v9310.Bounded} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeMajorityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_majority')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_majority') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asV9300(): {proposalHash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_majority') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asV9310(): {proposal: v9310.Bounded} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyFastTrackCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.fast_track')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule the currently externally-proposed majority-carries referendum to be tabled
     * immediately. If there is no externally-proposed referendum currently, or if there is one
     * but it is not a majority-carries referendum then it fails.
     * 
     * The dispatch of this call must be `FastTrackOrigin`.
     * 
     * - `proposal_hash`: The hash of the current external proposal.
     * - `voting_period`: The period that is allowed for voting on this proposal.
     * 	Must be always greater than zero.
     * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
     * - `delay`: The number of block after voting has ended in approval and this should be
     *   enacted. This doesn't have a minimum amount.
     * 
     * Emits `Started`.
     * 
     * Weight: `O(1)`
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.fast_track') === '27cb200e922e485b41e3150b3d7bf5e8624346f6ff1d78601373ba3d80689c89'
    }

    /**
     * Schedule the currently externally-proposed majority-carries referendum to be tabled
     * immediately. If there is no externally-proposed referendum currently, or if there is one
     * but it is not a majority-carries referendum then it fails.
     * 
     * The dispatch of this call must be `FastTrackOrigin`.
     * 
     * - `proposal_hash`: The hash of the current external proposal.
     * - `voting_period`: The period that is allowed for voting on this proposal.
     * 	Must be always greater than zero.
     * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
     * - `delay`: The number of block after voting has ended in approval and this should be
     *   enacted. This doesn't have a minimum amount.
     * 
     * Emits `Started`.
     * 
     * Weight: `O(1)`
     */
    get asV9300(): {proposalHash: Uint8Array, votingPeriod: number, delay: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNoteImminentPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_imminent_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register the preimage for an upcoming proposal. This requires the proposal to be
     * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
     * the preimage has not been uploaded before and matches some imminent proposal,
     * no fee is paid.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Register the preimage for an upcoming proposal. This requires the proposal to be
     * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
     * the preimage has not been uploaded before and matches some imminent proposal,
     * no fee is paid.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get asV9300(): {encodedProposal: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNoteImminentPreimageOperationalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_imminent_preimage_operational')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.note_imminent_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asV9300(): {encodedProposal: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     * in the dispatch queue but does require a deposit, returned once enacted.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
     * in the dispatch queue but does require a deposit, returned once enacted.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `encoded_proposal`: The preimage of a proposal.
     * 
     * Emits `PreimageNoted`.
     * 
     * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
     */
    get asV9300(): {encodedProposal: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyNotePreimageOperationalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.note_preimage_operational')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.note_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
    }

    /**
     * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    get asV9300(): {encodedProposal: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     * 
     * Weight: `O(p)`
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.propose') === '99f964e94c86db2029fab3e54a9230e36fe7533d252b5ecbc36f16c06e11f18b'
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     * 
     * Weight: `O(p)`
     */
    get asV9300(): {proposalHash: Uint8Array, value: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Democracy.propose') === 'db924825c9fd40cb04a839b510db55dcdd425c7b06116ccd22d4834d1201e8db'
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     */
    get asV9310(): {proposal: v9310.Bounded, value: bigint} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyReapPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.reap_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove an expired proposal preimage and collect the deposit.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `proposal_hash`: The preimage hash of a proposal.
     * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
     *   weighted according to this value with no refund.
     * 
     * This will only work after `VotingPeriod` blocks from the time that the preimage was
     * noted, if it's the same account doing it. If it's a different account, then it'll only
     * work an additional `EnactmentPeriod` later.
     * 
     * Emits `PreimageReaped`.
     * 
     * Weight: `O(D)` where D is length of proposal.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.reap_preimage') === '23573ffc912e8a31889875352d3543e4538e2f3beb6a89ef86d10cf1cb8b7aca'
    }

    /**
     * Remove an expired proposal preimage and collect the deposit.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `proposal_hash`: The preimage hash of a proposal.
     * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
     *   weighted according to this value with no refund.
     * 
     * This will only work after `VotingPeriod` blocks from the time that the preimage was
     * noted, if it's the same account doing it. If it's a different account, then it'll only
     * work an additional `EnactmentPeriod` later.
     * 
     * Emits `PreimageReaped`.
     * 
     * Weight: `O(D)` where D is length of proposal.
     */
    get asV9300(): {proposalHash: Uint8Array, proposalLenUpperBound: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveOtherVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_other_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '43d317508cc3ba04dcadb411eb6499f25532d64ab5a169b27410116c72f40a26'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV9300(): {target: v9300.MultiAddress, index: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV9300(): {index: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracySecondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.second')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
     *   proposal. Extrinsic is weighted according to this value with no refund.
     * 
     * Weight: `O(S)` where S is the number of seconds a proposal already has.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.second') === 'abe1357aae784eefd21f6999076deb6cfbc92fcb9e80c21e93a944ceb739423c'
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
     *   proposal. Extrinsic is weighted according to this value with no refund.
     * 
     * Weight: `O(S)` where S is the number of seconds a proposal already has.
     */
    get asV9300(): {proposal: number, secondsUpperBound: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Democracy.second') === '7ac80a800d6686f21181e7b5b45c8949dc5b807bc6ec111188c7c6850a21b898'
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     */
    get asV9310(): {proposal: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUndelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.undelegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUnlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.unlock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.unlock') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get asV9300(): {target: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVetoExternalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.veto_external')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Veto and blacklist the external proposal hash.
     * 
     * The dispatch origin of this call must be `VetoOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     * Emits `Vetoed`.
     * 
     * Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.veto_external') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Veto and blacklist the external proposal hash.
     * 
     * The dispatch origin of this call must be `VetoOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     * Emits `Vetoed`.
     * 
     * Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get asV9300(): {proposalHash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get asV9300(): {refIndex: number, vote: v9300.AccountVote} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class GiltPlaceBidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Gilt.place_bid')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Place a bid for a gilt to be issued.
     * 
     * Origin must be Signed, and account must have at least `amount` in free balance.
     * 
     * - `amount`: The amount of the bid; these funds will be reserved. If the bid is
     * successfully elevated into an issued gilt, then these funds will continue to be
     * reserved until the gilt expires. Must be at least `MinFreeze`.
     * - `duration`: The number of periods for which the funds will be locked if the gilt is
     * issued. It will expire only after this period has elapsed after the point of issuance.
     * Must be greater than 1 and no more than `QueueCount`.
     * 
     * Complexities:
     * - `Queues[duration].len()` (just take max).
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Gilt.place_bid') === 'a3c04aee6fb2869525c82baa3cce1aa56677672cb0687b0ebdf99955755806a3'
    }

    /**
     * Place a bid for a gilt to be issued.
     * 
     * Origin must be Signed, and account must have at least `amount` in free balance.
     * 
     * - `amount`: The amount of the bid; these funds will be reserved. If the bid is
     * successfully elevated into an issued gilt, then these funds will continue to be
     * reserved until the gilt expires. Must be at least `MinFreeze`.
     * - `duration`: The number of periods for which the funds will be locked if the gilt is
     * issued. It will expire only after this period has elapsed after the point of issuance.
     * Must be greater than 1 and no more than `QueueCount`.
     * 
     * Complexities:
     * - `Queues[duration].len()` (just take max).
     */
    get asV9300(): {amount: bigint, duration: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class GiltRetractBidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Gilt.retract_bid')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Retract a previously placed bid.
     * 
     * Origin must be Signed, and the account should have previously issued a still-active bid
     * of `amount` for `duration`.
     * 
     * - `amount`: The amount of the previous bid.
     * - `duration`: The duration of the previous bid.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Gilt.retract_bid') === 'a3c04aee6fb2869525c82baa3cce1aa56677672cb0687b0ebdf99955755806a3'
    }

    /**
     * Retract a previously placed bid.
     * 
     * Origin must be Signed, and the account should have previously issued a still-active bid
     * of `amount` for `duration`.
     * 
     * - `amount`: The amount of the previous bid.
     * - `duration`: The duration of the previous bid.
     */
    get asV9300(): {amount: bigint, duration: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class GiltSetTargetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Gilt.set_target')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set target proportion of gilt-funds.
     * 
     * Origin must be `AdminOrigin`.
     * 
     * - `target`: The target proportion of effective issued funds that should be under gilts
     * at any one time.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Gilt.set_target') === '2e027e3600f85685d81d212c5c93cce493cc8a6bcf0c71379270b50c3ac08975'
    }

    /**
     * Set target proportion of gilt-funds.
     * 
     * Origin must be `AdminOrigin`.
     * 
     * - `target`: The target proportion of effective issued funds that should be under gilts
     * at any one time.
     */
    get asV9300(): {target: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class GiltThawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Gilt.thaw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove an active but expired gilt. Reserved funds under gilt are freed and balance is
     * adjusted to ensure that the funds grow or shrink to maintain the equivalent proportion
     * of effective total issued funds.
     * 
     * Origin must be Signed and the account must be the owner of the gilt of the given index.
     * 
     * - `index`: The index of the gilt to be thawed.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Gilt.thaw') === 'bd48b3528cf076be92c4c1f55a0268722184f1034de8ccfa09ac565bef81fa17'
    }

    /**
     * Remove an active but expired gilt. Reserved funds under gilt are freed and balance is
     * adjusted to ensure that the funds grow or shrink to maintain the equivalent proportion
     * of effective total issued funds.
     * 
     * Origin must be Signed and the account must be the owner of the gilt of the given index.
     * 
     * - `index`: The index of the gilt to be thawed.
     */
    get asV9300(): {index: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaNoteStalledCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.note_stalled')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Note that the current authority set of the GRANDPA finality gadget has
     * stalled. This will trigger a forced authority set change at the beginning
     * of the next session, to be enacted `delay` blocks after that. The delay
     * should be high enough to safely assume that the block signalling the
     * forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
     * will start the new authority set using the given finalized block as base.
     * Only callable by root.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Grandpa.note_stalled') === '6bb454c2ae9db6ee64dc7f433f0fd3b839727f70c6c835943383346896272c40'
    }

    /**
     * Note that the current authority set of the GRANDPA finality gadget has
     * stalled. This will trigger a forced authority set change at the beginning
     * of the next session, to be enacted `delay` blocks after that. The delay
     * should be high enough to safely assume that the block signalling the
     * forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
     * will start the new authority set using the given finalized block as base.
     * Only callable by root.
     */
    get asV9190(): {delay: number, bestFinalizedBlockNumber: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportEquivocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_equivocation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    get asV9190(): {equivocationProof: v9190.Type_218, keyOwnerProof: v9190.MembershipProof} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportEquivocationUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_equivocation_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     * 
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation_unsigned') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     * 
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    get asV9190(): {equivocationProof: v9190.Type_218, keyOwnerProof: v9190.MembershipProof} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class HrmpForceCleanHrmpCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Hrmp.force_clean_hrmp')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * This extrinsic triggers the cleanup of all the HRMP storage items that
     * a para may have. Normally this happens once per session, but this allows
     * you to trigger the cleanup immediately for a specific parachain.
     * 
     * Origin must be Root.
     * 
     * Number of inbound and outbound channels for `para` must be provided as witness data of weighing.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Hrmp.force_clean_hrmp') === '6d445266a2edc9bbe1d2186a1974f7f3f588ab7369e71b81eff7ef89b2fd7a57'
    }

    /**
     * This extrinsic triggers the cleanup of all the HRMP storage items that
     * a para may have. Normally this happens once per session, but this allows
     * you to trigger the cleanup immediately for a specific parachain.
     * 
     * Origin must be Root.
     * 
     * Number of inbound and outbound channels for `para` must be provided as witness data of weighing.
     */
    get asV9190(): {para: number, inbound: number, outbound: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class HrmpForceOpenHrmpChannelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Hrmp.force_open_hrmp_channel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Open a channel from a `sender` to a `recipient` `ParaId` using the Root origin. Although
     * opened by Root, the `max_capacity` and `max_message_size` are still subject to the Relay
     * Chain's configured limits.
     * 
     * Expected use is when one of the `ParaId`s involved in the channel is governed by the
     * Relay Chain, e.g. a common good parachain.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Hrmp.force_open_hrmp_channel') === '1d371021acfdf0ba68e1334173a7b34a1c083269c2b7e3f6024692dbd7118650'
    }

    /**
     * Open a channel from a `sender` to a `recipient` `ParaId` using the Root origin. Although
     * opened by Root, the `max_capacity` and `max_message_size` are still subject to the Relay
     * Chain's configured limits.
     * 
     * Expected use is when one of the `ParaId`s involved in the channel is governed by the
     * Relay Chain, e.g. a common good parachain.
     */
    get asV9310(): {sender: number, recipient: number, maxCapacity: number, maxMessageSize: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class HrmpForceProcessHrmpCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Hrmp.force_process_hrmp_close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force process HRMP close channel requests.
     * 
     * If there are pending HRMP close channel requests, you can use this
     * function process all of those requests immediately.
     * 
     * Total number of closing channels must be provided as witness data of weighing.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Hrmp.force_process_hrmp_close') === 'bbff5b4312625000db819c8e43a5a33d24b00331be3f9e0e32c792eca6dd854c'
    }

    /**
     * Force process HRMP close channel requests.
     * 
     * If there are pending HRMP close channel requests, you can use this
     * function process all of those requests immediately.
     * 
     * Total number of closing channels must be provided as witness data of weighing.
     */
    get asV9190(): {channels: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class HrmpForceProcessHrmpOpenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Hrmp.force_process_hrmp_open')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force process HRMP open channel requests.
     * 
     * If there are pending HRMP open channel requests, you can use this
     * function process all of those requests immediately.
     * 
     * Total number of opening channels must be provided as witness data of weighing.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Hrmp.force_process_hrmp_open') === 'bbff5b4312625000db819c8e43a5a33d24b00331be3f9e0e32c792eca6dd854c'
    }

    /**
     * Force process HRMP open channel requests.
     * 
     * If there are pending HRMP open channel requests, you can use this
     * function process all of those requests immediately.
     * 
     * Total number of opening channels must be provided as witness data of weighing.
     */
    get asV9190(): {channels: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class HrmpHrmpAcceptOpenChannelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Hrmp.hrmp_accept_open_channel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Accept a pending open channel request from the given sender.
     * 
     * The channel will be opened only on the next session boundary.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Hrmp.hrmp_accept_open_channel') === 'df73c5e1f40e14fb4e0ca9c4be4018d011ed0be4cb058df95899088220820d15'
    }

    /**
     * Accept a pending open channel request from the given sender.
     * 
     * The channel will be opened only on the next session boundary.
     */
    get asV9190(): {sender: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class HrmpHrmpCancelOpenRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Hrmp.hrmp_cancel_open_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * This cancels a pending open channel request. It can be canceled by either of the sender
     * or the recipient for that request. The origin must be either of those.
     * 
     * The cancellation happens immediately. It is not possible to cancel the request if it is
     * already accepted.
     * 
     * Total number of open requests (i.e. `HrmpOpenChannelRequestsList`) must be provided as
     * witness data.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Hrmp.hrmp_cancel_open_request') === '1a7a633e43ca10d6015d9e560d206e2f2add06f22aae354dda82e8d74806ff9b'
    }

    /**
     * This cancels a pending open channel request. It can be canceled by either of the sender
     * or the recipient for that request. The origin must be either of those.
     * 
     * The cancellation happens immediately. It is not possible to cancel the request if it is
     * already accepted.
     * 
     * Total number of open requests (i.e. `HrmpOpenChannelRequestsList`) must be provided as
     * witness data.
     */
    get asV9190(): {channelId: v9190.HrmpChannelId, openRequests: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class HrmpHrmpCloseChannelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Hrmp.hrmp_close_channel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Initiate unilateral closing of a channel. The origin must be either the sender or the
     * recipient in the channel being closed.
     * 
     * The closure can only happen on a session change.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Hrmp.hrmp_close_channel') === '275d8119c62cb1d6786e5fa90c24e50e47fd498185b8f9c73010e74bdbd984cd'
    }

    /**
     * Initiate unilateral closing of a channel. The origin must be either the sender or the
     * recipient in the channel being closed.
     * 
     * The closure can only happen on a session change.
     */
    get asV9190(): {channelId: v9190.HrmpChannelId} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class HrmpHrmpInitOpenChannelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Hrmp.hrmp_init_open_channel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Initiate opening a channel from a parachain to a given recipient with given channel
     * parameters.
     * 
     * - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
     * - `proposed_max_message_size` - specifies the maximum size of the messages.
     * 
     * These numbers are a subject to the relay-chain configuration limits.
     * 
     * The channel can be opened only after the recipient confirms it and only on a session
     * change.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Hrmp.hrmp_init_open_channel') === 'c78d4e6da3f70d8bb4c2c00861e72fb4233df808203d0f148f572b5e16e04f71'
    }

    /**
     * Initiate opening a channel from a parachain to a given recipient with given channel
     * parameters.
     * 
     * - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
     * - `proposed_max_message_size` - specifies the maximum size of the messages.
     * 
     * These numbers are a subject to the relay-chain configuration limits.
     * 
     * The channel can be opened only after the recipient confirms it and only on a session
     * change.
     */
    get asV9190(): {recipient: number, proposedMaxCapacity: number, proposedMaxMessageSize: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityAddRegistrarCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.add_registrar')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a registrar to the system.
     * 
     * The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     * - `account`: the account of the registrar.
     * 
     * Emits `RegistrarAdded` if successful.
     * 
     * # <weight>
     * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     * - One storage mutation (codec `O(R)`).
     * - One event.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.add_registrar') === '2842be90a4599435dbefe83c28be9576bf64e6ff14aa9fa87c5fdb6255ef27b2'
    }

    /**
     * Add a registrar to the system.
     * 
     * The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     * - `account`: the account of the registrar.
     * 
     * Emits `RegistrarAdded` if successful.
     * 
     * # <weight>
     * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     * - One storage mutation (codec `O(R)`).
     * - One event.
     * # </weight>
     */
    get asV9300(): {account: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityAddSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.add_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add the given account to the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.add_sub') === 'b7d02496580d984a1a588630bfbf580f423f08a761006f8706b057ac73069a38'
    }

    /**
     * Add the given account to the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV9300(): {sub: v9300.MultiAddress, data: v9300.Data} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityCancelRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.cancel_request')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a previous request.
     * 
     * Payment: A previously reserved deposit is returned on success.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     * Emits `JudgementUnrequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - One storage mutation `O(R + X)`.
     * - One event
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.cancel_request') === '89d659d6a17ba36d0dfc7c90a7f043581d7fe980043895169d7dda1416ff7e5b'
    }

    /**
     * Cancel a previous request.
     * 
     * Payment: A previously reserved deposit is returned on success.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     * Emits `JudgementUnrequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - One storage mutation `O(R + X)`.
     * - One event
     * # </weight>
     */
    get asV9300(): {regIndex: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityClearIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.clear_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     * Payment: All reserved balances on the account are returned.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * Emits `IdentityCleared` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`
     *   - where `R` registrar-count (governance-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     * - One balance-unreserve operation.
     * - `2` storage reads and `S + 2` storage deletions.
     * - One event.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     * Payment: All reserved balances on the account are returned.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * Emits `IdentityCleared` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`
     *   - where `R` registrar-count (governance-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     * - One balance-unreserve operation.
     * - `2` storage reads and `S + 2` storage deletions.
     * - One event.
     * # </weight>
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityKillIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.kill_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove an account's identity and sub-account information and slash the deposits.
     * 
     * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     * `Slash`. Verification request deposits are not returned; they should be cancelled
     * manually using `cancel_request`.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * 
     * Emits `IdentityKilled` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`.
     * - One balance-reserve operation.
     * - `S + 2` storage mutations.
     * - One event.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.kill_identity') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
    }

    /**
     * Remove an account's identity and sub-account information and slash the deposits.
     * 
     * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     * `Slash`. Verification request deposits are not returned; they should be cancelled
     * manually using `cancel_request`.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * 
     * Emits `IdentityKilled` if successful.
     * 
     * # <weight>
     * - `O(R + S + X)`.
     * - One balance-reserve operation.
     * - `S + 2` storage mutations.
     * - One event.
     * # </weight>
     */
    get asV9300(): {target: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityProvideJudgementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.provide_judgement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Provide a judgement for an account's identity.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `reg_index`.
     * 
     * - `reg_index`: the index of the registrar whose judgement is being made.
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
     * 
     * Emits `JudgementGiven` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-transfer operation.
     * - Up to one account-lookup operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     * - One event.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.provide_judgement') === '293a16f5e8f521553f92204e3de7063fafc7905d71ca7812337b8bc6e200bcf9'
    }

    /**
     * Provide a judgement for an account's identity.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `reg_index`.
     * 
     * - `reg_index`: the index of the registrar whose judgement is being made.
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
     * 
     * Emits `JudgementGiven` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-transfer operation.
     * - Up to one account-lookup operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
     * - One event.
     * # </weight>
     */
    get asV9300(): {regIndex: number, target: v9300.MultiAddress, judgement: v9300.Judgement, identity: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityQuitSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.quit_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the sender as a sub-account.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender (*not* the original depositor).
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * super-identity.
     * 
     * NOTE: This should not normally be used, but is provided in the case that the non-
     * controller of an account is maliciously registered as a sub-account.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.quit_sub') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the sender as a sub-account.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender (*not* the original depositor).
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * super-identity.
     * 
     * NOTE: This should not normally be used, but is provided in the case that the non-
     * controller of an account is maliciously registered as a sub-account.
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRemoveSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.remove_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the given account from the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.remove_sub') === 'e2fd2e12228143db75d1c9482d7788894e6f224b6c362b650b73ac996f701805'
    }

    /**
     * Remove the given account from the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV9300(): {sub: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRenameSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.rename_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === 'b7d02496580d984a1a588630bfbf580f423f08a761006f8706b057ac73069a38'
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asV9300(): {sub: v9300.MultiAddress, data: v9300.Data} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRequestJudgementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.request_judgement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request a judgement from a registrar.
     * 
     * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     * given.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is requested.
     * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     * ```nocompile
     * Self::registrars().get(reg_index).unwrap().fee
     * ```
     * 
     * Emits `JudgementRequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
     * - One event.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.request_judgement') === 'c6336282cbe5b8ccf3769cc13c92f532be2499335e3d52ebf566a888e92b5b7c'
    }

    /**
     * Request a judgement from a registrar.
     * 
     * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     * given.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is requested.
     * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     * ```nocompile
     * Self::registrars().get(reg_index).unwrap().fee
     * ```
     * 
     * Emits `JudgementRequested` if successful.
     * 
     * # <weight>
     * - `O(R + X)`.
     * - One balance-reserve operation.
     * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
     * - One event.
     * # </weight>
     */
    get asV9300(): {regIndex: number, maxFee: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetAccountIdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_account_id')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the account associated with a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `new`: the new account ID.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.set_account_id') === '7c569a09ae3438c742df387f66c9e012ebdf2af1dfe1befa9aba3df316cee1aa'
    }

    /**
     * Change the account associated with a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `new`: the new account ID.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
     * # </weight>
     */
    get asV9300(): {index: number, new: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the fee required for a judgement to be requested from a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fee`: the new fee.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.set_fee') === '6418458414c3cef3d5c80c88232d781e76733c675303b2937b9cd30ae58d0fe4'
    }

    /**
     * Set the fee required for a judgement to be requested from a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fee`: the new fee.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
     * # </weight>
     */
    get asV9300(): {index: number, fee: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetFieldsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_fields')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the field information for a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fields`: the fields that the registrar concerns themselves with.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.set_fields') === 'b2c8998acd304e28e4f4a78e6a07f5bf7caf587532734dbd94b85c01a31c3e13'
    }

    /**
     * Set the field information for a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fields`: the fields that the registrar concerns themselves with.
     * 
     * # <weight>
     * - `O(R)`.
     * - One storage mutation `O(R)`.
     * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
     * # </weight>
     */
    get asV9300(): {index: number, fields: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_identity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set an account's identity information and reserve the appropriate deposit.
     * 
     * If the account already has identity information, the deposit is taken as part payment
     * for the new deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `info`: The identity information.
     * 
     * Emits `IdentitySet` if successful.
     * 
     * # <weight>
     * - `O(X + X' + R)`
     *   - where `X` additional-field-count (deposit-bounded and code-bounded)
     *   - where `R` judgements-count (registrar-count-bounded)
     * - One balance reserve operation.
     * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     * - One event.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
    }

    /**
     * Set an account's identity information and reserve the appropriate deposit.
     * 
     * If the account already has identity information, the deposit is taken as part payment
     * for the new deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `info`: The identity information.
     * 
     * Emits `IdentitySet` if successful.
     * 
     * # <weight>
     * - `O(X + X' + R)`
     *   - where `X` additional-field-count (deposit-bounded and code-bounded)
     *   - where `R` judgements-count (registrar-count-bounded)
     * - One balance reserve operation.
     * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
     * - One event.
     * # </weight>
     */
    get asV9300(): {info: v9300.IdentityInfo} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetSubsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_subs')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the sub-accounts of the sender.
     * 
     * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * - `subs`: The identity's (new) sub-accounts.
     * 
     * # <weight>
     * - `O(P + S)`
     *   - where `P` old-subs-count (hard- and deposit-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     * - At most one balance operations.
     * - DB:
     *   - `P + S` storage mutations (codec complexity `O(1)`)
     *   - One storage read (codec complexity `O(P)`).
     *   - One storage write (codec complexity `O(S)`).
     *   - One storage-exists (`IdentityOf::contains_key`).
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Identity.set_subs') === 'f156a100857e71b9e1eab839801795e8569b63b49f6c30333c5bf12811cbbe73'
    }

    /**
     * Set the sub-accounts of the sender.
     * 
     * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * - `subs`: The identity's (new) sub-accounts.
     * 
     * # <weight>
     * - `O(P + S)`
     *   - where `P` old-subs-count (hard- and deposit-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     * - At most one balance operations.
     * - DB:
     *   - `P + S` storage mutations (codec complexity `O(1)`)
     *   - One storage read (codec complexity `O(P)`).
     *   - One storage write (codec complexity `O(S)`).
     *   - One storage-exists (`IdentityOf::contains_key`).
     * # </weight>
     */
    get asV9300(): {subs: [Uint8Array, v9300.Data][]} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ImOnlineHeartbeatCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ImOnline.heartbeat')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * # <weight>
     * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is
     *   length of `heartbeat.network_state.external_address`
     *   - `O(K)`: decoding of length `K`
     *   - `O(E)`: decoding/encoding of length `E`
     * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *   `ReceivedHeartbeats`
     * - DbWrites: `ReceivedHeartbeats`
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ImOnline.heartbeat') === 'ceb066f24cc1efdb862584018e591b1046da22acdc1c7daf8270a6f6f31baffe'
    }

    /**
     * # <weight>
     * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is
     *   length of `heartbeat.network_state.external_address`
     *   - `O(K)`: decoding of length `K`
     *   - `O(E)`: decoding/encoding of length `E`
     * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *   `ReceivedHeartbeats`
     * - DbWrites: `ReceivedHeartbeats`
     * # </weight>
     */
    get asV9190(): {heartbeat: v9190.Heartbeat, signature: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class IndicesClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Indices.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Assign an previously unassigned index.
     * 
     * Payment: `Deposit` is reserved from the sender account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `index`: the index to be claimed. This must not be in use.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - One reserve operation.
     * - One event.
     * -------------------
     * - DB Weight: 1 Read/Write (Accounts)
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Indices.claim') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Assign an previously unassigned index.
     * 
     * Payment: `Deposit` is reserved from the sender account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `index`: the index to be claimed. This must not be in use.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - One reserve operation.
     * - One event.
     * -------------------
     * - DB Weight: 1 Read/Write (Accounts)
     * # </weight>
     */
    get asV9190(): {index: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class IndicesForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Indices.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force an index to an account. This doesn't require a deposit. If the index is already
     * held, then any deposit is reimbursed to its current owner.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `index`: the index to be (re-)assigned.
     * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - Up to one reserve operation.
     * - One event.
     * -------------------
     * - DB Weight:
     *    - Reads: Indices Accounts, System Account (original owner)
     *    - Writes: Indices Accounts, System Account (original owner)
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Indices.force_transfer') === 'c512e4f612c8bf235b4e49fd86b93323981d8379e84e47bd23e3718caf3df8b7'
    }

    /**
     * Force an index to an account. This doesn't require a deposit. If the index is already
     * held, then any deposit is reimbursed to its current owner.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `index`: the index to be (re-)assigned.
     * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - Up to one reserve operation.
     * - One event.
     * -------------------
     * - DB Weight:
     *    - Reads: Indices Accounts, System Account (original owner)
     *    - Writes: Indices Accounts, System Account (original owner)
     * # </weight>
     */
    get asV9190(): {new: Uint8Array, index: number, freeze: boolean} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Force an index to an account. This doesn't require a deposit. If the index is already
     * held, then any deposit is reimbursed to its current owner.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `index`: the index to be (re-)assigned.
     * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - Up to one reserve operation.
     * - One event.
     * -------------------
     * - DB Weight:
     *    - Reads: Indices Accounts, System Account (original owner)
     *    - Writes: Indices Accounts, System Account (original owner)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Indices.force_transfer') === 'e61051df8d4f14c6b048e5350fce76049ca6bdcd7144bea9248526afc7efad04'
    }

    /**
     * Force an index to an account. This doesn't require a deposit. If the index is already
     * held, then any deposit is reimbursed to its current owner.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `index`: the index to be (re-)assigned.
     * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - Up to one reserve operation.
     * - One event.
     * -------------------
     * - DB Weight:
     *    - Reads: Indices Accounts, System Account (original owner)
     *    - Writes: Indices Accounts, System Account (original owner)
     * # </weight>
     */
    get asV9300(): {new: v9300.MultiAddress, index: number, freeze: boolean} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class IndicesFreeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Indices.free')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Free up an index owned by the sender.
     * 
     * Payment: Any previous deposit placed for the index is unreserved in the sender account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must own the index.
     * 
     * - `index`: the index to be freed. This must be owned by the sender.
     * 
     * Emits `IndexFreed` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - One reserve operation.
     * - One event.
     * -------------------
     * - DB Weight: 1 Read/Write (Accounts)
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Indices.free') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Free up an index owned by the sender.
     * 
     * Payment: Any previous deposit placed for the index is unreserved in the sender account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must own the index.
     * 
     * - `index`: the index to be freed. This must be owned by the sender.
     * 
     * Emits `IndexFreed` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - One reserve operation.
     * - One event.
     * -------------------
     * - DB Weight: 1 Read/Write (Accounts)
     * # </weight>
     */
    get asV9190(): {index: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class IndicesFreezeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Indices.freeze')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Freeze an index so it will always point to the sender account. This consumes the
     * deposit.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must have a
     * non-frozen account `index`.
     * 
     * - `index`: the index to be frozen in place.
     * 
     * Emits `IndexFrozen` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - Up to one slash operation.
     * - One event.
     * -------------------
     * - DB Weight: 1 Read/Write (Accounts)
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Indices.freeze') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Freeze an index so it will always point to the sender account. This consumes the
     * deposit.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must have a
     * non-frozen account `index`.
     * 
     * - `index`: the index to be frozen in place.
     * 
     * Emits `IndexFrozen` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - Up to one slash operation.
     * - One event.
     * -------------------
     * - DB Weight: 1 Read/Write (Accounts)
     * # </weight>
     */
    get asV9190(): {index: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class IndicesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Indices.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Assign an index already owned by the sender to another account. The balance reservation
     * is effectively transferred to the new account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `index`: the index to be re-assigned. This must be owned by the sender.
     * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - One transfer operation.
     * - One event.
     * -------------------
     * - DB Weight:
     *    - Reads: Indices Accounts, System Account (recipient)
     *    - Writes: Indices Accounts, System Account (recipient)
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Indices.transfer') === 'fb7b2e881b4e1febd039cce6ff2d158ae42a8e4ab080ad01ff5d71477b8a690a'
    }

    /**
     * Assign an index already owned by the sender to another account. The balance reservation
     * is effectively transferred to the new account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `index`: the index to be re-assigned. This must be owned by the sender.
     * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - One transfer operation.
     * - One event.
     * -------------------
     * - DB Weight:
     *    - Reads: Indices Accounts, System Account (recipient)
     *    - Writes: Indices Accounts, System Account (recipient)
     * # </weight>
     */
    get asV9190(): {new: Uint8Array, index: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Assign an index already owned by the sender to another account. The balance reservation
     * is effectively transferred to the new account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `index`: the index to be re-assigned. This must be owned by the sender.
     * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - One transfer operation.
     * - One event.
     * -------------------
     * - DB Weight:
     *    - Reads: Indices Accounts, System Account (recipient)
     *    - Writes: Indices Accounts, System Account (recipient)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Indices.transfer') === 'c77fd2a50503781496b2edd730058264c58263dc5c6bcc3ed1bbc824532517e4'
    }

    /**
     * Assign an index already owned by the sender to another account. The balance reservation
     * is effectively transferred to the new account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `index`: the index to be re-assigned. This must be owned by the sender.
     * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
     * 
     * Emits `IndexAssigned` if successful.
     * 
     * # <weight>
     * - `O(1)`.
     * - One storage mutation (codec `O(1)`).
     * - One transfer operation.
     * - One event.
     * -------------------
     * - DB Weight:
     *    - Reads: Indices Accounts, System Account (recipient)
     *    - Writes: Indices Accounts, System Account (recipient)
     * # </weight>
     */
    get asV9300(): {new: v9300.MultiAddress, index: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class InitializerForceApproveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Initializer.force_approve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Issue a signal to the consensus engine to forcibly act as though all parachain
     * blocks in all relay chain blocks up to and including the given number in the current
     * chain are valid and should be finalized.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Initializer.force_approve') === 'aa2b79ecc12cda7c6325357609f0dde737428c5b092dab0769d4e105b22bd955'
    }

    /**
     * Issue a signal to the consensus engine to forcibly act as though all parachain
     * blocks in all relay chain blocks up to and including the given number in the current
     * chain are valid and should be finalized.
     */
    get asV9190(): {upTo: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class MembershipAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Membership.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Membership.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV9190(): {who: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class MembershipChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Membership.change_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Membership.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV9190(): {new: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class MembershipClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Membership.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Membership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV9190(): null {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class MembershipRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Membership.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Membership.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV9190(): {who: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class MembershipResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Membership.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Membership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get asV9190(): {members: Uint8Array[]} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class MembershipSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Membership.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Membership.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV9190(): {who: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class MembershipSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Membership.swap_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Membership.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV9190(): {remove: Uint8Array, add: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigApproveAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.approve_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === '615a5baaaa889f9e30839c70485b8c752e5eb050a85a23102b2f9f4c301be63a'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get asV9190(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v9190.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === 'af4617697c04ce56b4748943a851b51ff5b80d64991c7ecf495a4651ff57debb'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get asV9300(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v9300.Timepoint | undefined), callHash: Uint8Array, maxWeight: v9300.Weight} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === '88561668497d8fdee3be21d28e6e68bc1cd9568f418501a4b294fe2b9803acb4'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    get asV9310(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v9310.Timepoint | undefined), callHash: Uint8Array, maxWeight: v9310.Weight} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '548dea53ff79fe99438cf591950a533c93f9772d03a3995ec72a80376fcae222'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get asV9190(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v9190.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'f62d383b8db5d9025f2e3e98181c8439346292d755afd9729e7168a703e7be01'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    get asV9300(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v9300.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: v9300.Weight} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'ded979dbe1e8697c6866bef798b4dd1d67b2c3437e96d4e24219494b5bec1d35'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV9310(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v9310.Timepoint | undefined), call: v9310.Call, maxWeight: v9310.Weight} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'cc3fa1bb68095aa4de2a51f786ba1681bb29751ac234ef6a9013e249e5955a6d'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV9321(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v9321.Timepoint | undefined), call: v9321.Call, maxWeight: v9321.Weight} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '51c975fd45c5186a4e54e9dc6e12c4a4b90919a2567d8fe2e67d23ec0c008c3a'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV9370(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v9370.Timepoint | undefined), call: v9370.Call, maxWeight: v9370.Weight} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiThreshold1Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi_threshold_1')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'd8a1f88da441c0d497c7385a0c0af8d4016a82ed51e77756766f4654d022f469'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV9190(): {otherSignatories: Uint8Array[], call: v9190.Call} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'dd64b5210cff916fd5187ef737bd78effe2a5dd07f6720dfd12bf7fdf89bf675'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV9220(): {otherSignatories: Uint8Array[], call: v9220.Call} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'c2e0b65ddbb36b6bfd9ea59e120a9a8e809f2c5ff5aa30d62573450ce5a193a9'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV9250(): {otherSignatories: Uint8Array[], call: v9250.Call} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'ca4c8377b0b700fcdbea48b65a9acbb5b02d3696b40953a7ecd6240f8d417cf5'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV9300(): {otherSignatories: Uint8Array[], call: v9300.Call} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '5c99b9e5062b682fbc7c1c08ab8b22590841dba56ab68bc9ee38d9af04bc211a'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV9310(): {otherSignatories: Uint8Array[], call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'e076184c868b86543a994fb459d3a17752704e9cf8024cee2ee833c000c92633'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV9321(): {otherSignatories: Uint8Array[], call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '00d8d5df5c3c00c6dfebf605d9cf4f1f37948001ae72cb2eb3a1044bae77b309'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV9370(): {otherSignatories: Uint8Array[], call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigCancelAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.cancel_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Multisig.cancel_as_multi') === '4ccc75a4f739c659f177e3df98fba2ea59ddade74c4ebccd51b2fc4c52e923af'
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     * # </weight>
     */
    get asV9190(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v9190.Timepoint, callHash: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class NisFundDeficitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Nis.fund_deficit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Ensure we have sufficient funding for all potential payouts.
     * 
     * - `origin`: Must be accepted by `FundOrigin`.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Nis.fund_deficit') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Ensure we have sufficient funding for all potential payouts.
     * 
     * - `origin`: Must be accepted by `FundOrigin`.
     */
    get asV9370(): null {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class NisPlaceBidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Nis.place_bid')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Place a bid.
     * 
     * Origin must be Signed, and account must have at least `amount` in free balance.
     * 
     * - `amount`: The amount of the bid; these funds will be reserved, and if/when
     *   consolidated, removed. Must be at least `MinBid`.
     * - `duration`: The number of periods before which the newly consolidated bid may be
     *   thawed. Must be greater than 1 and no more than `QueueCount`.
     * 
     * Complexities:
     * - `Queues[duration].len()` (just take max).
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Nis.place_bid') === 'a3c04aee6fb2869525c82baa3cce1aa56677672cb0687b0ebdf99955755806a3'
    }

    /**
     * Place a bid.
     * 
     * Origin must be Signed, and account must have at least `amount` in free balance.
     * 
     * - `amount`: The amount of the bid; these funds will be reserved, and if/when
     *   consolidated, removed. Must be at least `MinBid`.
     * - `duration`: The number of periods before which the newly consolidated bid may be
     *   thawed. Must be greater than 1 and no more than `QueueCount`.
     * 
     * Complexities:
     * - `Queues[duration].len()` (just take max).
     */
    get asV9370(): {amount: bigint, duration: number} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class NisRetractBidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Nis.retract_bid')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Retract a previously placed bid.
     * 
     * Origin must be Signed, and the account should have previously issued a still-active bid
     * of `amount` for `duration`.
     * 
     * - `amount`: The amount of the previous bid.
     * - `duration`: The duration of the previous bid.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Nis.retract_bid') === 'a3c04aee6fb2869525c82baa3cce1aa56677672cb0687b0ebdf99955755806a3'
    }

    /**
     * Retract a previously placed bid.
     * 
     * Origin must be Signed, and the account should have previously issued a still-active bid
     * of `amount` for `duration`.
     * 
     * - `amount`: The amount of the previous bid.
     * - `duration`: The duration of the previous bid.
     */
    get asV9370(): {amount: bigint, duration: number} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class NisThawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Nis.thaw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Reduce or remove an outstanding receipt, placing the according proportion of funds into
     * the account of the owner.
     * 
     * - `origin`: Must be Signed and the account must be the owner of the receipt `index` as
     *   well as any fungible counterpart.
     * - `index`: The index of the receipt.
     * - `portion`: If `Some`, then only the given portion of the receipt should be thawed. If
     *   `None`, then all of it should be.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Nis.thaw') === '9cb0b40fa157e428896c1e55c9b30a1e6c7ef13d38157b2ef0c4c1b5a927dd59'
    }

    /**
     * Reduce or remove an outstanding receipt, placing the according proportion of funds into
     * the account of the owner.
     * 
     * - `origin`: Must be Signed and the account must be the owner of the receipt `index` as
     *   well as any fungible counterpart.
     * - `index`: The index of the receipt.
     * - `portion`: If `Some`, then only the given portion of the receipt should be thawed. If
     *   `None`, then all of it should be.
     */
    get asV9370(): {index: number, portion: (bigint | undefined)} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class NisCounterpartBalancesForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NisCounterpartBalances.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('NisCounterpartBalances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get asV9370(): {source: v9370.MultiAddress, dest: v9370.MultiAddress, value: bigint} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class NisCounterpartBalancesForceUnreserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NisCounterpartBalances.force_unreserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('NisCounterpartBalances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asV9370(): {who: v9370.MultiAddress, amount: bigint} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class NisCounterpartBalancesSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NisCounterpartBalances.set_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also alter the total issuance of the system (`TotalIssuance`) appropriately.
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('NisCounterpartBalances.set_balance') === 'beb82909d38c015bc075ff8b107e47a02f8772bf5cf681d6cd84ef685e448a8f'
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also alter the total issuance of the system (`TotalIssuance`) appropriately.
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     */
    get asV9370(): {who: v9370.MultiAddress, newFree: bigint, newReserved: bigint} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class NisCounterpartBalancesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NisCounterpartBalances.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     * 
     * # <weight>
     * - Dependent on arguments but not critical, given proper implementations for input config
     *   types. See related functions below.
     * - It contains a limited number of reads and writes internally and no complex
     *   computation.
     * 
     * Related functions:
     * 
     *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *   - Transferring balances to accounts that did not exist before will cause
     *     `T::OnNewAccount::on_new_account` to be called.
     *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *     that the transfer will not kill the origin account.
     * ---------------------------------
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('NisCounterpartBalances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     * 
     * # <weight>
     * - Dependent on arguments but not critical, given proper implementations for input config
     *   types. See related functions below.
     * - It contains a limited number of reads and writes internally and no complex
     *   computation.
     * 
     * Related functions:
     * 
     *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
     *   - Transferring balances to accounts that did not exist before will cause
     *     `T::OnNewAccount::on_new_account` to be called.
     *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *     that the transfer will not kill the origin account.
     * ---------------------------------
     * - Origin account is already in memory, so no DB operations for them.
     * # </weight>
     */
    get asV9370(): {dest: v9370.MultiAddress, value: bigint} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class NisCounterpartBalancesTransferAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NisCounterpartBalances.transfer_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('NisCounterpartBalances.transfer_all') === '9c94c2ca9979f6551af6e123fb6b6ba14d026f862f9a023706f8f88c556b355f'
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true). # <weight>
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     *   #</weight>
     */
    get asV9370(): {dest: v9370.MultiAddress, keepAlive: boolean} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class NisCounterpartBalancesTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'NisCounterpartBalances.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('NisCounterpartBalances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    get asV9370(): {dest: v9370.MultiAddress, value: bigint} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class ParaInherentEnterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParaInherent.enter')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ParaInherent.enter') === 'a9d507be3ededfc111412179310cc428ca61464dbaf93e10505bd1d8f6af4d8e'
    }

    /**
     * Enter the paras inherent. This will process bitfields and backed candidates.
     */
    get asV9190(): {data: v9190.V2InherentData} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasAddTrustedValidationCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Paras.add_trusted_validation_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Adds the validation code to the storage.
     * 
     * The code will not be added if it is already present. Additionally, if PVF pre-checking
     * is running for that code, it will be instantly accepted.
     * 
     * Otherwise, the code will be added into the storage. Note that the code will be added
     * into storage with reference count 0. This is to account the fact that there are no users
     * for this code yet. The caller will have to make sure that this code eventually gets
     * used by some parachain or removed from the storage to avoid storage leaks. For the latter
     * prefer to use the `poke_unused_validation_code` dispatchable to raw storage manipulation.
     * 
     * This function is mainly meant to be used for upgrading parachains that do not follow
     * the go-ahead signal while the PVF pre-checking feature is enabled.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Paras.add_trusted_validation_code') === '0ad78b20451a91789302238ce78bb346eb02be5596707efead661c7e083ab212'
    }

    /**
     * Adds the validation code to the storage.
     * 
     * The code will not be added if it is already present. Additionally, if PVF pre-checking
     * is running for that code, it will be instantly accepted.
     * 
     * Otherwise, the code will be added into the storage. Note that the code will be added
     * into storage with reference count 0. This is to account the fact that there are no users
     * for this code yet. The caller will have to make sure that this code eventually gets
     * used by some parachain or removed from the storage to avoid storage leaks. For the latter
     * prefer to use the `poke_unused_validation_code` dispatchable to raw storage manipulation.
     * 
     * This function is mainly meant to be used for upgrading parachains that do not follow
     * the go-ahead signal while the PVF pre-checking feature is enabled.
     */
    get asV9190(): {validationCode: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasForceNoteNewHeadCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Paras.force_note_new_head')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Note a new block head for para within the context of the current block.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Paras.force_note_new_head') === '630e70696dbb809d3a272dfc9da9bfd0656f82541be24c57ee1c634d2645017c'
    }

    /**
     * Note a new block head for para within the context of the current block.
     */
    get asV9190(): {para: number, newHead: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasForceQueueActionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Paras.force_queue_action')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Put a parachain directly into the next session's action queue.
     * We can't queue it any sooner than this without going into the
     * initializer...
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Paras.force_queue_action') === '0ce4d19bdf40ed1e5a65dd2dbc04fe21b73ba0dc7590c221c3e403e96726dc18'
    }

    /**
     * Put a parachain directly into the next session's action queue.
     * We can't queue it any sooner than this without going into the
     * initializer...
     */
    get asV9190(): {para: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasForceScheduleCodeUpgradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Paras.force_schedule_code_upgrade')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule an upgrade as if it was scheduled in the given relay parent block.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Paras.force_schedule_code_upgrade') === 'a8977843dd9b948a1a0495c6070fe0b2e8b1b4aa07d85a8f196863ca04a03a6b'
    }

    /**
     * Schedule an upgrade as if it was scheduled in the given relay parent block.
     */
    get asV9190(): {para: number, newCode: Uint8Array, relayParentNumber: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasForceSetCurrentCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Paras.force_set_current_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the storage for the parachain validation code immediately.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Paras.force_set_current_code') === '0b5bbf1b361dddb4826c2c1c0065a52b490f97f282bfc036e9cfc8d1934f8139'
    }

    /**
     * Set the storage for the parachain validation code immediately.
     */
    get asV9190(): {para: number, newCode: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasForceSetCurrentHeadCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Paras.force_set_current_head')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the storage for the current parachain head data immediately.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Paras.force_set_current_head') === '630e70696dbb809d3a272dfc9da9bfd0656f82541be24c57ee1c634d2645017c'
    }

    /**
     * Set the storage for the current parachain head data immediately.
     */
    get asV9190(): {para: number, newHead: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasIncludePvfCheckStatementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Paras.include_pvf_check_statement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Includes a statement for a PVF pre-checking vote. Potentially, finalizes the vote and
     * enacts the results if that was the last vote before achieving the supermajority.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Paras.include_pvf_check_statement') === 'ba297981fae49e9a7feef6b5c5946ef2256fa44b2bbba936e20f4e5a433b9b3f'
    }

    /**
     * Includes a statement for a PVF pre-checking vote. Potentially, finalizes the vote and
     * enacts the results if that was the last vote before achieving the supermajority.
     */
    get asV9190(): {stmt: v9190.V2PvfCheckStatement, signature: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasPokeUnusedValidationCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Paras.poke_unused_validation_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the validation code from the storage iff the reference count is 0.
     * 
     * This is better than removing the storage directly, because it will not remove the code
     * that was suddenly got used by some parachain while this dispatchable was pending
     * dispatching.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Paras.poke_unused_validation_code') === '6a0ee0e91dfac4ad12f1a7c0b407204956c918eeb7dbd4d37d9c4c210e9558de'
    }

    /**
     * Remove the validation code from the storage iff the reference count is 0.
     * 
     * This is better than removing the storage directly, because it will not remove the code
     * that was suddenly got used by some parachain while this dispatchable was pending
     * dispatching.
     */
    get asV9190(): {validationCodeHash: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasDisputesForceUnfreezeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParasDisputes.force_unfreeze')
        this._chain = ctx._chain
        this.call = call
    }

    get isV9190(): boolean {
        return this._chain.getCallHash('ParasDisputes.force_unfreeze') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV9190(): null {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasSlashingReportDisputeLostUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParasSlashing.report_dispute_lost_unsigned')
        this._chain = ctx._chain
        this.call = call
    }

    get isV9300(): boolean {
        return this._chain.getCallHash('ParasSlashing.report_dispute_lost_unsigned') === '7ba6f97498e62b4b0aee53d530cb8e51018087d48a0c03cd5bfefe0897be15b6'
    }

    get asV9300(): {disputeProof: v9300.DisputeProof, keyOwnerProof: v9300.MembershipProof} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasSudoWrapperSudoEstablishHrmpChannelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParasSudoWrapper.sudo_establish_hrmp_channel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Forcefully establish a channel from the sender to the recipient.
     * 
     * This is equivalent to sending an `Hrmp::hrmp_init_open_channel` extrinsic followed by
     * `Hrmp::hrmp_accept_open_channel`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ParasSudoWrapper.sudo_establish_hrmp_channel') === '1d371021acfdf0ba68e1334173a7b34a1c083269c2b7e3f6024692dbd7118650'
    }

    /**
     * Forcefully establish a channel from the sender to the recipient.
     * 
     * This is equivalent to sending an `Hrmp::hrmp_init_open_channel` extrinsic followed by
     * `Hrmp::hrmp_accept_open_channel`.
     */
    get asV9190(): {sender: number, recipient: number, maxCapacity: number, maxMessageSize: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasSudoWrapperSudoQueueDownwardXcmCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParasSudoWrapper.sudo_queue_downward_xcm')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a downward XCM to the given para.
     * 
     * The given parachain should exist and the payload should not exceed the preconfigured size
     * `config.max_downward_message_size`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ParasSudoWrapper.sudo_queue_downward_xcm') === 'ed85a4f65e3a8eb05a2bd1d967063c46e309cc02f002b25f19e82e070c514efb'
    }

    /**
     * Send a downward XCM to the given para.
     * 
     * The given parachain should exist and the payload should not exceed the preconfigured size
     * `config.max_downward_message_size`.
     */
    get asV9190(): {id: number, xcm: v9190.VersionedXcm} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a downward XCM to the given para.
     * 
     * The given parachain should exist and the payload should not exceed the preconfigured size
     * `config.max_downward_message_size`.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('ParasSudoWrapper.sudo_queue_downward_xcm') === '6ebd2deab89ff69f0f1f3ef678c2ff6891d6cd1f14a1855c5f027986cebca230'
    }

    /**
     * Send a downward XCM to the given para.
     * 
     * The given parachain should exist and the payload should not exceed the preconfigured size
     * `config.max_downward_message_size`.
     */
    get asV9370(): {id: number, xcm: v9370.VersionedXcm} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasSudoWrapperSudoScheduleParaCleanupCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParasSudoWrapper.sudo_schedule_para_cleanup')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a para to be cleaned up at the start of the next session.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ParasSudoWrapper.sudo_schedule_para_cleanup') === '0fb20b5afc6a2830162f8daea8abc92a50d6411d977d5e83e205bdeb2dcd6598'
    }

    /**
     * Schedule a para to be cleaned up at the start of the next session.
     */
    get asV9190(): {id: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasSudoWrapperSudoScheduleParaInitializeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParasSudoWrapper.sudo_schedule_para_initialize')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a para to be initialized at the start of the next session.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ParasSudoWrapper.sudo_schedule_para_initialize') === '126d161794c8753bebf509c50918b5ec0c2c9f17e213cc5e9603cd5c285e182b'
    }

    /**
     * Schedule a para to be initialized at the start of the next session.
     */
    get asV9190(): {id: number, genesis: v9190.ParaGenesisArgs} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a para to be initialized at the start of the next session.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('ParasSudoWrapper.sudo_schedule_para_initialize') === '7b2d9894d41d92d0c418dc3846e7aae5a4724e2963509885c2b8c3c555d748a2'
    }

    /**
     * Schedule a para to be initialized at the start of the next session.
     */
    get asV9370(): {id: number, genesis: v9370.ParaGenesisArgs} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasSudoWrapperSudoScheduleParachainDowngradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParasSudoWrapper.sudo_schedule_parachain_downgrade')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Downgrade a parachain to a parathread
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ParasSudoWrapper.sudo_schedule_parachain_downgrade') === '0fb20b5afc6a2830162f8daea8abc92a50d6411d977d5e83e205bdeb2dcd6598'
    }

    /**
     * Downgrade a parachain to a parathread
     */
    get asV9190(): {id: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ParasSudoWrapperSudoScheduleParathreadUpgradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParasSudoWrapper.sudo_schedule_parathread_upgrade')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Upgrade a parathread to a parachain
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ParasSudoWrapper.sudo_schedule_parathread_upgrade') === '0fb20b5afc6a2830162f8daea8abc92a50d6411d977d5e83e205bdeb2dcd6598'
    }

    /**
     * Upgrade a parathread to a parachain
     */
    get asV9190(): {id: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionCleanDefunctVotersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.clean_defunct_voters')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
     * deposit of the removed voters are returned.
     * 
     * This is an root function to be used only for cleaning the state.
     * 
     * The dispatch origin of this call must be root.
     * 
     * # <weight>
     * The total number of voters and those that are defunct must be provided as witness data.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('PhragmenElection.clean_defunct_voters') === '8279e35309d0c9a5d36cd12cce19e58fef95829d4096e23fe93a055a47afd8a0'
    }

    /**
     * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
     * deposit of the removed voters are returned.
     * 
     * This is an root function to be used only for cleaning the state.
     * 
     * The dispatch origin of this call must be root.
     * 
     * # <weight>
     * The total number of voters and those that are defunct must be provided as witness data.
     * # </weight>
     */
    get asV9300(): {numVoters: number, numDefunct: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a particular member from the set. This is effective immediately and the bond of
     * the outgoing member is slashed.
     * 
     * If a runner-up is available, then the best runner-up will be removed and replaces the
     * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
     * started, else, nothing happens.
     * 
     * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
     * it is returned.
     * 
     * The dispatch origin of this call must be root.
     * 
     * Note that this does not affect the designated block number of the next election.
     * 
     * # <weight>
     * If we have a replacement, we use a small weight. Else, since this is a root call and
     * will go into phragmen, we assume full block for now.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('PhragmenElection.remove_member') === 'cad43b3c39cdcf8f1f0ade5f75d00e1cbedebcb3e3c8feb18958bef69d34a79f'
    }

    /**
     * Remove a particular member from the set. This is effective immediately and the bond of
     * the outgoing member is slashed.
     * 
     * If a runner-up is available, then the best runner-up will be removed and replaces the
     * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
     * started, else, nothing happens.
     * 
     * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
     * it is returned.
     * 
     * The dispatch origin of this call must be root.
     * 
     * Note that this does not affect the designated block number of the next election.
     * 
     * # <weight>
     * If we have a replacement, we use a small weight. Else, since this is a root call and
     * will go into phragmen, we assume full block for now.
     * # </weight>
     */
    get asV9300(): {who: v9300.MultiAddress, slashBond: boolean, rerunElection: boolean} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionRemoveVoterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.remove_voter')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove `origin` as a voter.
     * 
     * This removes the lock and returns the deposit.
     * 
     * The dispatch origin of this call must be signed and be a voter.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('PhragmenElection.remove_voter') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove `origin` as a voter.
     * 
     * This removes the lock and returns the deposit.
     * 
     * The dispatch origin of this call must be signed and be a voter.
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionRenounceCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.renounce_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Renounce one's intention to be a candidate for the next election round. 3 potential
     * outcomes exist:
     * 
     * - `origin` is a candidate and not elected in any set. In this case, the deposit is
     *   unreserved, returned and origin is removed as a candidate.
     * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
     *   origin is removed as a runner-up.
     * - `origin` is a current member. In this case, the deposit is unreserved and origin is
     *   removed as a member, consequently not being a candidate for the next round anymore.
     *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
     *   are immediately used. If the prime is renouncing, then no prime will exist until the
     *   next round.
     * 
     * The dispatch origin of this call must be signed, and have one of the above roles.
     * 
     * # <weight>
     * The type of renouncing must be provided as witness data.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('PhragmenElection.renounce_candidacy') === '891a3ff219ab8817cfffbcd0ed48578a0fd96440dc2292a0cde84a40439f7fbe'
    }

    /**
     * Renounce one's intention to be a candidate for the next election round. 3 potential
     * outcomes exist:
     * 
     * - `origin` is a candidate and not elected in any set. In this case, the deposit is
     *   unreserved, returned and origin is removed as a candidate.
     * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
     *   origin is removed as a runner-up.
     * - `origin` is a current member. In this case, the deposit is unreserved and origin is
     *   removed as a member, consequently not being a candidate for the next round anymore.
     *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
     *   are immediately used. If the prime is renouncing, then no prime will exist until the
     *   next round.
     * 
     * The dispatch origin of this call must be signed, and have one of the above roles.
     * 
     * # <weight>
     * The type of renouncing must be provided as witness data.
     * # </weight>
     */
    get asV9300(): {renouncing: v9300.Renouncing} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionSubmitCandidacyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.submit_candidacy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Submit oneself for candidacy. A fixed amount of deposit is recorded.
     * 
     * All candidates are wiped at the end of the term. They either become a member/runner-up,
     * or leave the system while their deposit is slashed.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
     * to get their deposit back. Losing the spot in an election will always lead to a slash.
     * 
     * # <weight>
     * The number of current candidates must be provided as witness data.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('PhragmenElection.submit_candidacy') === 'f9d2bc9f755e33c27d34db4c3b063daa9e2490111d35f89ea1995d74e59b1819'
    }

    /**
     * Submit oneself for candidacy. A fixed amount of deposit is recorded.
     * 
     * All candidates are wiped at the end of the term. They either become a member/runner-up,
     * or leave the system while their deposit is slashed.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
     * to get their deposit back. Losing the spot in an election will always lead to a slash.
     * 
     * # <weight>
     * The number of current candidates must be provided as witness data.
     * # </weight>
     */
    get asV9300(): {candidateCount: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class PhragmenElectionVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PhragmenElection.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote for a set of candidates for the upcoming round of election. This can be called to
     * set the initial votes, or update already existing votes.
     * 
     * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
     * reserved. The deposit is based on the number of votes and can be updated over time.
     * 
     * The `votes` should:
     *   - not be empty.
     *   - be less than the number of possible candidates. Note that all current members and
     *     runners-up are also automatically candidates for the next round.
     * 
     * If `value` is more than `who`'s free balance, then the maximum of the two is used.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * It is the responsibility of the caller to **NOT** place all of their balance into the
     * lock and keep some for further operations.
     * 
     * # <weight>
     * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('PhragmenElection.vote') === '75939c25de1c96145b5d2d4bc8627a3fc22299f0e1f1f6f0709e54e884796bda'
    }

    /**
     * Vote for a set of candidates for the upcoming round of election. This can be called to
     * set the initial votes, or update already existing votes.
     * 
     * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
     * reserved. The deposit is based on the number of votes and can be updated over time.
     * 
     * The `votes` should:
     *   - not be empty.
     *   - be less than the number of possible candidates. Note that all current members and
     *     runners-up are also automatically candidates for the next round.
     * 
     * If `value` is more than `who`'s free balance, then the maximum of the two is used.
     * 
     * The dispatch origin of this call must be signed.
     * 
     * ### Warning
     * 
     * It is the responsibility of the caller to **NOT** place all of their balance into the
     * lock and keep some for further operations.
     * 
     * # <weight>
     * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
     * # </weight>
     */
    get asV9300(): {votes: Uint8Array[], value: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageNotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.note_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get asV9300(): {bytes: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageRequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.request_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get asV9300(): {hash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageUnnotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.unnote_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     */
    get asV9300(): {hash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageUnrequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.unrequest_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get asV9300(): {hash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyAddProxyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.add_proxy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Proxy.add_proxy') === '62846da4b37daa8228802c35cabeaa2a5c9d848468ea43cde020e9da89c25f6c'
    }

    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV9190(): {delegate: Uint8Array, proxyType: v9190.ProxyType, delay: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Proxy.add_proxy') === 'f5b794ea128e094aa8d11cced0d62d400bb62821b736d1b971c343e0f53e58ed'
    }

    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    get asV9300(): {delegate: v9300.MultiAddress, proxyType: v9300.ProxyType, delay: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyAnnounceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.announce')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Proxy.announce') === '886fe5248256b2372151aa5c936f9027a64929a3501efe231a22f1ee868cff3e'
    }

    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV9190(): {real: Uint8Array, callHash: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Proxy.announce') === '1e2ba1b130bab29ab148202fefa1b526f6d362ed3f3d2aaf35cc706821c5cd49'
    }

    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     */
    get asV9300(): {real: v9300.MultiAddress, callHash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyAnonymousCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.anonymous')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     * TODO: Might be over counting 1 read
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Proxy.anonymous') === '6d80c5f37c5f2ecb7f37c0f819b3eda6d7d2b5aa0e99c866eaa275a9e552ff81'
    }

    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     * TODO: Might be over counting 1 read
     */
    get asV9190(): {proxyType: v9190.ProxyType, delay: number, index: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyCreatePureCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.create_pure')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Proxy.create_pure') === '04d088dc45eeab9396dc9bb3cd7799686fd25194bbb0913a82892f614268aa5c'
    }

    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     */
    get asV9300(): {proxyType: v9300.ProxyType, delay: number, index: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyKillAnonymousCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.kill_anonymous')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes a previously spawned anonymous proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `anonymous` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `anonymous` to create this account.
     * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `anonymous`.
     * - `height`: The height of the chain when the call to `anonymous` was processed.
     * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created anonymous
     * account whose `anonymous` call has corresponding parameters.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Proxy.kill_anonymous') === 'f720ca72ad455ed6654243a0190d029a851bb13930a6875663b09b3363ad4c59'
    }

    /**
     * Removes a previously spawned anonymous proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `anonymous` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `anonymous` to create this account.
     * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `anonymous`.
     * - `height`: The height of the chain when the call to `anonymous` was processed.
     * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created anonymous
     * account whose `anonymous` call has corresponding parameters.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV9190(): {spawner: Uint8Array, proxyType: v9190.ProxyType, index: number, height: number, extIndex: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyKillPureCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.kill_pure')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Proxy.kill_pure') === '34fa84f5a36c15ec29590c890b34bd79386225cd27bba1c46bafa62ea10fa5d3'
    }

    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    get asV9300(): {spawner: v9300.MultiAddress, proxyType: v9300.ProxyType, index: number, height: number, extIndex: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyProxyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.proxy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'ef80badccca7004d3c5a5fd83a62e330020834a003b4d46c64cc07a717f627ae'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV9190(): {real: Uint8Array, forceProxyType: (v9190.ProxyType | undefined), call: v9190.Call} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'feaaba600a76f2439bd8af3eb086d123d28db85876f92fef03470b4331ab90e9'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV9220(): {real: Uint8Array, forceProxyType: (v9220.ProxyType | undefined), call: v9220.Call} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'ab54f7f05c8ea977d7f8b245dcac1bba390b415b2ca2a19444832bc51b8f2fd1'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV9250(): {real: Uint8Array, forceProxyType: (v9250.ProxyType | undefined), call: v9250.Call} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '2d1ae7806488b39099e0e818d7ae61f8492aad1a4807aaf8b7110ec9e80640b9'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV9300(): {real: v9300.MultiAddress, forceProxyType: (v9300.ProxyType | undefined), call: v9300.Call} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '55c2cbd11f1c9c87a3ea2c2195feae17438eed62d864db2bcecfcadd586bbc10'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV9310(): {real: v9310.MultiAddress, forceProxyType: (v9310.ProxyType | undefined), call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === '22131f28cd8eb50178f14468a8766c54eca4cebda68c3eebce7253dc5b6ba409'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV9321(): {real: v9321.MultiAddress, forceProxyType: (v9321.ProxyType | undefined), call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Proxy.proxy') === 'dac19ae161c315ce148f95cb858b3b1c6cad03d7014bf1b8642115982588c188'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV9370(): {real: v9370.MultiAddress, forceProxyType: (v9370.ProxyType | undefined), call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyProxyAnnouncedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.proxy_announced')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'cb3fdba0850b4207a1c1af8ef3cd504f12da010119edcffd75cf28861dba2b17'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV9190(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v9190.ProxyType | undefined), call: v9190.Call} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'f0721d18fe558ad2c73617bf88d0e8e275d87d4d62a5b58ec1350261e95254a2'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV9220(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v9220.ProxyType | undefined), call: v9220.Call} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '7b449f29e0e6abbeb4056b3c6d0a4c76f78252010703bc60bcef0997bb9e43ab'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV9250(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v9250.ProxyType | undefined), call: v9250.Call} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'a568fee34710cadc42c6eba4b042408ed881dd9bc60ce0fd38c388d9eba33fd9'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV9300(): {delegate: v9300.MultiAddress, real: v9300.MultiAddress, forceProxyType: (v9300.ProxyType | undefined), call: v9300.Call} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '9e0ed307b623621e1c031af524a5de3493ac9b2a7d5b5d3e8865a57bc24d5898'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV9310(): {delegate: v9310.MultiAddress, real: v9310.MultiAddress, forceProxyType: (v9310.ProxyType | undefined), call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === '226ce76994b76be4032c3798cc9cf4ab03509307f9b24b4a4ff8f3771af799b5'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV9321(): {delegate: v9321.MultiAddress, real: v9321.MultiAddress, forceProxyType: (v9321.ProxyType | undefined), call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Proxy.proxy_announced') === 'bb1ef1244b1d5cefd246c128c71725d073b7da436c33d8af527e8775e173bc15'
    }

    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    get asV9370(): {delegate: v9370.MultiAddress, real: v9370.MultiAddress, forceProxyType: (v9370.ProxyType | undefined), call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyRejectAnnouncementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.reject_announcement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Proxy.reject_announcement') === '717e6dbb2911f49e34a3b48c48c86b40495423ab31d5b45f0062629c73057f2b'
    }

    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV9190(): {delegate: Uint8Array, callHash: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Proxy.reject_announcement') === 'a1d7c3959dec3e3a68a4ea7b541568e066bd95b7007b052c43ff4736abe9b06b'
    }

    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     */
    get asV9300(): {delegate: v9300.MultiAddress, callHash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyRemoveAnnouncementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.remove_announcement')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Proxy.remove_announcement') === '886fe5248256b2372151aa5c936f9027a64929a3501efe231a22f1ee868cff3e'
    }

    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     * 
     * # <weight>
     * Weight is a function of:
     * - A: the number of announcements made.
     * - P: the number of proxies the user has.
     * # </weight>
     */
    get asV9190(): {real: Uint8Array, callHash: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Proxy.remove_announcement') === '1e2ba1b130bab29ab148202fefa1b526f6d362ed3f3d2aaf35cc706821c5cd49'
    }

    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     */
    get asV9300(): {real: v9300.MultiAddress, callHash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyRemoveProxiesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.remove_proxies')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unregister all proxy accounts for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * WARNING: This may be called on accounts created by `anonymous`, however if done, then
     * the unreserved fees will be inaccessible. **All access to this account will be lost.**
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxies') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Unregister all proxy accounts for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * WARNING: This may be called on accounts created by `anonymous`, however if done, then
     * the unreserved fees will be inaccessible. **All access to this account will be lost.**
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV9190(): null {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ProxyRemoveProxyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Proxy.remove_proxy')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxy') === '62846da4b37daa8228802c35cabeaa2a5c9d848468ea43cde020e9da89c25f6c'
    }

    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     * 
     * # <weight>
     * Weight is a function of the number of proxies the user has (P).
     * # </weight>
     */
    get asV9190(): {delegate: Uint8Array, proxyType: v9190.ProxyType, delay: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Proxy.remove_proxy') === 'f5b794ea128e094aa8d11cced0d62d400bb62821b736d1b971c343e0f53e58ed'
    }

    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    get asV9300(): {delegate: v9300.MultiAddress, proxyType: v9300.ProxyType, delay: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryAsRecoveredCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.as_recovered')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Recovery.as_recovered') === '205aeadc83fb79d3bcbefa6c8ce12d367bae84e362a3ec09e51730b88bb3d2bc'
    }

    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    get asV9300(): {account: v9300.MultiAddress, call: v9300.Call} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Recovery.as_recovered') === 'd8fd47b4092c2c994287272e45e220ccfcf9a81a10b126c4f824256e739bf972'
    }

    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    get asV9310(): {account: v9310.MultiAddress, call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Recovery.as_recovered') === 'a9baa3145325a20001b049a32b7e93bd9dbb05ed90342f3f83a7e809e301f94e'
    }

    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    get asV9321(): {account: v9321.MultiAddress, call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Recovery.as_recovered') === '3c41b9be47674b31f471ddcfd1eb59f2fb0673b305adb422bda7a653c2e79078'
    }

    /**
     * Send a call through a recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you want to make a call on-behalf-of.
     * - `call`: The call you want to make with the recovered account.
     */
    get asV9370(): {account: v9370.MultiAddress, call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryCancelRecoveredCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.cancel_recovered')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel the ability to use `as_recovered` for `account`.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you are able to call on-behalf-of.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Recovery.cancel_recovered') === '2842be90a4599435dbefe83c28be9576bf64e6ff14aa9fa87c5fdb6255ef27b2'
    }

    /**
     * Cancel the ability to use `as_recovered` for `account`.
     * 
     * The dispatch origin for this call must be _Signed_ and registered to
     * be able to make calls on behalf of the recovered account.
     * 
     * Parameters:
     * - `account`: The recovered account you are able to call on-behalf-of.
     */
    get asV9300(): {account: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryClaimRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.claim_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Allow a successful rescuer to claim their recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and must be a "rescuer"
     * who has successfully completed the account recovery process: collected
     * `threshold` or more vouches, waited `delay_period` blocks since initiation.
     * 
     * Parameters:
     * - `account`: The lost account that you want to claim has been successfully recovered by
     *   you.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Recovery.claim_recovery') === '2842be90a4599435dbefe83c28be9576bf64e6ff14aa9fa87c5fdb6255ef27b2'
    }

    /**
     * Allow a successful rescuer to claim their recovered account.
     * 
     * The dispatch origin for this call must be _Signed_ and must be a "rescuer"
     * who has successfully completed the account recovery process: collected
     * `threshold` or more vouches, waited `delay_period` blocks since initiation.
     * 
     * Parameters:
     * - `account`: The lost account that you want to claim has been successfully recovered by
     *   you.
     */
    get asV9300(): {account: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryCloseRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.close_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * As the controller of a recoverable account, close an active recovery
     * process for your account.
     * 
     * Payment: By calling this function, the recoverable account will receive
     * the recovery deposit `RecoveryDeposit` placed by the rescuer.
     * 
     * The dispatch origin for this call must be _Signed_ and must be a
     * recoverable account with an active recovery process for it.
     * 
     * Parameters:
     * - `rescuer`: The account trying to rescue this recoverable account.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Recovery.close_recovery') === '35641276d420e314bee73916596f9c923b0832cf84b0886fff164a0c199992c3'
    }

    /**
     * As the controller of a recoverable account, close an active recovery
     * process for your account.
     * 
     * Payment: By calling this function, the recoverable account will receive
     * the recovery deposit `RecoveryDeposit` placed by the rescuer.
     * 
     * The dispatch origin for this call must be _Signed_ and must be a
     * recoverable account with an active recovery process for it.
     * 
     * Parameters:
     * - `rescuer`: The account trying to rescue this recoverable account.
     */
    get asV9300(): {rescuer: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryCreateRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.create_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a recovery configuration for your account. This makes your account recoverable.
     * 
     * Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
     * will be reserved for storing the recovery configuration. This deposit is returned
     * in full when the user calls `remove_recovery`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `friends`: A list of friends you trust to vouch for recovery attempts. Should be
     *   ordered and contain no duplicate values.
     * - `threshold`: The number of friends that must vouch for a recovery attempt before the
     *   account can be recovered. Should be less than or equal to the length of the list of
     *   friends.
     * - `delay_period`: The number of blocks after a recovery attempt is initialized that
     *   needs to pass before the account can be recovered.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Recovery.create_recovery') === 'f15707f38a1f989e268042b9a0fb39bc5c323ba5ea517caa023a5dec5966feb6'
    }

    /**
     * Create a recovery configuration for your account. This makes your account recoverable.
     * 
     * Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
     * will be reserved for storing the recovery configuration. This deposit is returned
     * in full when the user calls `remove_recovery`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `friends`: A list of friends you trust to vouch for recovery attempts. Should be
     *   ordered and contain no duplicate values.
     * - `threshold`: The number of friends that must vouch for a recovery attempt before the
     *   account can be recovered. Should be less than or equal to the length of the list of
     *   friends.
     * - `delay_period`: The number of blocks after a recovery attempt is initialized that
     *   needs to pass before the account can be recovered.
     */
    get asV9300(): {friends: Uint8Array[], threshold: number, delayPeriod: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryInitiateRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.initiate_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Initiate the process for recovering a recoverable account.
     * 
     * Payment: `RecoveryDeposit` balance will be reserved for initiating the
     * recovery process. This deposit will always be repatriated to the account
     * trying to be recovered. See `close_recovery`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `account`: The lost account that you want to recover. This account needs to be
     *   recoverable (i.e. have a recovery configuration).
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Recovery.initiate_recovery') === '2842be90a4599435dbefe83c28be9576bf64e6ff14aa9fa87c5fdb6255ef27b2'
    }

    /**
     * Initiate the process for recovering a recoverable account.
     * 
     * Payment: `RecoveryDeposit` balance will be reserved for initiating the
     * recovery process. This deposit will always be repatriated to the account
     * trying to be recovered. See `close_recovery`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `account`: The lost account that you want to recover. This account needs to be
     *   recoverable (i.e. have a recovery configuration).
     */
    get asV9300(): {account: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryRemoveRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.remove_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the recovery process for your account. Recovered accounts are still accessible.
     * 
     * NOTE: The user must make sure to call `close_recovery` on all active
     * recovery attempts before calling this function else it will fail.
     * 
     * Payment: By calling this function the recoverable account will unreserve
     * their recovery configuration deposit.
     * (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
     * 
     * The dispatch origin for this call must be _Signed_ and must be a
     * recoverable account (i.e. has a recovery configuration).
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Recovery.remove_recovery') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the recovery process for your account. Recovered accounts are still accessible.
     * 
     * NOTE: The user must make sure to call `close_recovery` on all active
     * recovery attempts before calling this function else it will fail.
     * 
     * Payment: By calling this function the recoverable account will unreserve
     * their recovery configuration deposit.
     * (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
     * 
     * The dispatch origin for this call must be _Signed_ and must be a
     * recoverable account (i.e. has a recovery configuration).
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoverySetRecoveredCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.set_recovered')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Allow ROOT to bypass the recovery process and set an a rescuer account
     * for a lost account directly.
     * 
     * The dispatch origin for this call must be _ROOT_.
     * 
     * Parameters:
     * - `lost`: The "lost account" to be recovered.
     * - `rescuer`: The "rescuer account" which can call as the lost account.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Recovery.set_recovered') === '12dcb73249a3bef1953d8d44b54c11a2420fd3d13f55159e3173b5d3dee3de90'
    }

    /**
     * Allow ROOT to bypass the recovery process and set an a rescuer account
     * for a lost account directly.
     * 
     * The dispatch origin for this call must be _ROOT_.
     * 
     * Parameters:
     * - `lost`: The "lost account" to be recovered.
     * - `rescuer`: The "rescuer account" which can call as the lost account.
     */
    get asV9300(): {lost: v9300.MultiAddress, rescuer: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class RecoveryVouchRecoveryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Recovery.vouch_recovery')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Allow a "friend" of a recoverable account to vouch for an active recovery
     * process for that account.
     * 
     * The dispatch origin for this call must be _Signed_ and must be a "friend"
     * for the recoverable account.
     * 
     * Parameters:
     * - `lost`: The lost account that you want to recover.
     * - `rescuer`: The account trying to rescue the lost account that you want to vouch for.
     * 
     * The combination of these two parameters must point to an active recovery
     * process.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Recovery.vouch_recovery') === '12dcb73249a3bef1953d8d44b54c11a2420fd3d13f55159e3173b5d3dee3de90'
    }

    /**
     * Allow a "friend" of a recoverable account to vouch for an active recovery
     * process for that account.
     * 
     * The dispatch origin for this call must be _Signed_ and must be a "friend"
     * for the recoverable account.
     * 
     * Parameters:
     * - `lost`: The lost account that you want to recover.
     * - `rescuer`: The account trying to rescue the lost account that you want to vouch for.
     * 
     * The combination of these two parameters must point to an active recovery
     * process.
     */
    get asV9300(): {lost: v9300.MultiAddress, rescuer: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class RegistrarAddLockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Registrar.add_lock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a manager lock from a para. This will prevent the manager of a
     * para to deregister or swap a para.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Registrar.add_lock') === '0ce4d19bdf40ed1e5a65dd2dbc04fe21b73ba0dc7590c221c3e403e96726dc18'
    }

    /**
     * Add a manager lock from a para. This will prevent the manager of a
     * para to deregister or swap a para.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    get asV9310(): {para: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class RegistrarDeregisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Registrar.deregister')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Deregister a Para Id, freeing all data and returning any deposit.
     * 
     * The caller must be Root, the `para` owner, or the `para` itself. The para must be a parathread.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Registrar.deregister') === '0fb20b5afc6a2830162f8daea8abc92a50d6411d977d5e83e205bdeb2dcd6598'
    }

    /**
     * Deregister a Para Id, freeing all data and returning any deposit.
     * 
     * The caller must be Root, the `para` owner, or the `para` itself. The para must be a parathread.
     */
    get asV9190(): {id: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class RegistrarForceRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Registrar.force_register')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force the registration of a Para Id on the relay chain.
     * 
     * This function must be called by a Root origin.
     * 
     * The deposit taken can be specified for this registration. Any `ParaId`
     * can be registered, including sub-1000 IDs which are System Parachains.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Registrar.force_register') === 'a5b6a45ddb0597c424abb7f3f416971b6f9078847fb58371773188cc269b135b'
    }

    /**
     * Force the registration of a Para Id on the relay chain.
     * 
     * This function must be called by a Root origin.
     * 
     * The deposit taken can be specified for this registration. Any `ParaId`
     * can be registered, including sub-1000 IDs which are System Parachains.
     */
    get asV9190(): {who: Uint8Array, deposit: bigint, id: number, genesisHead: Uint8Array, validationCode: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class RegistrarForceRemoveLockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Registrar.force_remove_lock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a manager lock from a para. This will allow the manager of a
     * previously locked para to deregister or swap a para without using governance.
     * 
     * Can only be called by the Root origin.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Registrar.force_remove_lock') === '0ce4d19bdf40ed1e5a65dd2dbc04fe21b73ba0dc7590c221c3e403e96726dc18'
    }

    /**
     * Remove a manager lock from a para. This will allow the manager of a
     * previously locked para to deregister or swap a para without using governance.
     * 
     * Can only be called by the Root origin.
     */
    get asV9190(): {para: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class RegistrarRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Registrar.register')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register head data and validation code for a reserved Para Id.
     * 
     * ## Arguments
     * - `origin`: Must be called by a `Signed` origin.
     * - `id`: The para ID. Must be owned/managed by the `origin` signing account.
     * - `genesis_head`: The genesis head data of the parachain/thread.
     * - `validation_code`: The initial validation code of the parachain/thread.
     * 
     * ## Deposits/Fees
     * The origin signed account must reserve a corresponding deposit for the registration. Anything already
     * reserved previously for this para ID is accounted for.
     * 
     * ## Events
     * The `Registered` event is emitted in case of success.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Registrar.register') === '3a4cf817f8bb406cb7985618b2fb45aaf0a9fffe415f2a1be091d56bb241889b'
    }

    /**
     * Register head data and validation code for a reserved Para Id.
     * 
     * ## Arguments
     * - `origin`: Must be called by a `Signed` origin.
     * - `id`: The para ID. Must be owned/managed by the `origin` signing account.
     * - `genesis_head`: The genesis head data of the parachain/thread.
     * - `validation_code`: The initial validation code of the parachain/thread.
     * 
     * ## Deposits/Fees
     * The origin signed account must reserve a corresponding deposit for the registration. Anything already
     * reserved previously for this para ID is accounted for.
     * 
     * ## Events
     * The `Registered` event is emitted in case of success.
     */
    get asV9190(): {id: number, genesisHead: Uint8Array, validationCode: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class RegistrarRemoveLockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Registrar.remove_lock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a manager lock from a para. This will allow the manager of a
     * previously locked para to deregister or swap a para without using governance.
     * 
     * Can only be called by the Root origin or the parachain.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Registrar.remove_lock') === '0ce4d19bdf40ed1e5a65dd2dbc04fe21b73ba0dc7590c221c3e403e96726dc18'
    }

    /**
     * Remove a manager lock from a para. This will allow the manager of a
     * previously locked para to deregister or swap a para without using governance.
     * 
     * Can only be called by the Root origin or the parachain.
     */
    get asV9310(): {para: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class RegistrarReserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Registrar.reserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Reserve a Para Id on the relay chain.
     * 
     * This function will reserve a new Para Id to be owned/managed by the origin account.
     * The origin account is able to register head data and validation code using `register` to create
     * a parathread. Using the Slots pallet, a parathread can then be upgraded to get a parachain slot.
     * 
     * ## Arguments
     * - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new para ID.
     * 
     * ## Deposits/Fees
     * The origin must reserve a deposit of `ParaDeposit` for the registration.
     * 
     * ## Events
     * The `Reserved` event is emitted in case of success, which provides the ID reserved for use.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Registrar.reserve') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Reserve a Para Id on the relay chain.
     * 
     * This function will reserve a new Para Id to be owned/managed by the origin account.
     * The origin account is able to register head data and validation code using `register` to create
     * a parathread. Using the Slots pallet, a parathread can then be upgraded to get a parachain slot.
     * 
     * ## Arguments
     * - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new para ID.
     * 
     * ## Deposits/Fees
     * The origin must reserve a deposit of `ParaDeposit` for the registration.
     * 
     * ## Events
     * The `Reserved` event is emitted in case of success, which provides the ID reserved for use.
     */
    get asV9190(): null {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class RegistrarScheduleCodeUpgradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Registrar.schedule_code_upgrade')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a parachain upgrade.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Registrar.schedule_code_upgrade') === '0b5bbf1b361dddb4826c2c1c0065a52b490f97f282bfc036e9cfc8d1934f8139'
    }

    /**
     * Schedule a parachain upgrade.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    get asV9310(): {para: number, newCode: Uint8Array} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class RegistrarSetCurrentHeadCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Registrar.set_current_head')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the parachain's current head.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Registrar.set_current_head') === '630e70696dbb809d3a272dfc9da9bfd0656f82541be24c57ee1c634d2645017c'
    }

    /**
     * Set the parachain's current head.
     * 
     * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
     */
    get asV9310(): {para: number, newHead: Uint8Array} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class RegistrarSwapCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Registrar.swap')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap a parachain with another parachain or parathread.
     * 
     * The origin must be Root, the `para` owner, or the `para` itself.
     * 
     * The swap will happen only if there is already an opposite swap pending. If there is not,
     * the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
     * 
     * The `ParaId`s remain mapped to the same head data and code so external code can rely on
     * `ParaId` to be a long-term identifier of a notional "parachain". However, their
     * scheduling info (i.e. whether they're a parathread or parachain), auction information
     * and the auction deposit are switched.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Registrar.swap') === '6feebc54e6390627dc0adcf3db1cd4a5b837a30257a2bb93cd4268cad6b4957e'
    }

    /**
     * Swap a parachain with another parachain or parathread.
     * 
     * The origin must be Root, the `para` owner, or the `para` itself.
     * 
     * The swap will happen only if there is already an opposite swap pending. If there is not,
     * the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
     * 
     * The `ParaId`s remain mapped to the same head data and code so external code can rely on
     * `ParaId` to be a long-term identifier of a notional "parachain". However, their
     * scheduling info (i.e. whether they're a parathread or parachain), auction information
     * and the auction deposit are switched.
     */
    get asV9190(): {id: number, other: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get asV9300(): {when: number, index: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a named scheduled task.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
    }

    /**
     * Cancel a named scheduled task.
     */
    get asV9300(): {id: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Cancel a named scheduled task.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === '2a01c4c05d6bf45e0dc267bd7f6e27df3b3e4b23af7982734357c4de87ef690c'
    }

    /**
     * Cancel a named scheduled task.
     */
    get asV9310(): {id: Uint8Array} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Anonymously schedule a task.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'fa3d816f222d45f23497e77c6c06c74e1c899c31ca67c9399aac1ea6c22501f5'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV9300(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9300.MaybeHashed} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'ed22a694f3e2ee568de5f7bdea62e917886f2f8180f8caf87117b53d6263f2b1'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV9310(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '24d06745aa44f8236038d3e57be9f38b76f41c1464130cb39704db4caaea5b65'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV9321(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'faad82517c4e9ccbae22acc3624fb18fc10e374db47b806978cb358a8153aeb0'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV9370(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '7be037c4b73a88f7b1946a6f6e5b90cb4063f9dfd458372b925e754e4fd9dc18'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV9300(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9300.MaybeHashed} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'b8ff1f56f185124a95a80ae12bb397aa22d421322130fe7f956115c569171295'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV9310(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '03dd077907f960c5cd079cdf7ee8737a8c9960e68b149b540dd255c53460c1b4'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV9321(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '7fd7f93467cf9195510d93572135636dc6f6a64ccb2bb8ef2f8671821789e3c1'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV9370(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a named task.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '4e61347acac431e92c9202aa39a81e1d2fc9a19ebace26b977c3b2453b350dfd'
    }

    /**
     * Schedule a named task.
     */
    get asV9300(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9300.MaybeHashed} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '6108ab4a2ed9a7bf91dfc677c7a0d69c2b9dcbdb2aaff9a0b61fa7c6fd30d034'
    }

    /**
     * Schedule a named task.
     */
    get asV9310(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '3280761e1698b839f0f8fa75510c84e2b872d3724f2ed49bf85640e19c26c4cd'
    }

    /**
     * Schedule a named task.
     */
    get asV9321(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'a7e7bbe9e4a81bea1256eae94507c8f096f0cbbafd61ac336e174f7f0337161a'
    }

    /**
     * Schedule a named task.
     */
    get asV9370(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'deb412e74000793791b20931dced8ca99b7bac12a05377b37c38193d592d091a'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV9300(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9300.MaybeHashed} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'f6ddb87ec8c4fc2e6b89a3c00136ad3eaa2e509d6d9fc4e993c823405d5cd68f'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV9310(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '269981a65e325858a0a1b4d1deb1d20b6fc966767b875ad00b792cb1b657116b'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV9321(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '2cb8c83b8caf959d4983ee418d991d91ecae9fdce3f63f35b25fbe35ac74728e'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV9370(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionPurgeKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.purge_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes any session key(s) of the function caller.
     * 
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     * 
     * # <weight>
     * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
     *   of `T::Keys::key_ids()` which is fixed.
     * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     * - DbWrites: `NextKeys`, `origin account`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Removes any session key(s) of the function caller.
     * 
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     * 
     * # <weight>
     * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
     *   of `T::Keys::key_ids()` which is fixed.
     * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
     * - DbWrites: `NextKeys`, `origin account`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asV9190(): null {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionSetKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.set_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Session.set_keys') === '99d3710e29cfd29e764516b99adca998863ac7777749ee999024fa63c2cf1168'
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * # <weight>
     * - Complexity: `O(1)`. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
     * - DbWrites: `origin account`, `NextKeys`
     * - DbReads per key id: `KeyOwner`
     * - DbWrites per key id: `KeyOwner`
     * # </weight>
     */
    get asV9190(): {keys: v9190.SessionKeys, proof: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SlotsClearAllLeasesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Slots.clear_all_leases')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear all leases for a Para Id, refunding any deposits back to the original owners.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Slots.clear_all_leases') === '0ce4d19bdf40ed1e5a65dd2dbc04fe21b73ba0dc7590c221c3e403e96726dc18'
    }

    /**
     * Clear all leases for a Para Id, refunding any deposits back to the original owners.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     */
    get asV9190(): {para: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SlotsForceLeaseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Slots.force_lease')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Just a connect into the `lease_out` call, in case Root wants to force some lease to happen
     * independently of any other on-chain mechanism to use it.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Slots.force_lease') === '7a85a97c4d9a6ea8aaf207f4760fceb3366bcc7fbfd7836192a4b01aebb9a461'
    }

    /**
     * Just a connect into the `lease_out` call, in case Root wants to force some lease to happen
     * independently of any other on-chain mechanism to use it.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     */
    get asV9190(): {para: number, leaser: Uint8Array, amount: bigint, periodBegin: number, periodCount: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SlotsTriggerOnboardCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Slots.trigger_onboard')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Try to onboard a parachain that has a lease for the current lease period.
     * 
     * This function can be useful if there was some state issue with a para that should
     * have onboarded, but was unable to. As long as they have a lease period, we can
     * let them onboard from here.
     * 
     * Origin must be signed, but can be called by anyone.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Slots.trigger_onboard') === '0ce4d19bdf40ed1e5a65dd2dbc04fe21b73ba0dc7590c221c3e403e96726dc18'
    }

    /**
     * Try to onboard a parachain that has a lease for the current lease period.
     * 
     * This function can be useful if there was some state issue with a para that should
     * have onboarded, but was unable to. As long as they have a lease period, we can
     * let them onboard from here.
     * 
     * Origin must be signed, but can be called by anyone.
     */
    get asV9190(): {para: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyBidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.bid')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * A user outside of the society can make a bid for entry.
     * 
     * Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
     * when the bid becomes a member, or if the bid calls `unbid`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `value`: A one time payment the bid would like to receive when joining the society.
     * 
     * # <weight>
     * Key: B (len of bids), C (len of candidates), M (len of members), X (balance reserve)
     * - Storage Reads:
     * 	- One storage read to check for suspended candidate. O(1)
     * 	- One storage read to check for suspended member. O(1)
     * 	- One storage read to retrieve all current bids. O(B)
     * 	- One storage read to retrieve all current candidates. O(C)
     * 	- One storage read to retrieve all members. O(M)
     * - Storage Writes:
     * 	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization
     *    w/ read)
     * 	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
     * - Notable Computation:
     * 	- O(B + C + log M) search to check user is not already a part of society.
     * 	- O(log B) search to insert the new bid sorted.
     * - External Pallet Operations:
     * 	- One balance reserve operation. O(X)
     * 	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
     * - Events:
     * 	- One event for new bid.
     * 	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
     * 
     * Total Complexity: O(M + B + C + logM + logB + X)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.bid') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
    }

    /**
     * A user outside of the society can make a bid for entry.
     * 
     * Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
     * when the bid becomes a member, or if the bid calls `unbid`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `value`: A one time payment the bid would like to receive when joining the society.
     * 
     * # <weight>
     * Key: B (len of bids), C (len of candidates), M (len of members), X (balance reserve)
     * - Storage Reads:
     * 	- One storage read to check for suspended candidate. O(1)
     * 	- One storage read to check for suspended member. O(1)
     * 	- One storage read to retrieve all current bids. O(B)
     * 	- One storage read to retrieve all current candidates. O(C)
     * 	- One storage read to retrieve all members. O(M)
     * - Storage Writes:
     * 	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization
     *    w/ read)
     * 	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
     * - Notable Computation:
     * 	- O(B + C + log M) search to check user is not already a part of society.
     * 	- O(log B) search to insert the new bid sorted.
     * - External Pallet Operations:
     * 	- One balance reserve operation. O(X)
     * 	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
     * - Events:
     * 	- One event for new bid.
     * 	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
     * 
     * Total Complexity: O(M + B + C + logM + logB + X)
     * # </weight>
     */
    get asV9300(): {value: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyDefenderVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.defender_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * As a member, vote on the defender.
     * 
     * The dispatch origin for this call must be _Signed_ and a member.
     * 
     * Parameters:
     * - `approve`: A boolean which says if the candidate should be
     * approved (`true`) or rejected (`false`).
     * 
     * # <weight>
     * - Key: M (len of members)
     * - One storage read O(M) and O(log M) search to check user is a member.
     * - One storage write to add vote to votes. O(1)
     * - One event.
     * 
     * Total Complexity: O(M + logM)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.defender_vote') === '7f3883eaa4337d0b921104008470f68603a927875190e5df78d5a8579db11bb1'
    }

    /**
     * As a member, vote on the defender.
     * 
     * The dispatch origin for this call must be _Signed_ and a member.
     * 
     * Parameters:
     * - `approve`: A boolean which says if the candidate should be
     * approved (`true`) or rejected (`false`).
     * 
     * # <weight>
     * - Key: M (len of members)
     * - One storage read O(M) and O(log M) search to check user is a member.
     * - One storage write to add vote to votes. O(1)
     * - One event.
     * 
     * Total Complexity: O(M + logM)
     * # </weight>
     */
    get asV9300(): {approve: boolean} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyFoundCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.found')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Found the society.
     * 
     * This is done as a discrete action in order to allow for the
     * pallet to be included into a running chain and can only be done once.
     * 
     * The dispatch origin for this call must be from the _FounderSetOrigin_.
     * 
     * Parameters:
     * - `founder` - The first member and head of the newly founded society.
     * - `max_members` - The initial max number of members for the society.
     * - `rules` - The rules of this society concerning membership.
     * 
     * # <weight>
     * - Two storage mutates to set `Head` and `Founder`. O(1)
     * - One storage write to add the first member to society. O(1)
     * - One event.
     * 
     * Total Complexity: O(1)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.found') === '292c78d910045fb09690369dc1ecf194fb284e4213dfabcc72d1e00246902c10'
    }

    /**
     * Found the society.
     * 
     * This is done as a discrete action in order to allow for the
     * pallet to be included into a running chain and can only be done once.
     * 
     * The dispatch origin for this call must be from the _FounderSetOrigin_.
     * 
     * Parameters:
     * - `founder` - The first member and head of the newly founded society.
     * - `max_members` - The initial max number of members for the society.
     * - `rules` - The rules of this society concerning membership.
     * 
     * # <weight>
     * - Two storage mutates to set `Head` and `Founder`. O(1)
     * - One storage write to add the first member to society. O(1)
     * - One event.
     * 
     * Total Complexity: O(1)
     * # </weight>
     */
    get asV9300(): {founder: v9300.MultiAddress, maxMembers: number, rules: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyJudgeSuspendedCandidateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.judge_suspended_candidate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Allow suspended judgement origin to make judgement on a suspended candidate.
     * 
     * If the judgement is `Approve`, we add them to society as a member with the appropriate
     * payment for joining society.
     * 
     * If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
     * to the society treasury, or we ban the voucher from vouching again.
     * 
     * If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
     * through the induction process again.
     * 
     * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
     * 
     * Parameters:
     * - `who` - The suspended candidate to be judged.
     * - `judgement` - `Approve`, `Reject`, or `Rebid`.
     * 
     * # <weight>
     * Key: B (len of bids), M (len of members), X (balance action)
     * - One storage read to check `who` is a suspended candidate.
     * - One storage removal of the suspended candidate.
     * - Approve Logic
     * 	- One storage read to get the available pot to pay users with. O(1)
     * 	- One storage write to update the available pot. O(1)
     * 	- One storage read to get the current block number. O(1)
     * 	- One storage read to get all members. O(M)
     * 	- Up to one unreserve currency action.
     * 	- Up to two new storage writes to payouts.
     * 	- Up to one storage write with O(log M) binary search to add a member to society.
     * - Reject Logic
     * 	- Up to one repatriate reserved currency action. O(X)
     * 	- Up to one storage write to ban the vouching member from vouching again.
     * - Rebid Logic
     * 	- Storage mutate with O(log B) binary search to place the user back into bids.
     * - Up to one additional event if unvouch takes place.
     * - One storage removal.
     * - One event for the judgement.
     * 
     * Total Complexity: O(M + logM + B + X)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.judge_suspended_candidate') === 'a696052a8479d0eb388fb51fef46be81d7ac813689e702cd5f4c6e0730e96108'
    }

    /**
     * Allow suspended judgement origin to make judgement on a suspended candidate.
     * 
     * If the judgement is `Approve`, we add them to society as a member with the appropriate
     * payment for joining society.
     * 
     * If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
     * to the society treasury, or we ban the voucher from vouching again.
     * 
     * If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
     * through the induction process again.
     * 
     * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
     * 
     * Parameters:
     * - `who` - The suspended candidate to be judged.
     * - `judgement` - `Approve`, `Reject`, or `Rebid`.
     * 
     * # <weight>
     * Key: B (len of bids), M (len of members), X (balance action)
     * - One storage read to check `who` is a suspended candidate.
     * - One storage removal of the suspended candidate.
     * - Approve Logic
     * 	- One storage read to get the available pot to pay users with. O(1)
     * 	- One storage write to update the available pot. O(1)
     * 	- One storage read to get the current block number. O(1)
     * 	- One storage read to get all members. O(M)
     * 	- Up to one unreserve currency action.
     * 	- Up to two new storage writes to payouts.
     * 	- Up to one storage write with O(log M) binary search to add a member to society.
     * - Reject Logic
     * 	- Up to one repatriate reserved currency action. O(X)
     * 	- Up to one storage write to ban the vouching member from vouching again.
     * - Rebid Logic
     * 	- Storage mutate with O(log B) binary search to place the user back into bids.
     * - Up to one additional event if unvouch takes place.
     * - One storage removal.
     * - One event for the judgement.
     * 
     * Total Complexity: O(M + logM + B + X)
     * # </weight>
     */
    get asV9300(): {who: v9300.MultiAddress, judgement: v9300.Type_350} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyJudgeSuspendedMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.judge_suspended_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Allow suspension judgement origin to make judgement on a suspended member.
     * 
     * If a suspended member is forgiven, we simply add them back as a member, not affecting
     * any of the existing storage items for that member.
     * 
     * If a suspended member is rejected, remove all associated storage items, including
     * their payouts, and remove any vouched bids they currently have.
     * 
     * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
     * 
     * Parameters:
     * - `who` - The suspended member to be judged.
     * - `forgive` - A boolean representing whether the suspension judgement origin forgives
     *   (`true`) or rejects (`false`) a suspended member.
     * 
     * # <weight>
     * Key: B (len of bids), M (len of members)
     * - One storage read to check `who` is a suspended member. O(1)
     * - Up to one storage write O(M) with O(log M) binary search to add a member back to
     *   society.
     * - Up to 3 storage removals O(1) to clean up a removed member.
     * - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.
     * - Up to one additional event if unvouch takes place.
     * - One storage removal. O(1)
     * - One event for the judgement.
     * 
     * Total Complexity: O(M + logM + B)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.judge_suspended_member') === 'd456db496c82da99b467b8a225c2a3c32cf059dc152d040afe4065d7ffda2094'
    }

    /**
     * Allow suspension judgement origin to make judgement on a suspended member.
     * 
     * If a suspended member is forgiven, we simply add them back as a member, not affecting
     * any of the existing storage items for that member.
     * 
     * If a suspended member is rejected, remove all associated storage items, including
     * their payouts, and remove any vouched bids they currently have.
     * 
     * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
     * 
     * Parameters:
     * - `who` - The suspended member to be judged.
     * - `forgive` - A boolean representing whether the suspension judgement origin forgives
     *   (`true`) or rejects (`false`) a suspended member.
     * 
     * # <weight>
     * Key: B (len of bids), M (len of members)
     * - One storage read to check `who` is a suspended member. O(1)
     * - Up to one storage write O(M) with O(log M) binary search to add a member back to
     *   society.
     * - Up to 3 storage removals O(1) to clean up a removed member.
     * - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.
     * - Up to one additional event if unvouch takes place.
     * - One storage removal. O(1)
     * - One event for the judgement.
     * 
     * Total Complexity: O(M + logM + B)
     * # </weight>
     */
    get asV9300(): {who: v9300.MultiAddress, forgive: boolean} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyPayoutCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.payout')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer the first matured payout for the sender and remove it from the records.
     * 
     * NOTE: This extrinsic needs to be called multiple times to claim multiple matured
     * payouts.
     * 
     * Payment: The member will receive a payment equal to their first matured
     * payout to their free balance.
     * 
     * The dispatch origin for this call must be _Signed_ and a member with
     * payouts remaining.
     * 
     * # <weight>
     * Key: M (len of members), P (number of payouts for a particular member)
     * - One storage read O(M) and O(log M) search to check signer is a member.
     * - One storage read O(P) to get all payouts for a member.
     * - One storage read O(1) to get the current block number.
     * - One currency transfer call. O(X)
     * - One storage write or removal to update the member's payouts. O(P)
     * 
     * Total Complexity: O(M + logM + P + X)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.payout') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Transfer the first matured payout for the sender and remove it from the records.
     * 
     * NOTE: This extrinsic needs to be called multiple times to claim multiple matured
     * payouts.
     * 
     * Payment: The member will receive a payment equal to their first matured
     * payout to their free balance.
     * 
     * The dispatch origin for this call must be _Signed_ and a member with
     * payouts remaining.
     * 
     * # <weight>
     * Key: M (len of members), P (number of payouts for a particular member)
     * - One storage read O(M) and O(log M) search to check signer is a member.
     * - One storage read O(P) to get all payouts for a member.
     * - One storage read O(1) to get the current block number.
     * - One currency transfer call. O(X)
     * - One storage write or removal to update the member's payouts. O(P)
     * 
     * Total Complexity: O(M + logM + P + X)
     * # </weight>
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietySetMaxMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.set_max_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Allows root origin to change the maximum number of members in society.
     * Max membership count must be greater than 1.
     * 
     * The dispatch origin for this call must be from _ROOT_.
     * 
     * Parameters:
     * - `max` - The maximum number of members for the society.
     * 
     * # <weight>
     * - One storage write to update the max. O(1)
     * - One event.
     * 
     * Total Complexity: O(1)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.set_max_members') === '405f1447d8db6ecc920213976cf7f98b6e74c5ceb4e2ecf66c742895e40e5d78'
    }

    /**
     * Allows root origin to change the maximum number of members in society.
     * Max membership count must be greater than 1.
     * 
     * The dispatch origin for this call must be from _ROOT_.
     * 
     * Parameters:
     * - `max` - The maximum number of members for the society.
     * 
     * # <weight>
     * - One storage write to update the max. O(1)
     * - One event.
     * 
     * Total Complexity: O(1)
     * # </weight>
     */
    get asV9300(): {max: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyUnbidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.unbid')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * A bidder can remove their bid for entry into society.
     * By doing so, they will have their candidate deposit returned or
     * they will unvouch their voucher.
     * 
     * Payment: The bid deposit is unreserved if the user made a bid.
     * 
     * The dispatch origin for this call must be _Signed_ and a bidder.
     * 
     * Parameters:
     * - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
     * 
     * # <weight>
     * Key: B (len of bids), X (balance unreserve)
     * - One storage read and write to retrieve and update the bids. O(B)
     * - Either one unreserve balance action O(X) or one vouching storage removal. O(1)
     * - One event.
     * 
     * Total Complexity: O(B + X)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.unbid') === '63713692c933a03c402b9905e1704697c3aee2aa43526e662e752ecea441a045'
    }

    /**
     * A bidder can remove their bid for entry into society.
     * By doing so, they will have their candidate deposit returned or
     * they will unvouch their voucher.
     * 
     * Payment: The bid deposit is unreserved if the user made a bid.
     * 
     * The dispatch origin for this call must be _Signed_ and a bidder.
     * 
     * Parameters:
     * - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
     * 
     * # <weight>
     * Key: B (len of bids), X (balance unreserve)
     * - One storage read and write to retrieve and update the bids. O(B)
     * - Either one unreserve balance action O(X) or one vouching storage removal. O(1)
     * - One event.
     * 
     * Total Complexity: O(B + X)
     * # </weight>
     */
    get asV9300(): {pos: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyUnfoundCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.unfound')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Annul the founding of the society.
     * 
     * The dispatch origin for this call must be Signed, and the signing account must be both
     * the `Founder` and the `Head`. This implies that it may only be done when there is one
     * member.
     * 
     * # <weight>
     * - Two storage reads O(1).
     * - Four storage removals O(1).
     * - One event.
     * 
     * Total Complexity: O(1)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.unfound') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Annul the founding of the society.
     * 
     * The dispatch origin for this call must be Signed, and the signing account must be both
     * the `Founder` and the `Head`. This implies that it may only be done when there is one
     * member.
     * 
     * # <weight>
     * - Two storage reads O(1).
     * - Four storage removals O(1).
     * - One event.
     * 
     * Total Complexity: O(1)
     * # </weight>
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyUnvouchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.unvouch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * As a vouching member, unvouch a bid. This only works while vouched user is
     * only a bidder (and not a candidate).
     * 
     * The dispatch origin for this call must be _Signed_ and a vouching member.
     * 
     * Parameters:
     * - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
     * 
     * # <weight>
     * Key: B (len of bids)
     * - One storage read O(1) to check the signer is a vouching member.
     * - One storage mutate to retrieve and update the bids. O(B)
     * - One vouching storage removal. O(1)
     * - One event.
     * 
     * Total Complexity: O(B)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.unvouch') === '63713692c933a03c402b9905e1704697c3aee2aa43526e662e752ecea441a045'
    }

    /**
     * As a vouching member, unvouch a bid. This only works while vouched user is
     * only a bidder (and not a candidate).
     * 
     * The dispatch origin for this call must be _Signed_ and a vouching member.
     * 
     * Parameters:
     * - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
     * 
     * # <weight>
     * Key: B (len of bids)
     * - One storage read O(1) to check the signer is a vouching member.
     * - One storage mutate to retrieve and update the bids. O(B)
     * - One vouching storage removal. O(1)
     * - One event.
     * 
     * Total Complexity: O(B)
     * # </weight>
     */
    get asV9300(): {pos: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * As a member, vote on a candidate.
     * 
     * The dispatch origin for this call must be _Signed_ and a member.
     * 
     * Parameters:
     * - `candidate`: The candidate that the member would like to bid on.
     * - `approve`: A boolean which says if the candidate should be approved (`true`) or
     *   rejected (`false`).
     * 
     * # <weight>
     * Key: C (len of candidates), M (len of members)
     * - One storage read O(M) and O(log M) search to check user is a member.
     * - One account lookup.
     * - One storage read O(C) and O(C) search to check that user is a candidate.
     * - One storage write to add vote to votes. O(1)
     * - One event.
     * 
     * Total Complexity: O(M + logM + C)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.vote') === '464e63d02db5ce6d0fc135184a217a60a7b532efa52d9522c48d91c9d16a5395'
    }

    /**
     * As a member, vote on a candidate.
     * 
     * The dispatch origin for this call must be _Signed_ and a member.
     * 
     * Parameters:
     * - `candidate`: The candidate that the member would like to bid on.
     * - `approve`: A boolean which says if the candidate should be approved (`true`) or
     *   rejected (`false`).
     * 
     * # <weight>
     * Key: C (len of candidates), M (len of members)
     * - One storage read O(M) and O(log M) search to check user is a member.
     * - One account lookup.
     * - One storage read O(C) and O(C) search to check that user is a candidate.
     * - One storage write to add vote to votes. O(1)
     * - One event.
     * 
     * Total Complexity: O(M + logM + C)
     * # </weight>
     */
    get asV9300(): {candidate: v9300.MultiAddress, approve: boolean} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class SocietyVouchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Society.vouch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * As a member, vouch for someone to join society by placing a bid on their behalf.
     * 
     * There is no deposit required to vouch for a new bid, but a member can only vouch for
     * one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
     * the suspension judgement origin, the member will be banned from vouching again.
     * 
     * As a vouching member, you can claim a tip if the candidate is accepted. This tip will
     * be paid as a portion of the reward the member will receive for joining the society.
     * 
     * The dispatch origin for this call must be _Signed_ and a member.
     * 
     * Parameters:
     * - `who`: The user who you would like to vouch for.
     * - `value`: The total reward to be paid between you and the candidate if they become
     * a member in the society.
     * - `tip`: Your cut of the total `value` payout when the candidate is inducted into
     * the society. Tips larger than `value` will be saturated upon payout.
     * 
     * # <weight>
     * Key: B (len of bids), C (len of candidates), M (len of members)
     * - Storage Reads:
     * 	- One storage read to retrieve all members. O(M)
     * 	- One storage read to check member is not already vouching. O(1)
     * 	- One storage read to check for suspended candidate. O(1)
     * 	- One storage read to check for suspended member. O(1)
     * 	- One storage read to retrieve all current bids. O(B)
     * 	- One storage read to retrieve all current candidates. O(C)
     * - Storage Writes:
     * 	- One storage write to insert vouching status to the member. O(1)
     * 	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization
     *    w/ read)
     * 	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
     * - Notable Computation:
     * 	- O(log M) search to check sender is a member.
     * 	- O(B + C + log M) search to check user is not already a part of society.
     * 	- O(log B) search to insert the new bid sorted.
     * - External Pallet Operations:
     * 	- One balance reserve operation. O(X)
     * 	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
     * - Events:
     * 	- One event for vouch.
     * 	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
     * 
     * Total Complexity: O(M + B + C + logM + logB + X)
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Society.vouch') === '6e4614d88956c320da6839813343aafce0760712678ec170a6086e958d21e5e6'
    }

    /**
     * As a member, vouch for someone to join society by placing a bid on their behalf.
     * 
     * There is no deposit required to vouch for a new bid, but a member can only vouch for
     * one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
     * the suspension judgement origin, the member will be banned from vouching again.
     * 
     * As a vouching member, you can claim a tip if the candidate is accepted. This tip will
     * be paid as a portion of the reward the member will receive for joining the society.
     * 
     * The dispatch origin for this call must be _Signed_ and a member.
     * 
     * Parameters:
     * - `who`: The user who you would like to vouch for.
     * - `value`: The total reward to be paid between you and the candidate if they become
     * a member in the society.
     * - `tip`: Your cut of the total `value` payout when the candidate is inducted into
     * the society. Tips larger than `value` will be saturated upon payout.
     * 
     * # <weight>
     * Key: B (len of bids), C (len of candidates), M (len of members)
     * - Storage Reads:
     * 	- One storage read to retrieve all members. O(M)
     * 	- One storage read to check member is not already vouching. O(1)
     * 	- One storage read to check for suspended candidate. O(1)
     * 	- One storage read to check for suspended member. O(1)
     * 	- One storage read to retrieve all current bids. O(B)
     * 	- One storage read to retrieve all current candidates. O(C)
     * - Storage Writes:
     * 	- One storage write to insert vouching status to the member. O(1)
     * 	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization
     *    w/ read)
     * 	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
     * - Notable Computation:
     * 	- O(log M) search to check sender is a member.
     * 	- O(B + C + log M) search to check user is not already a part of society.
     * 	- O(log B) search to insert the new bid sorted.
     * - External Pallet Operations:
     * 	- One balance reserve operation. O(X)
     * 	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
     * - Events:
     * 	- One event for vouch.
     * 	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
     * 
     * Total Complexity: O(M + B + C + logM + logB + X)
     * # </weight>
     */
    get asV9300(): {who: v9300.MultiAddress, value: bigint, tip: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationContinueMigrateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.continue_migrate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Continue the migration for the given `limits`.
     * 
     * The dispatch origin of this call can be any signed account.
     * 
     * This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
     * Upon successful execution, the transaction fee is returned.
     * 
     * The (potentially over-estimated) of the byte length of all the data read must be
     * provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
     * that executing the current `MigrationTask` with the given `limits` will not exceed
     * `real_size_upper` bytes of read data.
     * 
     * The `witness_task` is merely a helper to prevent the caller from being slashed or
     * generally trigger a migration that they do not intend. This parameter is just a message
     * from caller, saying that they believed `witness_task` was the last state of the
     * migration, and they only wish for their transaction to do anything, if this assumption
     * holds. In case `witness_task` does not match, the transaction fails.
     * 
     * Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
     * recommended way of doing this is to pass a `limit` that only bounds `count`, as the
     * `size` limit can always be overwritten.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('StateTrieMigration.continue_migrate') === 'b2f02d34da1cfa1cd27ee6c14c8010fb2327197d372a167b1dff344d7c934130'
    }

    /**
     * Continue the migration for the given `limits`.
     * 
     * The dispatch origin of this call can be any signed account.
     * 
     * This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
     * Upon successful execution, the transaction fee is returned.
     * 
     * The (potentially over-estimated) of the byte length of all the data read must be
     * provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
     * that executing the current `MigrationTask` with the given `limits` will not exceed
     * `real_size_upper` bytes of read data.
     * 
     * The `witness_task` is merely a helper to prevent the caller from being slashed or
     * generally trigger a migration that they do not intend. This parameter is just a message
     * from caller, saying that they believed `witness_task` was the last state of the
     * migration, and they only wish for their transaction to do anything, if this assumption
     * holds. In case `witness_task` does not match, the transaction fails.
     * 
     * Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
     * recommended way of doing this is to pass a `limit` that only bounds `count`, as the
     * `size` limit can always be overwritten.
     */
    get asV9321(): {limits: v9321.MigrationLimits, realSizeUpper: number, witnessTask: v9321.MigrationTask} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationControlAutoMigrationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.control_auto_migration')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Control the automatic migration.
     * 
     * The dispatch origin of this call must be [`Config::ControlOrigin`].
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('StateTrieMigration.control_auto_migration') === '934f71f83c3d30d65f34b1d15aea2aaeb23d94da8797b082432d425da6f8bb95'
    }

    /**
     * Control the automatic migration.
     * 
     * The dispatch origin of this call must be [`Config::ControlOrigin`].
     */
    get asV9321(): {maybeConfig: (v9321.MigrationLimits | undefined)} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationForceSetProgressCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.force_set_progress')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Forcefully set the progress the running migration.
     * 
     * This is only useful in one case: the next key to migrate is too big to be migrated with
     * a signed account, in a parachain context, and we simply want to skip it. A reasonable
     * example of this would be `:code:`, which is both very expensive to migrate, and commonly
     * used, so probably it is already migrated.
     * 
     * In case you mess things up, you can also, in principle, use this to reset the migration
     * process.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('StateTrieMigration.force_set_progress') === '66e944fe95dd27767f5503dcc93c3e72db64c1c21a9b9329d0bfa457a225e8a3'
    }

    /**
     * Forcefully set the progress the running migration.
     * 
     * This is only useful in one case: the next key to migrate is too big to be migrated with
     * a signed account, in a parachain context, and we simply want to skip it. A reasonable
     * example of this would be `:code:`, which is both very expensive to migrate, and commonly
     * used, so probably it is already migrated.
     * 
     * In case you mess things up, you can also, in principle, use this to reset the migration
     * process.
     */
    get asV9321(): {progressTop: v9321.Progress, progressChild: v9321.Progress} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationMigrateCustomChildCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.migrate_custom_child')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrate the list of child keys by iterating each of them one by one.
     * 
     * All of the given child keys must be present under one `child_root`.
     * 
     * This does not affect the global migration process tracker ([`MigrationProcess`]), and
     * should only be used in case any keys are leftover due to a bug.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('StateTrieMigration.migrate_custom_child') === '517d7428953961fc7fea1fe19c15bc0f7e2b3e28a22d0de760a0a82b88ea31ee'
    }

    /**
     * Migrate the list of child keys by iterating each of them one by one.
     * 
     * All of the given child keys must be present under one `child_root`.
     * 
     * This does not affect the global migration process tracker ([`MigrationProcess`]), and
     * should only be used in case any keys are leftover due to a bug.
     */
    get asV9321(): {root: Uint8Array, childKeys: Uint8Array[], totalSize: number} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationMigrateCustomTopCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.migrate_custom_top')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrate the list of top keys by iterating each of them one by one.
     * 
     * This does not affect the global migration process tracker ([`MigrationProcess`]), and
     * should only be used in case any keys are leftover due to a bug.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('StateTrieMigration.migrate_custom_top') === 'ed5f519b60946b2923a3b009da16ae71d840d26cb7a9a2b60d9f58514b83d2d2'
    }

    /**
     * Migrate the list of top keys by iterating each of them one by one.
     * 
     * This does not affect the global migration process tracker ([`MigrationProcess`]), and
     * should only be used in case any keys are leftover due to a bug.
     */
    get asV9321(): {keys: Uint8Array[], witnessSize: number} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }
}

export class StateTrieMigrationSetSignedMaxLimitsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'StateTrieMigration.set_signed_max_limits')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the maximum limit of the signed migration.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('StateTrieMigration.set_signed_max_limits') === 'fbb1ea8c834eda6d60b8135a5aabb387db906b08c352e04e25fc4e50ec44ed65'
    }

    /**
     * Set the maximum limit of the signed migration.
     */
    get asV9321(): {limits: v9321.MigrationLimits} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSetKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.set_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
    }

    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    get asV9190(): {new: v9190.MultiAddress} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'a667abfcd5b9567f932751a01a96613bd4e2c308497ef633d48bea29591b1378'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9190(): {call: v9190.Call} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '8c185be1d3b5e3afecb8f8a3555d6508fd1594e28c8b4de15d1ab5e6fa743aa3'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9220(): {call: v9220.Call} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '642e66126fea4dc3a137793da82999ed02fb170c1d51fdd238179261e4dfa316'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9250(): {call: v9250.Call} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '04383bf084e0355deb1c9c3beeceb3f8a7301ca0de7a8fc12f30fb451d3bb37d'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9300(): {call: v9300.Call} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '91f8b0b859bdb17fee284c04c0ea02af24072621970ae80e7c5d528c915760c0'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9310(): {call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'feea92afd9c7b78443e4c3aaf5ff0c93d19aefab0d6071c5b65ae80e99ebfff0'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9321(): {call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '6c4379f74edafc145406336bef768847ade6b959e90a04a0eed4e87c87246905'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9370(): {call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '22bd68e2d4d9d8660cea13abcecdcbf4bcb171075377aa6ae68fe0285af5cb9d'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9190(): {who: v9190.MultiAddress, call: v9190.Call} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '1cf51aee8e68624875edff85729ec361299c380e77233108bda03a958705fa66'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9220(): {who: v9220.MultiAddress, call: v9220.Call} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '8082bb6ee999dd712d3961cf20d11ae58a62875f57608b2df95a770538c66736'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9250(): {who: v9250.MultiAddress, call: v9250.Call} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'bb3ea271ed16c6f33ead572182ce061eb731b3643aa419d3108183de5339504f'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9300(): {who: v9300.MultiAddress, call: v9300.Call} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '381af567ad10bec4902450a405c0466a3423b9b83fb1c2be3e2bae3ae11806a0'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9310(): {who: v9310.MultiAddress, call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '62d30e9577053d2c3b91070b8e68e0e152356b1522f0ea1fec71e04d59a431b4'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9321(): {who: v9321.MultiAddress, call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'd384cfbaf0622c3a9c4902eb49cf334c64fcd4a50a98f038fbdc4bd887853798'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV9370(): {who: v9370.MultiAddress, call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoUncheckedWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_unchecked_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '396bccf075e4530826dc2d993de7d735d8e263d57f1dd57ce87bff215d3c06eb'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV9190(): {call: v9190.Call, weight: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'a77fb141fe40fff950e4e98469d40adac2aa4415cc1415100d81fc6b5b1cf6b6'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV9220(): {call: v9220.Call, weight: bigint} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '14cc876a29cef5e2d0da3e9a4cc336b90223de6166c29c8daf13c44ddf95cf7a'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV9250(): {call: v9250.Call, weight: bigint} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'b89e343077525e2a4fa35d26f04e43cdf43bea80a9c3efc8023429a919745481'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV9300(): {call: v9300.Call, weight: v9300.Weight} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '65b94404d1b4fd7dd6b94487f406f6c3d08cb42fb6e614f9119af567436dd582'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV9310(): {call: v9310.Call, weight: v9310.Weight} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'a316975c6e34c6bd0cf167d66c88bca282e7ca89151ffae8c41d3a4443129216'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV9321(): {call: v9321.Call, weight: v9321.Weight} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'd944cb33c62413edf795072ab164841446bbc1bee0e0e14bdbf61adf17169dae'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV9370(): {call: v9370.Call, weight: v9370.Weight} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemFillBlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.fill_block')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * A dispatch that will fill the block weight up to the given ratio.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
    }

    /**
     * A dispatch that will fill the block weight up to the given ratio.
     */
    get asV9190(): {ratio: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillPrefixCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_prefix')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
    }

    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    get asV9190(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Kill some items from storage.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
    }

    /**
     * Kill some items from storage.
     */
    get asV9190(): {keys: Uint8Array[]} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

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
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark.
     * 
     * # <weight>
     * - `O(1)`
     * # </weight>
     */
    get asV9190(): {remark: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkWithEventCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark_with_event')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make some on-chain remark and emit event.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark and emit event.
     */
    get asV9190(): {remark: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the new runtime code.
     * 
     * # <weight>
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
     *   expensive).
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime, but generally this is very
     * expensive. We will treat this as a full block.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code.
     * 
     * # <weight>
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
     *   expensive).
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime, but generally this is very
     * expensive. We will treat this as a full block.
     * # </weight>
     */
    get asV9190(): {code: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeWithoutChecksCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code_without_checks')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * # <weight>
     * - `O(C)` where `C` length of `code`
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime. We will treat this as a full
     * block. # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * # <weight>
     * - `O(C)` where `C` length of `code`
     * - 1 storage write (codec `O(C)`).
     * - 1 digest item.
     * - 1 event.
     * The weight of this function is dependent on the runtime. We will treat this as a full
     * block. # </weight>
     */
    get asV9190(): {code: Uint8Array} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetHeapPagesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_heap_pages')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the number of pages in the WebAssembly environment's heap.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
    }

    /**
     * Set the number of pages in the WebAssembly environment's heap.
     */
    get asV9190(): {pages: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set some items of storage.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
    }

    /**
     * Set some items of storage.
     */
    get asV9190(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close') === '683905378cce329de8c5e9460bd36984188fb48a39207d985ea43cb10bd1eb81'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV9300(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close') === 'a88911953f51bddf0f0aeafa7caa7ca904d30cdb24f940ff177d2acf7088d3bd'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV9310(): {proposalHash: Uint8Array, index: number, proposalWeightBound: v9310.Weight, lengthBound: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeCloseOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.close_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close_old_weight') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV9310(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * # <weight>
     * Complexity: O(P) where P is the number of max proposals
     * DB Weight:
     * * Reads: Proposals
     * * Writes: Voting, Proposals, ProposalOf
     * # </weight>
     */
    get asV9300(): {proposalHash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '4bf9b7677c445040a4a4169b15b4f31ba5c90574c9303d81a8f0dfbbcd894bbf'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9300(): {proposal: v9300.Call, lengthBound: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'b41bdbb616dfec6b9f545a5f47f43bf823afe2157ea8df97e88c4408319d909f'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9310(): {proposal: v9310.Call, lengthBound: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'c63ff83d48cab84e144ceff89d6cf6c8ec1263eb8fcd2e600f1cf76c1cdd0044'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9321(): {proposal: v9321.Call, lengthBound: number} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '9108cd17daf0afe5291340ba757de3ee1bfb9fefd2ed224203becaa0c12336e2'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV9370(): {proposal: v9370.Call, lengthBound: number} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'a5352d93827f1992a56e871a4dbe977e26314a659208057bc9aa7de768a410e6'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9300(): {threshold: number, proposal: v9300.Call, lengthBound: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '510f0e7d8a484b7ea5921de2438aa2c0bb8b14fa92c97cb928950a1510bcbbdb'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9310(): {threshold: number, proposal: v9310.Call, lengthBound: number} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'f1efc11c0698d98e44b097936d0ce6fa2adcfc8f8764c7c0534186de62bab705'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9321(): {threshold: number, proposal: v9321.Call, lengthBound: number} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'a86ca72012c9c2a0306a45d6b5322857e79c98fbd5623e27f5e16d45df36fea1'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV9370(): {threshold: number, proposal: v9370.Call, lengthBound: number} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * Requires root origin.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * # <weight>
     * ## Weight
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     * - DB:
     *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
     *     members
     *   - 1 storage read (codec `O(P)`) for reading the proposals
     *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
     *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
     * # </weight>
     */
    get asV9300(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * # <weight>
     * ## Weight
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     * - DB:
     *   - 1 storage read `Members` (codec `O(M)`)
     *   - 1 storage mutation `Voting` (codec `O(M)`)
     * - 1 event
     * # </weight>
     */
    get asV9300(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalMembership.add_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asV9300(): {who: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.change_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalMembership.change_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asV9300(): {new: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalMembership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalMembership.remove_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asV9300(): {who: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalMembership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get asV9300(): {members: Uint8Array[]} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalMembership.set_prime') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asV9300(): {who: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.swap_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('TechnicalMembership.swap_member') === '5efd724fae29eef6393e039bf2dbfd2d5a3081770cc9cc8a80a1475fd6b40cf4'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asV9300(): {remove: v9300.MultiAddress, add: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TimestampSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Timestamp.set')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the current time.
     * 
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     * 
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     * 
     * The dispatch origin for this call must be `Inherent`.
     * 
     * # <weight>
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
    }

    /**
     * Set the current time.
     * 
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     * 
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     * 
     * The dispatch origin for this call must be `Inherent`.
     * 
     * # <weight>
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     * # </weight>
     */
    get asV9190(): {now: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsCloseTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.close_tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close and payout a tip.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * The tip identified by `hash` must have finished its countdown period.
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     * # <weight>
     * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
     *   `T`. `T` is charged as upper bound given by `ContainsLengthBound`. The actual cost
     *   depends on the implementation of `T::Tippers`.
     * - DbReads: `Tips`, `Tippers`, `tip finder`
     * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Tips.close_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Close and payout a tip.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * The tip identified by `hash` must have finished its countdown period.
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     * # <weight>
     * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
     *   `T`. `T` is charged as upper bound given by `ContainsLengthBound`. The actual cost
     *   depends on the implementation of `T::Tippers`.
     * - DbReads: `Tips`, `Tippers`, `tip finder`
     * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
     * # </weight>
     */
    get asV9300(): {hash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsReportAwesomeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.report_awesome')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`.
     * 
     * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *   a UTF-8-encoded URL.
     * - `who`: The account which should be credited for the tip.
     * 
     * Emits `NewTip` if successful.
     * 
     * # <weight>
     * - Complexity: `O(R)` where `R` length of `reason`.
     *   - encoding and hashing of 'reason'
     * - DbReads: `Reasons`, `Tips`
     * - DbWrites: `Reasons`, `Tips`
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Tips.report_awesome') === '14964738e276e95e94f6efa5fe953428f7537f27815f688365f6275f4cea67df'
    }

    /**
     * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`.
     * 
     * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *   a UTF-8-encoded URL.
     * - `who`: The account which should be credited for the tip.
     * 
     * Emits `NewTip` if successful.
     * 
     * # <weight>
     * - Complexity: `O(R)` where `R` length of `reason`.
     *   - encoding and hashing of 'reason'
     * - DbReads: `Reasons`, `Tips`
     * - DbWrites: `Reasons`, `Tips`
     * # </weight>
     */
    get asV9300(): {reason: Uint8Array, who: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsRetractTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.retract_tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
     * 
     * If successful, the original deposit will be unreserved.
     * 
     * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
     * must have been reported by the signing account through `report_awesome` (and not
     * through `tip_new`).
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     * Emits `TipRetracted` if successful.
     * 
     * # <weight>
     * - Complexity: `O(1)`
     *   - Depends on the length of `T::Hash` which is fixed.
     * - DbReads: `Tips`, `origin account`
     * - DbWrites: `Reasons`, `Tips`, `origin account`
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Tips.retract_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
     * 
     * If successful, the original deposit will be unreserved.
     * 
     * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
     * must have been reported by the signing account through `report_awesome` (and not
     * through `tip_new`).
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
     * 
     * Emits `TipRetracted` if successful.
     * 
     * # <weight>
     * - Complexity: `O(1)`
     *   - Depends on the length of `T::Hash` which is fixed.
     * - DbReads: `Tips`, `origin account`
     * - DbWrites: `Reasons`, `Tips`, `origin account`
     * # </weight>
     */
    get asV9300(): {hash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsSlashTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.slash_tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove and slash an already-open tip.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * As a result, the finder is slashed and the deposits are lost.
     * 
     * Emits `TipSlashed` if successful.
     * 
     * # <weight>
     *   `T` is charged as upper bound given by `ContainsLengthBound`.
     *   The actual cost depends on the implementation of `T::Tippers`.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Tips.slash_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Remove and slash an already-open tip.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * As a result, the finder is slashed and the deposits are lost.
     * 
     * Emits `TipSlashed` if successful.
     * 
     * # <weight>
     *   `T` is charged as upper bound given by `ContainsLengthBound`.
     *   The actual cost depends on the implementation of `T::Tippers`.
     * # </weight>
     */
    get asV9300(): {hash: Uint8Array} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Declare a tip value for an already-open tip.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must be a
     * member of the `Tippers` set.
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *   account ID.
     * - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *   value of active tippers will be given to the `who`.
     * 
     * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     * has started.
     * 
     * # <weight>
     * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
     *   `T`, insert tip and check closing, `T` is charged as upper bound given by
     *   `ContainsLengthBound`. The actual cost depends on the implementation of `T::Tippers`.
     * 
     *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *   is weighted as if almost full i.e of length `T-1`.
     * - DbReads: `Tippers`, `Tips`
     * - DbWrites: `Tips`
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Tips.tip') === 'f3795cdab18c292963e0e30ece37a15a2900030efc315a8e3f28ba886b2b9f58'
    }

    /**
     * Declare a tip value for an already-open tip.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must be a
     * member of the `Tippers` set.
     * 
     * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *   account ID.
     * - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *   value of active tippers will be given to the `who`.
     * 
     * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     * has started.
     * 
     * # <weight>
     * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
     *   `T`, insert tip and check closing, `T` is charged as upper bound given by
     *   `ContainsLengthBound`. The actual cost depends on the implementation of `T::Tippers`.
     * 
     *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *   is weighted as if almost full i.e of length `T-1`.
     * - DbReads: `Tippers`, `Tips`
     * - DbWrites: `Tips`
     * # </weight>
     */
    get asV9300(): {hash: Uint8Array, tipValue: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsTipNewCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.tip_new')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Give a tip for something new; no finder's fee will be taken.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must be a
     * member of the `Tippers` set.
     * 
     * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *   a UTF-8-encoded URL.
     * - `who`: The account which should be credited for the tip.
     * - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *   value of active tippers will be given to the `who`.
     * 
     * Emits `NewTip` if successful.
     * 
     * # <weight>
     * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
     *     `ContainsLengthBound`. The actual cost depends on the implementation of
     *     `T::Tippers`.
     *   - `O(R)`: hashing and encoding of reason of length `R`
     * - DbReads: `Tippers`, `Reasons`
     * - DbWrites: `Reasons`, `Tips`
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Tips.tip_new') === '340063926daebcdd5ba139252081f24472426696cfbff5aeda54953ca2048d2e'
    }

    /**
     * Give a tip for something new; no finder's fee will be taken.
     * 
     * The dispatch origin for this call must be _Signed_ and the signing account must be a
     * member of the `Tippers` set.
     * 
     * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
     *   a UTF-8-encoded URL.
     * - `who`: The account which should be credited for the tip.
     * - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *   value of active tippers will be given to the `who`.
     * 
     * Emits `NewTip` if successful.
     * 
     * # <weight>
     * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
     *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
     *     `ContainsLengthBound`. The actual cost depends on the implementation of
     *     `T::Tippers`.
     *   - `O(R)`: hashing and encoding of reason of length `R`
     * - DbReads: `Tippers`, `Reasons`
     * - DbWrites: `Reasons`, `Tips`
     * # </weight>
     */
    get asV9300(): {reason: Uint8Array, who: v9300.MultiAddress, tipValue: bigint} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryApproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.approve_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1).
     * - DbReads: `Proposals`, `Approvals`
     * - DbWrite: `Approvals`
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Treasury.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1).
     * - DbReads: `Proposals`, `Approvals`
     * - DbWrite: `Approvals`
     * # </weight>
     */
    get asV9300(): {proposalId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryProposeSpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.propose_spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `ProposalCount`, `origin account`
     * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Treasury.propose_spend') === 'ffef9f31e8ae5085e7c0a55a685daef52218f0bf7083015ac904dafceedf09ee'
    }

    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `ProposalCount`, `origin account`
     * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     * # </weight>
     */
    get asV9300(): {value: bigint, beneficiary: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryRejectProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.reject_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Reject a proposed spend. The original deposit will be slashed.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `Proposals`, `rejected proposer account`
     * - DbWrites: `Proposals`, `rejected proposer account`
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Treasury.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Reject a proposed spend. The original deposit will be slashed.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `Proposals`, `rejected proposer account`
     * - DbWrites: `Proposals`, `rejected proposer account`
     * # </weight>
     */
    get asV9300(): {proposalId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryRemoveApprovalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.remove_approval')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * The original deposit will no longer be returned.
     * 
     * May only be called from `T::RejectOrigin`.
     * - `proposal_id`: The index of a proposal
     * 
     * # <weight>
     * - Complexity: O(A) where `A` is the number of approvals
     * - Db reads and writes: `Approvals`
     * # </weight>
     * 
     * Errors:
     * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
     * i.e., the proposal has not been approved. This could also mean the proposal does not
     * exist altogether, thus there is no way it would have been approved in the first place.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Treasury.remove_approval') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * The original deposit will no longer be returned.
     * 
     * May only be called from `T::RejectOrigin`.
     * - `proposal_id`: The index of a proposal
     * 
     * # <weight>
     * - Complexity: O(A) where `A` is the number of approvals
     * - Db reads and writes: `Approvals`
     * # </weight>
     * 
     * Errors:
     * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
     * i.e., the proposal has not been approved. This could also mean the proposal does not
     * exist altogether, thus there is no way it would have been approved in the first place.
     */
    get asV9300(): {proposalId: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasurySpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose and approve a spend of treasury funds.
     * 
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     * 
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Treasury.spend') === '18a5bcfd718b2b225ac128952f0fc34fff8371520e0ab5bac3a0ab20286b496d'
    }

    /**
     * Propose and approve a spend of treasury funds.
     * 
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     * 
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    get asV9300(): {amount: bigint, beneficiary: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class UmpServiceOverweightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Ump.service_overweight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Service a single overweight upward message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `UnknownMessageIndex`: Message of `index` is unknown.
     * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Ump.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
    }

    /**
     * Service a single overweight upward message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `UnknownMessageIndex`: Message of `index` is unknown.
     * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asV9190(): {index: bigint, weightLimit: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Service a single overweight upward message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `UnknownMessageIndex`: Message of `index` is unknown.
     * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Ump.service_overweight') === '3e0d440993be1d69328adae3a1b30f3261ca945f8f307c396f4de7f51796a0c6'
    }

    /**
     * Service a single overweight upward message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `UnknownMessageIndex`: Message of `index` is unknown.
     * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asV9300(): {index: bigint, weightLimit: v9300.Weight} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Service a single overweight upward message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `UnknownMessageIndex`: Message of `index` is unknown.
     * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Ump.service_overweight') === '80fae8875bf513efc1e06b7dac547fccfc1e5fc45888cc8afd9b43812cf51bf5'
    }

    /**
     * Service a single overweight upward message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `UnknownMessageIndex`: Message of `index` is unknown.
     * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asV9310(): {index: bigint, weightLimit: v9310.Weight} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityAsDerivativeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.as_derivative')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'd8f7edb2cb42e827c267b26c484531392fc462eea0a14da877617e9eb13b68db'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV9190(): {index: number, call: v9190.Call} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '774ccfdaebbbd50f41229caa76666001d015ea90fbcb3b372de0fb53732c25b7'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV9220(): {index: number, call: v9220.Call} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '9623f3b783ad6baf2096788b9295a434255104c5b8e9b12ba2d95bd966fda404'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV9250(): {index: number, call: v9250.Call} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '96f203aeb0b789ee0a844638c25aea8523c12a13f08f05b777fb86ad7b58be41'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV9300(): {index: number, call: v9300.Call} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '360545e59e56dc3ca4b6758ddf35e3992f02212c8635f7d5f22f7d54786c5a70'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV9310(): {index: number, call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'd925676153634d4c4529ebf4b37112e8f36b864eb22ce005447470be7e00f29b'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV9321(): {index: number, call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '72b781346cc5a6d38caa8c4cbf2e8a12adb0c6a3324e46c149bcae8bb01c0d4f'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV9370(): {index: number, call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Utility.batch') === '445dc6157f8224709dfcc49876206d6969675a17f8958ec7b314cf8882578a3a'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV9190(): {calls: v9190.Call[]} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Utility.batch') === '73069e07f16e0795015e0fb589fc207bc53b4c73b7a3fa42fa006846cf31c75d'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV9220(): {calls: v9220.Call[]} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Utility.batch') === '21017462187a9d18ab78da60cfe8c62836146b8fbd809d1ce57e81e401b4c162'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV9250(): {calls: v9250.Call[]} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Utility.batch') === '9ded3f0c793664f801d0d67375d2a4ce0199b4c9077d065a6ab1274b788e9c8a'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV9300(): {calls: v9300.Call[]} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Utility.batch') === '0f558ddf57bbf8f0b82d54b601d38aaf20abbea029135da1f271d62b9e896858'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV9310(): {calls: v9310.Call[]} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'b49143e55125497c559b789d34faffde55fb3ac34c4f6e68ece39ee84910c3c3'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV9321(): {calls: v9321.Call[]} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Utility.batch') === '9f6204cb6d2d1454c658716a993fc8b8f7ee068b677d0e6e4fef640cf31ad554'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV9370(): {calls: v9370.Call[]} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '445dc6157f8224709dfcc49876206d6969675a17f8958ec7b314cf8882578a3a'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9190(): {calls: v9190.Call[]} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '73069e07f16e0795015e0fb589fc207bc53b4c73b7a3fa42fa006846cf31c75d'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9220(): {calls: v9220.Call[]} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '21017462187a9d18ab78da60cfe8c62836146b8fbd809d1ce57e81e401b4c162'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9250(): {calls: v9250.Call[]} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '9ded3f0c793664f801d0d67375d2a4ce0199b4c9077d065a6ab1274b788e9c8a'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9300(): {calls: v9300.Call[]} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '0f558ddf57bbf8f0b82d54b601d38aaf20abbea029135da1f271d62b9e896858'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9310(): {calls: v9310.Call[]} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'b49143e55125497c559b789d34faffde55fb3ac34c4f6e68ece39ee84910c3c3'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9321(): {calls: v9321.Call[]} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '9f6204cb6d2d1454c658716a993fc8b8f7ee068b677d0e6e4fef640cf31ad554'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9370(): {calls: v9370.Call[]} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityDispatchAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.dispatch_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'a2375421cd1066131266c956a679e152f1fb103a0c8a5d41cfff76da14cf2775'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV9190(): {asOrigin: v9190.OriginCaller, call: v9190.Call} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '4ea34cd8d7b4759e6b27f6aad3de09b1f29a8a77a881def16975e004347a91e2'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV9220(): {asOrigin: v9220.OriginCaller, call: v9220.Call} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '8c3b602f7da59a9180db4d87e6781e249980af040651d7a69eeda7ee029e8ec6'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV9250(): {asOrigin: v9250.OriginCaller, call: v9250.Call} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'b2f94545a0b2dc26e92fbfe2be7d6896a24665003297c030fc1f0df69747148b'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV9300(): {asOrigin: v9300.OriginCaller, call: v9300.Call} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '36c69ee805a5bd9f68de5665c4817784330c3573e80cd387de26b2852aa8a7ac'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV9310(): {asOrigin: v9310.OriginCaller, call: v9310.Call} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'daf84f68a21e7d511b40bb8bea4bd1f6a24f9dde4e804ff0907a60d9d4fcda5d'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV9321(): {asOrigin: v9321.OriginCaller, call: v9321.Call} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'dff18be07139fa8b0dc936947317efd9314ece8102d22ef3b9c46085676e5418'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV9370(): {asOrigin: v9370.OriginCaller, call: v9370.Call} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityForceBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.force_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9220(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '73069e07f16e0795015e0fb589fc207bc53b4c73b7a3fa42fa006846cf31c75d'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9220(): {calls: v9220.Call[]} {
        assert(this.isV9220)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9250(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '21017462187a9d18ab78da60cfe8c62836146b8fbd809d1ce57e81e401b4c162'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9250(): {calls: v9250.Call[]} {
        assert(this.isV9250)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '9ded3f0c793664f801d0d67375d2a4ce0199b4c9077d065a6ab1274b788e9c8a'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9300(): {calls: v9300.Call[]} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '0f558ddf57bbf8f0b82d54b601d38aaf20abbea029135da1f271d62b9e896858'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9310(): {calls: v9310.Call[]} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9321(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'b49143e55125497c559b789d34faffde55fb3ac34c4f6e68ece39ee84910c3c3'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then call are dispatch without checking origin filter. (This includes
     * bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9321(): {calls: v9321.Call[]} {
        assert(this.isV9321)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '9f6204cb6d2d1454c658716a993fc8b8f7ee068b677d0e6e4fef640cf31ad554'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV9370(): {calls: v9370.Call[]} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityWithWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.with_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'd944cb33c62413edf795072ab164841446bbc1bee0e0e14bdbf61adf17169dae'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV9370(): {call: v9370.Call, weight: v9370.Weight} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class ValidatorManagerDeregisterValidatorsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ValidatorManager.deregister_validators')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove validators from the set.
     * 
     * The removed validators will be deactivated from current session + 2.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ValidatorManager.deregister_validators') === '29f7c09ae365d68c20c11ff1fed7e18b97efdc9301be013378b2df5277f1557d'
    }

    /**
     * Remove validators from the set.
     * 
     * The removed validators will be deactivated from current session + 2.
     */
    get asV9190(): {validators: Uint8Array[]} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ValidatorManagerRegisterValidatorsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ValidatorManager.register_validators')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add new validators to the set.
     * 
     * The new validators will be active from current session + 2.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ValidatorManager.register_validators') === '29f7c09ae365d68c20c11ff1fed7e18b97efdc9301be013378b2df5277f1557d'
    }

    /**
     * Add new validators to the set.
     * 
     * The new validators will be active from current session + 2.
     */
    get asV9190(): {validators: Uint8Array[]} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingForceVestedTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.force_vested_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force a vested transfer.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The account whose funds should be transferred.
     * - `target`: The account that should be transferred the vested funds.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * NOTE: This will unlock all schedules through the current block.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 4 Reads, 4 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Vesting.force_vested_transfer') === 'fcf875d71f02d4cc33d9f1e8fc540430de8155209696fe7c9996d5d479e3d5c3'
    }

    /**
     * Force a vested transfer.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * - `source`: The account whose funds should be transferred.
     * - `target`: The account that should be transferred the vested funds.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * NOTE: This will unlock all schedules through the current block.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 4 Reads, 4 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
     * # </weight>
     */
    get asV9300(): {source: v9300.MultiAddress, target: v9300.MultiAddress, schedule: v9300.VestingInfo} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingMergeSchedulesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.merge_schedules')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
     * the highest possible start and end blocks. If both schedules have already started the
     * current block will be used as the schedule start; with the caveat that if one schedule
     * is finished by the current block, the other will be treated as the new merged schedule,
     * unmodified.
     * 
     * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
     * NOTE: This will unlock all schedules through the current block prior to merging.
     * NOTE: If both schedules have ended by the current block, no new schedule will be created
     * and both will be removed.
     * 
     * Merged schedule attributes:
     * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
     *   current_block)`.
     * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
     * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `schedule1_index`: index of the first schedule to merge.
     * - `schedule2_index`: index of the second schedule to merge.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Vesting.merge_schedules') === 'fc0db27e3f68971976c0913a7fc03f1b8221d054fbbbca956c367c00c0639eea'
    }

    /**
     * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
     * the highest possible start and end blocks. If both schedules have already started the
     * current block will be used as the schedule start; with the caveat that if one schedule
     * is finished by the current block, the other will be treated as the new merged schedule,
     * unmodified.
     * 
     * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
     * NOTE: This will unlock all schedules through the current block prior to merging.
     * NOTE: If both schedules have ended by the current block, no new schedule will be created
     * and both will be removed.
     * 
     * Merged schedule attributes:
     * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
     *   current_block)`.
     * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
     * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `schedule1_index`: index of the first schedule to merge.
     * - `schedule2_index`: index of the second schedule to merge.
     */
    get asV9300(): {schedule1Index: number, schedule2Index: number} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingVestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.vest')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unlock any vested funds of the sender account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 2 Reads, 2 Writes
     *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Vesting.vest') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Unlock any vested funds of the sender account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 2 Reads, 2 Writes
     *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
     * # </weight>
     */
    get asV9300(): null {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingVestOtherCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.vest_other')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unlock any vested funds of a `target` account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account whose vested funds should be unlocked. Must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Vesting.vest_other') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
    }

    /**
     * Unlock any vested funds of a `target` account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account whose vested funds should be unlocked. Must have funds still
     * locked under this pallet.
     * 
     * Emits either `VestingCompleted` or `VestingUpdated`.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account
     *     - Writes: Vesting Storage, Balances Locks, Target Account
     * # </weight>
     */
    get asV9300(): {target: v9300.MultiAddress} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class VestingVestedTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Vesting.vested_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Create a vested transfer.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account receiving the vested funds.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * NOTE: This will unlock all schedules through the current block.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     * # </weight>
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('Vesting.vested_transfer') === 'e10524b55ce1ea33d3b1d4a103e874a701990c6659bea3d0b8c94248699fe975'
    }

    /**
     * Create a vested transfer.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `target`: The account receiving the vested funds.
     * - `schedule`: The vesting schedule attached to the transfer.
     * 
     * Emits `VestingCreated`.
     * 
     * NOTE: This will unlock all schedules through the current block.
     * 
     * # <weight>
     * - `O(1)`.
     * - DbWeight: 3 Reads, 3 Writes
     *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
     * # </weight>
     */
    get asV9300(): {target: v9300.MultiAddress, schedule: v9300.VestingInfo} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmPalletExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmPallet.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('XcmPallet.execute') === 'c6251691ab3319ecee95442d381c308f9ada155e423798c908cbd6b063aa26b4'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asV9190(): {message: v9190.Type_425, maxWeight: bigint} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isV9300(): boolean {
        return this._chain.getCallHash('XcmPallet.execute') === '76149fbd7c3d18753d366687484d7bf651dd9b444cec7c11b944262b7ee4dcf5'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asV9300(): {message: v9300.Type_431, maxWeight: v9300.Weight} {
        assert(this.isV9300)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isV9310(): boolean {
        return this._chain.getCallHash('XcmPallet.execute') === 'c6251691ab3319ecee95442d381c308f9ada155e423798c908cbd6b063aa26b4'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asV9310(): {message: v9310.Type_414, maxWeight: bigint} {
        assert(this.isV9310)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('XcmPallet.execute') === '411d5e9bce7727b0b767af3f3f77a5cbe27fe9dcd7cdfca4c3ad0d0c05ac13e1'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asV9370(): {message: v9370.Type_417, maxWeight: bigint} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmPalletForceDefaultXcmVersionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmPallet.force_default_xcm_version')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('XcmPallet.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
    }

    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    get asV9190(): {maybeXcmVersion: (number | undefined)} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmPalletForceSubscribeVersionNotifyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmPallet.force_subscribe_version_notify')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('XcmPallet.force_subscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get asV9190(): {location: v9190.VersionedMultiLocation} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('XcmPallet.force_subscribe_version_notify') === '56aed4b742721d521279794a608d71ae9db256750e90b7beb3d50a9d01aff0f9'
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get asV9370(): {location: v9370.VersionedMultiLocation} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmPalletForceUnsubscribeVersionNotifyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmPallet.force_unsubscribe_version_notify')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('XcmPallet.force_unsubscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get asV9190(): {location: v9190.VersionedMultiLocation} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('XcmPallet.force_unsubscribe_version_notify') === '56aed4b742721d521279794a608d71ae9db256750e90b7beb3d50a9d01aff0f9'
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get asV9370(): {location: v9370.VersionedMultiLocation} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmPalletForceXcmVersionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmPallet.force_xcm_version')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('XcmPallet.force_xcm_version') === '3bdd3ba3db54facd962462ff1c2c0ede1b428cf9119b36a4e96fa86916145f75'
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get asV9190(): {location: v9190.V1MultiLocation, xcmVersion: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('XcmPallet.force_xcm_version') === '855b9a66c3d6c203c5e887917dc681372ed5d32210a8c6cc86c7d5f227944d9c'
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get asV9370(): {location: v9370.V1MultiLocation, xcmVersion: number} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmPalletLimitedReserveTransferAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmPallet.limited_reserve_transfer_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('XcmPallet.limited_reserve_transfer_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV9190(): {dest: v9190.VersionedMultiLocation, beneficiary: v9190.VersionedMultiLocation, assets: v9190.VersionedMultiAssets, feeAssetItem: number, weightLimit: v9190.V2WeightLimit} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('XcmPallet.limited_reserve_transfer_assets') === '1818300d2dec2685942619973f1ec81b7ecf2b979534f1965b98b7b6c9d833ea'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV9370(): {dest: v9370.VersionedMultiLocation, beneficiary: v9370.VersionedMultiLocation, assets: v9370.VersionedMultiAssets, feeAssetItem: number, weightLimit: v9370.V2WeightLimit} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmPalletLimitedTeleportAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmPallet.limited_teleport_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('XcmPallet.limited_teleport_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV9190(): {dest: v9190.VersionedMultiLocation, beneficiary: v9190.VersionedMultiLocation, assets: v9190.VersionedMultiAssets, feeAssetItem: number, weightLimit: v9190.V2WeightLimit} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('XcmPallet.limited_teleport_assets') === '1818300d2dec2685942619973f1ec81b7ecf2b979534f1965b98b7b6c9d833ea'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asV9370(): {dest: v9370.VersionedMultiLocation, beneficiary: v9370.VersionedMultiLocation, assets: v9370.VersionedMultiAssets, feeAssetItem: number, weightLimit: v9370.V2WeightLimit} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmPalletReserveTransferAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmPallet.reserve_transfer_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('XcmPallet.reserve_transfer_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asV9190(): {dest: v9190.VersionedMultiLocation, beneficiary: v9190.VersionedMultiLocation, assets: v9190.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('XcmPallet.reserve_transfer_assets') === 'b79cf2a68b1db82f94409ee603047fcd82f4343b83df6736c115e3338c04cecc'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asV9370(): {dest: v9370.VersionedMultiLocation, beneficiary: v9370.VersionedMultiLocation, assets: v9370.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmPalletSendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmPallet.send')
        this._chain = ctx._chain
        this.call = call
    }

    get isV9190(): boolean {
        return this._chain.getCallHash('XcmPallet.send') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
    }

    get asV9190(): {dest: v9190.VersionedMultiLocation, message: v9190.VersionedXcm} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    get isV9370(): boolean {
        return this._chain.getCallHash('XcmPallet.send') === '23ee62671c78b4c334d1aac87969a94e2d7514e9e9acd1949878df4525736480'
    }

    get asV9370(): {dest: v9370.VersionedMultiLocation, message: v9370.VersionedXcm} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmPalletTeleportAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmPallet.teleport_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('XcmPallet.teleport_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asV9190(): {dest: v9190.VersionedMultiLocation, beneficiary: v9190.VersionedMultiLocation, assets: v9190.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('XcmPallet.teleport_assets') === 'b79cf2a68b1db82f94409ee603047fcd82f4343b83df6736c115e3338c04cecc'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asV9370(): {dest: v9370.VersionedMultiLocation, beneficiary: v9370.VersionedMultiLocation, assets: v9370.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}
