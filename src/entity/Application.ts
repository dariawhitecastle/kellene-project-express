import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany } from "typeorm";
import { User } from './User'
import { Section } from './Section'

@Entity()
export class Application {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.userApplications)
  public user: User;

  @OneToMany(type => Section, section => section.application)
  public section!: Section[]
  
}
