import { Route } from '../types';
import statusRoutes from './status/routes';
import authRoutes from './auth/routes';

const routes: Route[] = [
  ...statusRoutes,
  ...authRoutes,
];
export default routes;

