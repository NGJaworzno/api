import { Route } from '@types';

import baseRoutes from './baseRoutes';
import editRoutes from './editRoutes';

const routes: Route[] = [
  ...baseRoutes,
  ...editRoutes,
];

export default routes;
