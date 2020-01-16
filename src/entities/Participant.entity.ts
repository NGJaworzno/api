import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm-plus';
import { ParticipantRole } from '@types';
import Team from './Team.entity';
import Base from './Base.entity';

@Entity('participants')
class Participant extends Base {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  birthday!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  role!: ParticipantRole;

  @ManyToOne(() => Team, (team: Team) => team.participants)
  @JoinColumn()
  team!: Team | null;
}

export default Participant;
