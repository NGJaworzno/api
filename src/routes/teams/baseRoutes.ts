import { NextFunction, Request, Response } from 'express';
import * as R from 'ramda';

import { Route } from '@types';
import TeamController from '@controllers/Team.controller';
import ParticipantController from '@controllers/Participant.controller';
import Participant from '@entities/Participant.entity';
import * as ErrorHandler from '@utils/ErrorHandler';

const baseRoutes: Route[] = [
  {
    path: '/v1/teams',
    method: 'get',
    handler: async (req: Request, res: Response): Promise<void> => {
      const teams = await TeamController.GetAll();

      res.status(200);
      res.send({
        teams,
      });
    },
  },
  {
    path: '/v1/teams',
    method: 'post',
    handler: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      await TeamController.Add(req.body);

      const createdTeam = await TeamController.GetByConditions({ name: req.body.name });
      if (createdTeam === undefined) {
        ErrorHandler.notFoundError();
        return next();
      }

      const toParticipant = (value: Partial<Participant>): Partial<Participant> => ({
        ...value,
        team: createdTeam,
      });
      const participants = R.map(toParticipant, req.body.participants);

      await ParticipantController.Add(participants);

      res.status(200);
      res.send({
        message: 'Successfully created team and participants',
      });
    },
  },
];

export default baseRoutes;
