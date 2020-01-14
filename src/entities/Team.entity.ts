import {
  Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany,
} from 'typeorm';
import Game from './Game.entity';
/* eslint import/no-cycle:0 */
import Participant from './Participant.entity';

@Entity()
class Team {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  reserve!: boolean;

  @OneToOne(() => Game)
  @JoinColumn()
  game!: Game;

  @OneToMany(
    () => Participant,
    (participant: Participant) => participant.team,
    {
      eager: true,
    },
  )
  participants!: Participant[];
}

export default Team;
