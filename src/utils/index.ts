import {
  Router,
  Request,
  Response,
  NextFunction,
} from 'express';
import * as R from 'ramda';

type Wrapper = ((router: Router) => void);

export const applyMiddleware = (
  middleware: Wrapper[],
  router: Router,
): void => {
  const addMiddleware = (w: Wrapper): void => w(router);
  R.forEach(addMiddleware, middleware);
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router): void => {
  const addRoute = (route: Route): void => {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  };
  R.forEach(addRoute, routes);
};
