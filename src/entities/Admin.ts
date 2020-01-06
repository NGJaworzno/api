import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Admin {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;
}

export default Admin;
