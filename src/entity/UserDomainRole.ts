import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from './User'
import { Domain } from './Domain'
import { Role } from './Role'

@Entity()
export class UserDomainRole {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  emailAddress: string;

  @ManyToOne(type => User, user => user.userDomainRoles)
  public user!: User;

  @ManyToOne(type => Domain, domain => domain.userDomainRoles)
  public domain!: Domain;

  @ManyToOne(type => Role, role => role.userDomainRoles)
  public role!: Role;

}
