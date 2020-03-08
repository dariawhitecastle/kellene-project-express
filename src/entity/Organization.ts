import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from './User'

@Entity()
export class Organization {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => User, user => user.organization)
  users: User[];
}
