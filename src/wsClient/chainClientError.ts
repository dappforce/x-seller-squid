// TODO codes should be reviewed
type ChainClientErrorCode = 10100 | 20100 | 20101 | 20200 | 20300;

type ChainClientErrorBody = { status: ChainClientErrorCode; reason?: string };

class ClientError extends Error {
  status: number;

  constructor(status: number, message: string = 'Error has been occurred.') {
    super(message);
    this.status = status;
  }
}

export class ChainClientError {
  private errors: Map<ChainClientErrorCode, ChainClientErrorBody> = new Map([
    [
      10100,
      {
        status: 10100
      }
    ],
    [
      20100,
      {
        status: 20100,
        reason: 'Domain already exists.'
      }
    ],
    [
      20101,
      {
        status: 20101,
        reason: 'Domain is already owned by target.'
      }
    ],
    [
      20200,
      {
        status: 20200,
        reason: 'Domain must be use .sub tld'
      }
    ],
    [
      20300,
      {
        status: 20300,
        reason: 'Incorrect domain length.'
      }
    ]
  ]);

  private error(code: ChainClientErrorCode): ChainClientErrorBody {
    return this.errors.get(code) ?? { status: code, reason: 'Unknown reason.' };
  }

  public throwError(errorCode: ChainClientErrorCode, reason?: string): never {
    throw new ClientError(errorCode, reason ?? this.error(errorCode).reason);
  }

  public getError(errorCode: ChainClientErrorCode): ChainClientErrorBody {
    return this.error(errorCode);
  }
}
