import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;      
}