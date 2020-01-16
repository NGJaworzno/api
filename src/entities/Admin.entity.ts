import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
  DeleteDateColumn,
} from 'typeorm-plus';
// eslint-disable-next-line import/no-cycle
import * as AuthHandler from '@utils/AuthHandler';
import Base from './Base.entity';

@Entity('admins')
class Admin extends Base {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  private tempPassword!: string;

  @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  public updateHash(): void {
    if (this.tempPassword !== this.password) {
      this.password = AuthHandler.createPasswordHash(this.password);
    }
  }
}

export default Admin;
