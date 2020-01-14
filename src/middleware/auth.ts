import { Router, Request } from 'express';
import jwt from 'express-jwt';
import config from '../config';

const getTokenFromAuthHeader = (req: Request): string | null => {
  const authHeader = req.headers.authorization;
  const authHeaderIsBearer = authHeader?.split(' ')[0] === 'Bearer';

  if (authHeader && authHeaderIsBearer) {
    return authHeader.split(' ')[1];
  }
  return req.query.token;
};

const handleJwt = (router: Router): void => {
  router.use(
    jwt({
      secret: config.jwt.secret,
      credentialsRequired: false,
      getToken: getTokenFromAuthHeader,
    }),
  );
};

export default [handleJwt];
