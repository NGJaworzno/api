import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm-plus';
import { Length } from 'class-validator';
import Team from './Team.entity';
import Base from './Base.entity';

@Entity('games')
class Game extends Base {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Length(3, 100)
  name!: string;

  @OneToMany(
    () => Team,
    (team: Team) => team.game,
  )
  teams!: Team[];
}

export default Game;
