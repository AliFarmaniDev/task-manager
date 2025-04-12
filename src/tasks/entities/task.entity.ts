import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import TasksStatusEnums from "../enums/taskStatusEnum";

@Entity({name: "tasks"})
export class Task {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string;
    @Column()
    discriptions:string;
    @Column({type:"enum" , enum: TasksStatusEnums , default: TasksStatusEnums.Set})
    status:TasksStatusEnums
}
