import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserDomainRole } from './UserDomainRole'

@Entity()
export class Domain {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => UserDomainRole, userDomainRoles => userDomainRoles.user)
  public userDomainRoles!: UserDomainRole[];

}
