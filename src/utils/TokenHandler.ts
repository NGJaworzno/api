import jwt from 'jsonwebtoken';
import * as R from 'ramda';

import config from '@config/index';
import Admin from '@entities/Admin.entity';

export const createSignedToken = (data: Admin): string => (
  jwt.sign({
    data,
  }, config.jwt.secret)
);

export const createBearerToken = (data: Admin): string => (
  R.concat('Bearer ', createSignedToken(data))
);
