import { NextFunction, Request, Response } from 'express';

import { Route, UserRequest } from '@types';
import GameController from '@controllers/Game.controller';
import * as AuthHandler from '@utils/AuthHandler';
import Game from '@entities/Game.entity';

const routes: Route[] = [
  {
    path: '/v1/games',
    method: 'get',
    handler: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      AuthHandler.checkAdminPrivileges(req, next);

      const games = await GameController.GetAll();

      res.status(200);
      res.send({ games });
    },
  },
  {
    path: '/v1/games',
    method: 'post',
    handler: async (req: UserRequest, res: Response, next: NextFunction): Promise<void> => {
      AuthHandler.checkAdminPrivileges(req, next);

      let gameData = new Game();
      gameData = Object.assign(gameData, req.body);

      await GameController.Add(gameData);

      res.status(200);
      res.send({
        message: 'Successfully created game',
      });
    },
  },
];

export default routes;
