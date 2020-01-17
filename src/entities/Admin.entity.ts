import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
  Unique, PrimaryGeneratedColumn,
} from 'typeorm-plus';
import {
  IsEmail,
  Length,
  validateOrReject,
} from 'class-validator';

import * as AuthHandler from '@utils/AuthHandler';
import Base from './Base.entity';

@Entity('admins')
@Unique(['email'])
class Admin extends Base {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  @IsEmail()
  email!: string;

  @Column()
  @Length(8, 80)
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
