export abstract class HTTPClientError extends Error {
  readonly statusCode!: number;

  readonly name!: string;

  objectMessage!: Record<string, any> | null;

  protected constructor(message: string | object) {
    if (message instanceof Object) {
      super(JSON.stringify(message));
      this.objectMessage = message;
    } else {
      super(message);
    }
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class HTTP400Error extends HTTPClientError {
  readonly statusCode = 400;

  constructor(message: string | object = 'Bad request') {
    super(message);
  }
}

export class HTTP401Error extends HTTPClientError {
  readonly statusCode = 401;

  constructor(message: string | object = 'Not authorized') {
    super(message);
  }
}

export class HTTP404Error extends HTTPClientError {
  readonly statusCode = 404;

  constructor(message: string | object = 'Not found') {
    super(message);
  }
}
