import { Response, NextFunction } from 'express';
import { HTTPClientError, HTTP404Error, HTTP401Error } from './httpErrors';

export const notFoundError = (): void => {
  throw new HTTP404Error('Not found');
};

export const notAuthorizedError = (): void => {
  throw new HTTP401Error('Not authorized');
};

export const clientError = (err: Error, res: Response, next: NextFunction): void => {
  if (err instanceof HTTPClientError) {
    console.warn(err);
    res.status(err.statusCode).send({
      error: err.objectMessage || err.message,
    });
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response, next: NextFunction): void => {
  console.error(err);

  res.status(500).send({
    error: err,
  });
};
