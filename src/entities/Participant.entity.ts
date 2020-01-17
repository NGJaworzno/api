import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Unique,
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm-plus';
import {
  IsEmail,
  IsDate,
  IsMobilePhone,
  MaxDate,
  IsString, validateOrReject,
} from 'class-validator';

import { ParticipantRole } from '@types';
import Team from './Team.entity';
import Base from './Base.entity';

@Entity('participants')
@Unique(['name', 'email'])
class Participant extends Base {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  @IsString()
  name!: string;

  @Column()
  @IsDate()
  @MaxDate(new Date())
  birthday!: Date;

  @Column({ type: 'varchar', length: 100 })
  @IsEmail()
  email!: string;

  @Column()
  @IsMobilePhone('pl-PL')
  phone!: string;

  @Column()
  role!: ParticipantRole;

  @ManyToOne(() => Team, (team: Team) => team.participants)
  @JoinColumn()
  team!: Team | null;
}

export default Participant;
