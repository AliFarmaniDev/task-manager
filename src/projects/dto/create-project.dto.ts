import ProjectsStatusEnum from "../enums/projectsStatusEnum";

export class CreateProjectDto {
  name: string;
  status: ProjectsStatusEnum;
}
