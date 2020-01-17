import { NextFunction, Request, Response } from 'express';
import * as R from 'ramda';
import { validateSync } from 'class-validator';

import { ParticipantRole, Route } from '@types';
import TeamController from '@controllers/Team.controller';
import ParticipantController from '@controllers/Participant.controller';
import Team from '@entities/Team.entity';
import Participant from '@entities/Participant.entity';
import * as ErrorHandler from '@utils/ErrorHandler';
import { HTTP400Error } from '@utils/httpErrors';

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
      const toParticipantInstance = (reqData: Partial<Participant>): Participant => {
        let participantData = new Participant();
        participantData = Object.assign(participantData, reqData);
        participantData.birthday = new Date(participantData.birthday);
        participantData.role = ParticipantRole.Player;

        const errors = validateSync(participantData);
        const hasErrors = R.gt(R.length(errors), 0);
        if (hasErrors) {
          throw new HTTP400Error({
            validation: errors,
          });
        }

        return participantData;
      };
      const participants: Participant[] = R.map(toParticipantInstance, req.body.participants);

      let teamData = new Team();
      teamData = Object.assign(teamData, req.body);
      await TeamController.Add(teamData);

      const createdTeam = await TeamController.GetByConditions({ name: teamData.name });
      if (createdTeam === undefined) {
        ErrorHandler.notFoundError();
        return next();
      }

      const withTeam = (participant: Participant): Participant => {
        // eslint-disable-next-line no-param-reassign
        participant.team = createdTeam;
        return participant;
      };
      const participantsWithTeam: Participant[] = R.map(withTeam, participants);
      await ParticipantController.Add(participantsWithTeam);

      res.status(200);
      res.send({
        message: 'Successfully created team and participants',
      });
      return next();
    },
  },
];

export default baseRoutes;
