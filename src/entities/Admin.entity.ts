import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
  AfterInsert,
} from 'typeorm';
import bcrypt from 'bcrypt';

export const HASH_SALT_ROUNDS = 10;

@Entity()
class Admin {
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
      this.password = bcrypt.hashSync(this.password, HASH_SALT_ROUNDS);
    }
  }
}

export default Admin;
