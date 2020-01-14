import * as R from 'ramda';
import Config from './types';

export const checkEnv = (): void => {
  const variables: string[] = ['JWT_SECRET', 'SIGNUP_OPEN'];
  const envHasVar = (v: string): boolean => R.not(R.isNil(process.env[v]));
  const envCorrectValues: boolean[] = R.map(envHasVar, variables);
  const allCorrect = R.all(R.equals(true), envCorrectValues);

  if (R.not(allCorrect)) {
    throw new Error('Not all environment variables provided');
  }
};

export const getConfig = (): Config => ({
  jwtSecret: process.env.JWT_SECRET || 'NOT_PROVIDED',
  signupOpen: R.equals(process.env.SIGNUP_OPEN, 'true'),
});
