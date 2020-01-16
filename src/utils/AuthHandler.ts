import * as R from 'ramda';
import bcrypt from 'bcrypt';
// eslint-disable-next-line import/no-cycle
import { UserRequest } from '@types';
import { NextFunction } from 'express';

// eslint-disable-next-line import/no-cycle
import AdminController from '@controllers/Admin.controller';
import * as ErrorHandler from './ErrorHandler';

export const HASH_SALT_ROUNDS = 10;

export const requestUserNotValid = (req: UserRequest): boolean => (
  R.or(
    R.isNil(req.user),
    R.isNil(AdminController.GetByEmail(req?.user?.email || '')),
  )
);

export const handleUserNotValid = (next: NextFunction): void => {
  ErrorHandler.notAuthorizedError();
  return next();
};

export const checkAdminPrivileges = (req: UserRequest, next: NextFunction): void => (
  R.when(
    requestUserNotValid,
    () => handleUserNotValid(next),
  )(req)
);

export const comparePasswordAndHash = (password: string, hash: string): boolean => (
  bcrypt.compareSync(password, hash)
);

export const createPasswordHash = (password: string): string => (
  bcrypt.hashSync(password, HASH_SALT_ROUNDS)
);
