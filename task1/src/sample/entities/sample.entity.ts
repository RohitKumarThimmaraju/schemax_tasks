import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//to define the below class as an entity we use Entity decorator
@Entity()
export class SampleTask{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    plantCode: string;

    @Column()
    plantName: string;

    @Column()
    userName: string;
}