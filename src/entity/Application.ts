import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Application {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}
