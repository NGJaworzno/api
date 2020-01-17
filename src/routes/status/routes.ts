import { Request, Response } from 'express';
import { getManager } from 'typeorm-plus';
import { Route } from '@types';
import * as R from 'ramda';

import Admin from '@entities/Admin.entity';

const routes: Route[] = [
  {
    path: '/status',
    method: 'get',
    handler: async (req: Request, res: Response): Promise<void> => {
      const manager = getManager();
      const user = await manager.findOne(Admin, 1);
      const userExists = R.not(R.isNil(user));

      res.status(200);
      res.send({
        serverOK: true,
        databaseConnectionOK: userExists,
      });
    },
  },
];

export default routes;
