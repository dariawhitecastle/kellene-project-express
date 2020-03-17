import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany } from "typeorm";
import { Answer } from './Answer'
import { Section } from "./Section";

@Entity()
export class Question { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    responseOptions: string;

    @Column()
    externalUse: boolean;

    @ManyToOne(type => Section, section => section.question)
    public section: Section;

    @OneToMany(type => Answer, answer => answer.question)
    public answer: Answer[]
}