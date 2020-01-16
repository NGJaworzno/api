import { FindConditions } from 'typeorm-plus';
import Team from '@entities/Team.entity';
import BaseController, {
  simpleGetMany,
  simpleAdd,
  simpleUpdate,
  simpleSoftDelete,
  simpleGetOneById, simpleGetOneByConditions,
} from './Base.controller';

interface TeamController<T> extends BaseController<T> {
  GetByConditions(conditions: FindConditions<Team>): Promise<Team | void>;
}

const TeamController: TeamController<Team> = {
  GetById(id) {
    return simpleGetOneById<Team>(Team, id);
  },
  GetByConditions(conditions) {
    return simpleGetOneByConditions<Team>(Team, conditions);
  },
  GetAll() {
    return simpleGetMany<Team>(Team, 'team');
  },
  async Add(data) {
    await simpleAdd<Team>(Team, data);
  },
  async Update(data, id) {
    await simpleUpdate<Team>(Team, data, id);
  },
  async Delete(id) {
    await simpleSoftDelete<Team>(Team, id);
  },
};

export default TeamController;
