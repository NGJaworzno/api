import {
  Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn,
} from 'typeorm';
import Participant from './Participant.entity';

@Entity()
class Approval {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => Participant)
  @JoinColumn()
  participant!: Participant;
}

export default Approval;
