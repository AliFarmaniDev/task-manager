import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import ProjectsStatusEnum from "../enums/projectsStatusEnum";

@Entity({ name: "projects" })
export class Project {
  // creating projects entitys
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: "enum", enum: ProjectsStatusEnum, default:ProjectsStatusEnum.Enable })
  // this is enum fild
  status: ProjectsStatusEnum;
}
