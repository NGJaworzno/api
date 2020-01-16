import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Unique,
} from 'typeorm-plus';
import Game from './Game.entity';
import Participant from './Participant.entity';
import Base from './Base.entity';

@Entity('teams')
@Unique(['name'])
class Team extends Base {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column()
  reserve!: boolean;

  @ManyToOne(() => Game)
  @JoinColumn()
  game!: Game;

  @OneToMany(
    () => Participant,
    (participant: Participant) => participant.team,
  )
  participants!: Participant[];
}

export default Team;
