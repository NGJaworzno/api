import { Router } from 'express';
import * as R from 'ramda';
import { Route } from '@types';

type Wrapper = ((router: Router) => void);

export const applyMiddleware = (
  middleware: Wrapper[],
  router: Router,
): void => {
  const addMiddleware = (w: Wrapper): void => w(router);
  R.forEach(addMiddleware, middleware);
};

export const applyRoutes = (routes: Route[], router: Router): void => {
  const addRoute = (route: Route): void => {
    const { method, path, handler } = route;
    router[method](path, handler);
  };
  R.forEach(addRoute, routes);
};
