import { Request, Response } from 'express';
import { getConnection, getRepository } from 'typeorm';
import * as R from 'ramda';

import { Route, UserRequest } from '../../types';
import Game from '../../entities/Game.entity';
import * as ErrorHandler from '../../utils/ErrorHandler';

const routes: Route[] = [
  {
    path: '/v1/games',
    method: 'get',
    handler: async (req: Request, res: Response): Promise<void> => {
      const games = await getRepository(Game)
        .createQueryBuilder('game')
        .getMany();

      res.status(200);
      res.send({
        games,
      });
    },
  },
  {
    path: '/v1/games',
    method: 'post',
    handler: async (req: UserRequest, res: Response): Promise<void> => {
      if (R.isNil(req.user)) {
        ErrorHandler.notAuthorizedError();
        return;
      }

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Game)
        .values(req.body)
        .execute();

      res.status(200);
      res.send(null);
    },
  },
];

export default routes;
