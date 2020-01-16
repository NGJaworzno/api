import { NextFunction, Response } from 'express';
import * as R from 'ramda';

import { Route, UserRequest } from '@types';
import ParticipantController from '@controllers/Participant.controller';
import * as AuthHandler from '@utils/AuthHandler';
import Participant from '@entities/Participant.entity';

const baseRoutes: Route[] = [
  {
    path: '/v1/participants',
    method: 'get',
    handler: async (req: UserRequest, res: Response, next: NextFunction): Promise<void> => {
      AuthHandler.checkAdminPrivileges(req, next);

      const participants = await ParticipantController.GetAll();

      res.status(200);
      res.send({
        participants,
      });
    },
  },
  {
    path: '/v1/participants',
    method: 'post',
    handler: async (req: UserRequest, res: Response, next: NextFunction): Promise<void> => {
      const participantData: Participant = req.body;

      const participantHasTeam = R.not(R.isNil(participantData.team));
      if (participantHasTeam) {
        AuthHandler.checkAdminPrivileges(req, next);
      }

      await ParticipantController.Add(participantData);

      res.status(200);
      res.send({
        message: 'Successfully created participant',
      });
    },
  },
];

export default baseRoutes;
