import { NextFunction, Request, Response } from 'express';
import * as R from 'ramda';

import config from '@config/index';
import { Route } from '@types';
import Admin from '@entities/Admin.entity';
import AdminController from '@controllers/Admin.controller';
import * as AuthHandler from '@utils/AuthHandler';
import * as ErrorHandler from '@utils/ErrorHandler';
import * as TokenHandler from '@utils/TokenHandler';

const routes: Route[] = [
  {
    path: '/v1/auth/login',
    method: 'post',
    handler: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const admin = await AdminController.GetByEmail(req.body.email);
      if (admin === undefined) {
        ErrorHandler.notFoundError();
        return next();
      }

      const passwordCorrect = AuthHandler.comparePasswordAndHash(req.body.password, admin.password);
      if (R.not(passwordCorrect)) {
        ErrorHandler.notAuthorizedError();
        return next();
      }

      const token = TokenHandler.createBearerToken(admin);
      res.status(200);
      res.send({ token });
      return next();
    },
  },
  {
    path: '/v1/auth/signup',
    method: 'post',
    handler: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const singUpOpen = config.signUp.open;
      if (R.not(singUpOpen)) {
        ErrorHandler.notAuthorizedError();
        return next();
      }

      const admin = await AdminController.GetByEmail(req.body.email);
      const accountWithProvidedEmailExists = R.not(R.isNil(admin));
      if (accountWithProvidedEmailExists) {
        ErrorHandler.notAuthorizedError();
        return next();
      }

      const adminData: Admin = req.body;
      adminData.password = AuthHandler.createPasswordHash(adminData.password);
      await AdminController.Add(adminData);

      res.status(201);
      res.send({
        message: 'Successfully created admin account',
      });
      return next();
    },
  },
];

export default routes;
