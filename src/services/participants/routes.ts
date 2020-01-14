import { Response } from 'express';
import { getRepository } from 'typeorm';
import * as R from 'ramda';

import { Route, UserRequest } from '../../types';
import Participant from '../../entities/Participant.entity';
import * as ErrorHandler from '../../utils/ErrorHandler';

const routes: Route[] = [
  {
    path: '/v1/participants',
    method: 'get',
    handler: async (req: UserRequest, res: Response): Promise<void> => {
      if (R.isNil(req.user)) {
        ErrorHandler.notAuthorizedError();
        return;
      }

      const participants = await getRepository(Participant)
        .createQueryBuilder('participant')
        .getMany();

      res.status(200);
      res.send({ participants });
    },
  },
];

export default routes;
