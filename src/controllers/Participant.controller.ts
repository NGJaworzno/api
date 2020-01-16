import Participant from '@entities/Participant.entity';
import BaseController, {
  simpleGetMany,
  simpleAdd,
  simpleUpdate,
  simpleSoftDelete,
  simpleGetOneById,
} from './Base.controller';

const ParticipantController: BaseController<Participant> = {
  GetById(id) {
    return simpleGetOneById<Participant>(Participant, id);
  },
  GetAll() {
    return simpleGetMany<Participant>(Participant, 'participant');
  },
  async Add(data) {
    await simpleAdd<Participant>(Participant, data);
  },
  async Update(data, id) {
    await simpleUpdate<Participant>(Participant, data, id);
  },
  async Delete(id) {
    await simpleSoftDelete<Participant>(Participant, id);
  },
};

export default ParticipantController;
