import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Organization } from './Organization'
import { UserDomainRole } from './UserDomainRole'

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  emailAddress: string;

  @ManyToOne(type => Organization, organization => organization.users, { eager: true })
  organization: Organization;

  @OneToMany(type => UserDomainRole, userToRole => userToRole.user, { eager: true })
  public userDomainRoles!: UserDomainRole[];

}
