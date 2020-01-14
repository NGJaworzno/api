import jwt from 'jsonwebtoken';
import * as R from 'ramda';

import { getConfig } from '../config';
import Admin from '../entities/Admin.entity';

export const createSignedToken = (data: Admin): string => (
  jwt.sign({
    data,
  }, getConfig().jwtSecret)
);

export const createBearerToken = (data: Admin): string => (
  R.concat('Bearer ', createSignedToken(data))
);
