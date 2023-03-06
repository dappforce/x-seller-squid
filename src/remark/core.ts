import assert from 'assert';
import {
  REMARK_CONTENT_VERSION_ACTION_MAP,
  SubSclRemarkMessage,
  SubSclRemarkMessageAction,
  SubSclRemarkMessageProtocolName,
  SubSclRemarkMessageVersion,
  SubSclSource
} from './types';
import { SubSclRemarkConfig, SubSclRemarkConfigData } from './config';


export class SubSclRemark {
  private maybeRemarkMsg: unknown;

  static setConfig(data: SubSclRemarkConfigData) {
    SubSclRemarkConfig.getInstance().setConfig(data);
  }

  private msgParsed: SubSclRemarkMessage<
    SubSclRemarkMessageAction,
    boolean
  > | null = null;

  private protNames: Set<SubSclRemarkMessageProtocolName> = new Set(
    SubSclRemarkConfig.getInstance().config.protNames
  );

  private versions: Set<SubSclRemarkMessageVersion> = new Set(
    SubSclRemarkConfig.getInstance().config.versions
  );

  private actions: Set<SubSclRemarkMessageAction> = new Set(
    SubSclRemarkConfig.getInstance().config.actions
  );

  private msgDelimiter: string = '::';

  public get message(): SubSclRemarkMessage<
    SubSclRemarkMessageAction,
    boolean
  > {
    if (!this.msgParsed) throw new Error('Message is not available.');
    return this.msgParsed!;
  }

  public get content() {
    return this.msgParsed && this.msgParsed.valid
      ? this.msgParsed.content
      : null;
  }

  public get version() {
    return this.msgParsed ? this.msgParsed.version : null;
  }

  public get isValidMessage(): boolean {
    return !!this.msgParsed && this.msgParsed.valid;
  }

  static bytesToString(src: unknown): string {
    if (!src || !Buffer.isBuffer(src)) return '';
    return Buffer.from(src).toString('utf-8');
  }

  public fromMessage(maybeRemarkMsg: unknown): SubSclRemark {
    this.maybeRemarkMsg = maybeRemarkMsg;
    this.parseMsg(maybeRemarkMsg);
    return this;
  }

  public fromSource(
    rmrkSrc: SubSclSource<SubSclRemarkMessageAction>
  ): SubSclRemark {
    let isSrcValid = true;

    if (
      !rmrkSrc ||
      !this.isValidProtName(rmrkSrc.protName) ||
      !this.isValidVersion(rmrkSrc.version) ||
      !this.isValidAction(rmrkSrc.action)
    )
      isSrcValid = false;

    // TODO add content validation

    if (!isSrcValid) throw new Error('Remark source is invalid');
    this.msgParsed = {
      ...rmrkSrc,
      valid: true
    };
    return this;
  }

  public toMessage(): string {
    if (!this.isValidMessage)
      throw new Error('Remark is not valid for build message.');

    const msg: string[] = [];
    msg.push(this.message.protName);
    msg.push(this.message.version);
    msg.push(this.message.action);

    try {
      const contentPropsMap =
        REMARK_CONTENT_VERSION_ACTION_MAP[this.message.version][
          this.message.action
        ];
      for (const contentPropName in contentPropsMap) {
        // @ts-ignore
        msg[contentPropsMap[contentPropName]] =
          // @ts-ignore
          this.message.content[contentPropName];
      }
    } catch (e) {
      console.log(e);
      throw new Error(
        'Error has been occurred during remark message creation.'
      );
    }

    //TODO add validations
    return msg.join(this.msgDelimiter);
  }

  /**
   * ====== Private functionality ======
   */

  private parseMsg(srcMsg: unknown): void {
    if (!srcMsg || typeof srcMsg !== 'string') return;

    const chunkedMsg = (
      Buffer.isBuffer(srcMsg) ? SubSclRemark.bytesToString(srcMsg) : srcMsg
    ).split(this.msgDelimiter);

    if (
      !chunkedMsg ||
      chunkedMsg.length === 0 ||
      !this.isValidProtName(chunkedMsg[0]) ||
      !this.isValidVersion(chunkedMsg[1]) ||
      !this.isValidAction(chunkedMsg[2])
    )
      return;

    this.msgParsed = {
      protName: chunkedMsg[0] as SubSclRemarkMessageProtocolName,
      version: chunkedMsg[1] as SubSclRemarkMessageVersion,
      action: chunkedMsg[2] as SubSclRemarkMessageAction,
      valid: false,
      content: null
    };

    try {
      const contentPropsMap =
        REMARK_CONTENT_VERSION_ACTION_MAP[this.msgParsed.version][
          this.msgParsed.action
        ];
      for (const contentPropName in contentPropsMap) {
        // @ts-ignore
        if (!this.msgParsed.content) this.msgParsed.content = {};
        // @ts-ignore
        this.msgParsed.content[contentPropName] =
          // @ts-ignore
          chunkedMsg[contentPropsMap[contentPropName]];
      }

      this.msgParsed.valid = true;
    } catch (e) {
      console.log(e);
    }
  }

  private isValidProtName(src: string): boolean {
    // TODO remove type casting
    return !!(src && this.protNames.has(src as SubSclRemarkMessageProtocolName));
  }
  private isValidVersion(src: string): boolean {
    // TODO remove type casting
    return !!(src && this.versions.has(src as SubSclRemarkMessageVersion));
  }
  private isValidAction(src: string): boolean {
    // TODO remove type casting
    return !!(src && this.actions.has(src as SubSclRemarkMessageAction));
  }
}
