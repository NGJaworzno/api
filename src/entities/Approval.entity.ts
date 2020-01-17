import {
  Entity, OneToOne, JoinColumn, Column, Generated, PrimaryGeneratedColumn,
} from 'typeorm-plus';
import Participant from './Participant.entity';
import Base from './Base.entity';

@Entity('approvals')
class Approval extends Base {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Generated('uuid')
  key!: string;

  @OneToOne(() => Participant)
  @JoinColumn()
  participant!: Participant;
}

export default Approval;
