import {
  Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn,
} from 'typeorm-plus';
import Participant from './Participant.entity';
import Base from './Base.entity';

@Entity('approvals')
class Approval extends Base {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => Participant)
  @JoinColumn()
  participant!: Participant;
}

export default Approval;
