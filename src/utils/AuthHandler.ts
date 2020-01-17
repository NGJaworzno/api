import * as R from 'ramda';
import bcrypt from 'bcrypt';
import { NextFunction } from 'express';

import { UserRequest } from '@types';
import * as ErrorHandler from './ErrorHandler';

export const HASH_SALT_ROUNDS = 10;

export const requestUserNotValid = (req: UserRequest): boolean => (
  R.isNil(req.user)
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
