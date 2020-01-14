import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import { ParticipantRole } from '../types';
/* eslint import/no-cycle:0 */
import Team from './Team.entity';

@Entity()
class Participant {
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
