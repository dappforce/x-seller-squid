import assert from "assert"
import * as marshal from "./marshal"
import {NrgRemarkContent} from "./_nrgRemarkContent"

export class NrgRemark {
    private _protName!: string
    private _version!: string
    private _destination!: string
    private _action!: string
    private _content!: NrgRemarkContent

    constructor(props?: Partial<Omit<NrgRemark, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._protName = marshal.string.fromJSON(json.protName)
            this._version = marshal.string.fromJSON(json.version)
            this._destination = marshal.string.fromJSON(json.destination)
            this._action = marshal.string.fromJSON(json.action)
            this._content = new NrgRemarkContent(undefined, marshal.nonNull(json.content))
        }
    }

    get protName(): string {
        assert(this._protName != null, 'uninitialized access')
        return this._protName
    }

    set protName(value: string) {
        this._protName = value
    }

    get version(): string {
        assert(this._version != null, 'uninitialized access')
        return this._version
    }

    set version(value: string) {
        this._version = value
    }

    get destination(): string {
        assert(this._destination != null, 'uninitialized access')
        return this._destination
    }

    set destination(value: string) {
        this._destination = value
    }

    get action(): string {
        assert(this._action != null, 'uninitialized access')
        return this._action
    }

    set action(value: string) {
        this._action = value
    }

    get content(): NrgRemarkContent {
        assert(this._content != null, 'uninitialized access')
        return this._content
    }

    set content(value: NrgRemarkContent) {
        this._content = value
    }

    toJSON(): object {
        return {
            protName: this.protName,
            version: this.version,
            destination: this.destination,
            action: this.action,
            content: this.content.toJSON(),
        }
    }
}
