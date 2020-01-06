import {
  Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany,
} from 'typeorm';
import Game from './Game';
import Participant from './Participant';

@Entity()
class Team {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  reserve!: boolean;

  @OneToOne(() => Game)
  @JoinColumn()
  game!: Game;

  @OneToMany(() => Participant, (participant: Participant) => participant.team)
  participants!: Participant[];
}

export default Team;
