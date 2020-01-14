import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';
import bcrypt from 'bcrypt';
import * as R from 'ramda';

import { Route } from '../../types';
import Admin, { HASH_SALT_ROUNDS } from '../../entities/Admin.entity';
import config from '../../config';
import * as ErrorHandler from '../../utils/ErrorHandler';
import * as TokenHandler from '../../utils/TokenHandler';

const routes: Route[] = [
  {
    path: '/v1/auth/login',
    method: 'post',
    handler: async (req: Request, res: Response): Promise<void> => {
      const adminRepository = getRepository(Admin);

      const admin = await adminRepository.findOne({ email: req.body.email });
      if (admin === undefined) {
        ErrorHandler.notFoundError();
        return;
      }

      const passwordCorrect = bcrypt.compareSync(req.body.password, admin.password);
      if (R.not(passwordCorrect)) {
        ErrorHandler.notAuthorizedError();
        return;
      }

      const token = TokenHandler.createBearerToken(admin);
      res.status(200);
      res.send({ token });
    },
  },
  {
    path: '/v1/auth/signup',
    method: 'post',
    handler: async (req: Request, res: Response): Promise<void> => {
      const singUpOpen = config.signUp.open;
      if (R.not(singUpOpen)) {
        ErrorHandler.notAuthorizedError();
        return;
      }

      const adminRepository = getRepository(Admin);
      const admin = await adminRepository.findOne({ email: req.body.email });
      const accountWithProvidedEmailExists = R.not(R.isNil(admin));
      if (accountWithProvidedEmailExists) {
        ErrorHandler.notAuthorizedError();
        return;
      }

      const adminData: Admin = req.body;
      adminData.password = bcrypt.hashSync(adminData.password, HASH_SALT_ROUNDS);

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Admin)
        .values(adminData)
        .execute();

      res.status(201);
      res.send({
        message: 'Successfully created admin account',
      });
    },
  },
];

export default routes;
