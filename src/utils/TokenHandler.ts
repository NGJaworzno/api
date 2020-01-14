import jwt from 'jsonwebtoken';

import { getConfig } from '../config';
import Admin from '../entities/Admin.entity';

export const createToken = (data: Admin): string => (
  jwt.sign({
    data,
  }, getConfig().jwtSecret)
);
