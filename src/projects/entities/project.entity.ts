import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import StatusEnum from "../enums/statusEnum";

@Entity({ name: "projects" })
export class Project {
  // creating projects entitys
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: "enum", enum: StatusEnum, default: StatusEnum.Enable })
  // this is enum fild
  status: StatusEnum;
}
