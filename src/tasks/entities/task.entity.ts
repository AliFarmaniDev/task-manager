import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import TasksStatusEnums from "../enums/taskStatusEnum";
import { Project } from "src/projects/entities/project.entity";

@Entity({ name: "tasks" })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  discriptions: string;
  @Column({
    type: "enum",
    enum: TasksStatusEnums,
    default: TasksStatusEnums.Set,
  })
  status: TasksStatusEnums;

  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;
}
