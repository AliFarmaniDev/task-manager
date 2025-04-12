import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import ProjectsStatusEnum from "../enums/projectsStatusEnum";
import { Task } from "src/tasks/entities/task.entity";

@Entity({ name: "projects" })
export class Project {
  // creating projects entitys
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({
    type: "enum",
    enum: ProjectsStatusEnum,
    default: ProjectsStatusEnum.Enable,
  })
  // this is enum fild
  status: ProjectsStatusEnum;

  // creating relations
  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}
