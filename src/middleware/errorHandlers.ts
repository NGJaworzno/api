import {
  Request, Response, NextFunction, Router,
} from 'express';
import * as ErrorHandler from '../utils/ErrorHandler';

const handle404Error = (router: Router): void => {
  router.use(() => {
    ErrorHandler.notFoundError();
  });
};

const handleClientErrors = (router: Router): void => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

const handleServerErrors = (router: Router): void => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, res, next);
  });
};
