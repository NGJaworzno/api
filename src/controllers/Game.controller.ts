import Game from '@entities/Game.entity';
import BaseController, { simpleGetMany, simpleAdd } from './Base.controller';

interface GameControllerType<T> extends Partial<BaseController<T>>{
  GetAll(): Promise<T[]>;
  Add(data: T): Promise<void>;
}

const GameController: GameControllerType<Game> = {
  GetAll() {
    return simpleGetMany<Game>(Game, 'game');
  },
  async Add(data) {
    await simpleAdd<Game>(Game, data);
  },
};

export default GameController;
