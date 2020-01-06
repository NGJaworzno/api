import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { Route } from '../../types';

const routes: Route[] = [
  {
    path: '/status',
    method: 'get',
    handler: async (req: Request, res: Response): Promise<void> => {
      const connection = getConnection();

      res.status(200);
      res.send({
        serverOK: true,
        databaseConnectionOK: connection.isConnected,
      });
    },
  },
];

export default routes;
