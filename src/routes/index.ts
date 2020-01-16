import { Route } from '@types';
import statusRoutes from './status/routes';
import authRoutes from './auth/routes';
import gamesRoutes from './games/routes';
import participantsRoutes from './participants/routes';
import teamsRoutes from './teams/routes';

const routes: Route[] = [
  ...statusRoutes,
  ...authRoutes,
  ...gamesRoutes,
  ...participantsRoutes,
  ...teamsRoutes,
];
export default routes;
