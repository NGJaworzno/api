import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm-plus';
import Team from './Team.entity';
import Base from './Base.entity';

@Entity('games')
class Game extends Base {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(
    () => Team,
    (team: Team) => team.game,
  )
  teams!: Team[];
}

export default Game;
