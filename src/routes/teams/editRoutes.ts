import { NextFunction, Response, Request } from 'express';
import * as R from 'ramda';

import { Route, UserRequest } from '@types';
import TeamController from '@controllers/Team.controller';
import * as AuthHandler from '@utils/AuthHandler';
import Team from '@entities/Team.entity';

const editRoutes: Route[] = [
  {
    path: '/v1/teams/:id',
    method: 'get',
    handler: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const { id } = req.params;
      if (R.isNil(id)) {
        return next();
      }

      const team = await TeamController.GetById(id);

      res.status(200);
      res.send(team);
      return next();
    },
  },
  {
    path: '/v1/teams/:id',
    method: 'put',
    handler: async (req: UserRequest, res: Response, next: NextFunction): Promise<void> => {
      AuthHandler.checkAdminPrivileges(req, next);

      const { id } = req.params;
      if (R.isNil(id)) {
        return next();
      }

      const teamData: Team = req.body;
      await TeamController.Update(teamData, id);

      res.status(200);
      res.send({
        message: 'Successfully updated team',
      });
      return next();
    },
  },
  {
    path: '/v1/teams/:id',
    method: 'delete',
    handler: async (req: UserRequest, res: Response, next: NextFunction): Promise<void> => {
      AuthHandler.checkAdminPrivileges(req, next);

      const { id } = req.params;
      if (R.isNil(id)) {
        return next();
      }

      await TeamController.Delete(id);

      res.status(200);
      res.send({
        message: 'Successfully deleted team',
      });
      return next();
    },
  },
];

export default editRoutes;
