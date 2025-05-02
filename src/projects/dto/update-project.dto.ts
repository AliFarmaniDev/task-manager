import { PartialType } from "@nestjs/mapped-types";
import { CreateProjectDto } from "./create-project.dto";
import ProjectsStatusEnum from "../enums/projectsStatusEnum";

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  name: string;
  status: ProjectsStatusEnum;
}
