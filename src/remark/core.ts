import assert from 'assert';
import {
  REMARK_CONTENT_VERSION_ACTION_MAP,
  SubSclRemarkMessage,
  SubSclRemarkMessageAction,
  SubSclRemarkMessageTitle,
  SubSclRemarkMessageVersion
} from './types';

export class SubSclRemark {
  private msgParsed: SubSclRemarkMessage<SubSclRemarkMessageAction, boolean> | null =
    null;

  private titles: Set<SubSclRemarkMessageTitle> = new Set([
    't_subscl',
    'subscl'
  ]);
  private versions: Set<SubSclRemarkMessageVersion> = new Set(['0.1']);
  private actions: Set<SubSclRemarkMessageAction> = new Set([
    'D_REG_PAY',
    'D_REG_COMP',
    'D_REG_REFUND',
    'EN_GEN_PAY',
    'EN_GEN_COMP',
    'EN_GEN_REFUND',
    'M_G'
  ]);

  private msgDelimiter: string = '::';

  constructor(private maybeRemarkMsg: unknown) {
    this.parseMsg(maybeRemarkMsg);
  }

  get message() {
    return this.msgParsed;
  }

  get content() {
    return this.msgParsed && this.msgParsed.valid
      ? this.msgParsed.content
      : null;
  }

  get version() {
    return this.msgParsed ? this.msgParsed.version : null;
  }

  static bytesToString(src: unknown): string {
    if (!src || !Buffer.isBuffer(src)) return '';
    return Buffer.from(src).toString('utf-8');
  }

  get isValidMessage(): boolean {
    return !!this.msgParsed && this.msgParsed.valid;
  }

  private parseMsg(srcMsg: unknown): void {
    if (!srcMsg || typeof srcMsg !== 'string') return;

    const chunkedMsg = (
      Buffer.isBuffer(srcMsg) ? SubSclRemark.bytesToString(srcMsg) : srcMsg
    ).split(this.msgDelimiter);

    if (
      !chunkedMsg ||
      chunkedMsg.length === 0 ||
      !this.isValidTitle(chunkedMsg) ||
      !this.isValidVersion(chunkedMsg) ||
      !this.isValidAction(chunkedMsg)
    )
      return;

    this.msgParsed = {
      title: chunkedMsg[0] as SubSclRemarkMessageTitle,
      version: chunkedMsg[2] as SubSclRemarkMessageVersion,
      action: chunkedMsg[1] as SubSclRemarkMessageAction,
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

  private isValidTitle(src: string[]): boolean {
    // TODO remove type casting
    return !!(src[0] && this.titles.has(src[0] as SubSclRemarkMessageTitle));
  }
  private isValidVersion(src: string[]): boolean {
    // TODO remove type casting
    return !!(
      src[0] && this.versions.has(src[2] as SubSclRemarkMessageVersion)
    );
  }
  private isValidAction(src: string[]): boolean {
    // TODO remove type casting
    return !!(src[0] && this.actions.has(src[1] as SubSclRemarkMessageAction));
  }
}
