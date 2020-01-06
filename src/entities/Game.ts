import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}

export default Game;
