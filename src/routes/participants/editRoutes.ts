import { NextFunction, Response } from 'express';
import * as R from 'ramda';

import { Route, UserRequest } from '@types';
import ParticipantController from '@controllers/Participant.controller';
import * as AuthHandler from '@utils/AuthHandler';
import Participant from '@entities/Participant.entity';
import Game from "@entities/Game.entity";

const editRoutes: Route[] = [
  {
    path: '/v1/participants/:id',
    method: 'get',
    handler: async (req: UserRequest, res: Response, next: NextFunction): Promise<void> => {
      AuthHandler.checkAdminPrivileges(req, next);

      const { id } = req.params;
      if (R.isNil(id)) {
        return next();
      }

      const participant = await ParticipantController.GetById(id);

      res.status(200);
      res.send(participant);
      return next();
    },
  },
  {
    path: '/v1/participants/:id',
    method: 'put',
    handler: async (req: UserRequest, res: Response, next: NextFunction): Promise<void> => {
      AuthHandler.checkAdminPrivileges(req, next);

      const { id } = req.params;
      if (R.isNil(id)) {
        return next();
      }

      let participantData = new Participant();
      participantData = Object.assign(participantData, req.body);

      await ParticipantController.Update(participantData, id);

      res.status(200);
      res.send({
        message: 'Successfully updated participant',
      });
      return next();
    },
  },
  {
    path: '/v1/participants/:id',
    method: 'delete',
    handler: async (req: UserRequest, res: Response, next: NextFunction): Promise<void> => {
      AuthHandler.checkAdminPrivileges(req, next);

      const { id } = req.params;
      if (R.isNil(id)) {
        return next();
      }

      await ParticipantController.Delete(id);

      res.status(200);
      res.send({
        message: 'Successfully deleted participant',
      });
      return next();
    },
  },
];

export default editRoutes;
