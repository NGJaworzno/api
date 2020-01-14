import * as R from 'ramda';
import Config from './types';

require('dotenv').config({ silent: true });

const variables: string[] = [
  'JWT_SECRET',
  'SIGNUP_OPEN',
  'TEAM_MIN_PARTICIPANTS',
  'TEAM_MAX_PARTICIPANTS',
];

const check = (): void => {
  const envHasVar = (v: string): boolean => R.not(R.isNil(process.env[v]));
  const isTrue = R.equals(R.T());

  const allCorrect = R.pipe(
    R.map(envHasVar),
    R.all(isTrue),
  )(variables);

  if (R.not(allCorrect)) {
    const logEnvNotProvided = (v: string): void => console.log(`ENV not provided: ${v}`);
    const logIfEncNotProvided = (v: string): void => R.when(
      () => R.not(envHasVar(v)),
      logEnvNotProvided,
    )(v);

    R.forEach(logIfEncNotProvided, variables);
    throw new Error('Not all environment variables provided');
  }
};

const parseString = (env: string | undefined): string => (
  R.cond([
    [R.isNil, R.always('NOT_PROVIDED')],
    [R.T, R.always(env)],
  ])(env)
);

const parseBoolean = (env: string | undefined): boolean => (
  R.cond([
    [R.isNil, R.always(false)],
    [R.equals('true'), R.always(R.T)],
    [R.T, R.always(R.F)],
  ])(env)()
);

const parseInteger = (env: string | undefined): number => (
  R.cond([
    [R.isNil, R.always(0)],
    [R.T, R.always(parseInt)],
  ])(env)
);

const config: Config = {
  jwt: {
    secret: parseString(process.env.JWT_SECRET),
  },
  signUp: {
    open: parseBoolean(process.env.SIGNUP_OPEN)
  },
  team: {
    participants: {
      min: parseInteger(process.env.TEAM_MIN_PARTICIPANTS),
      max: parseInteger(process.env.TEAM_MAX_PARTICIPANTS),
    },
  },
  check,
};

export default config;
