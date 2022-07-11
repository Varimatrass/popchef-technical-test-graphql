import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Recipe extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;      
}