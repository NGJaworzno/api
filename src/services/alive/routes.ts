import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { Route } from '../../types';
import Admin from '../../entities/Admin';

const routes: Route[] = [
  {
    path: '/alive',
    method: 'get',
    handler: async (req: Request, res: Response): Promise<void> => {
      res.status(200);
      res.send({
        alive: true,
      });
    },
  },
];

export default routes;
