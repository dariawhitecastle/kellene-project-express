import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserDomainRole } from './UserDomainRole'
import { Application } from './Application'

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  emailAddress: string;

  @OneToMany(type => UserDomainRole, userToRole => userToRole.user, { eager: true })
  public userDomainRoles!: UserDomainRole[];

  @OneToMany(type => Application, application => application.user)
  public userApplications: Application[];

}
