import { Route } from '../types';
import statusRoutes from './status/routes';
import authRoutes from './auth/routes';
import gamesRoutes from './games/routes';


const routes: Route[] = [
  ...statusRoutes,
  ...authRoutes,
  ...gamesRoutes,
];
export default routes;

