import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entities/project.entity";
import { Not, Repository } from "typeorm";
import ProjectsStatusEnum from "./enums/projectsStatusEnum";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    try {
      const newProject = this.projectRepository.create(createProjectDto);
      return await this.projectRepository.save(newProject);
    } catch (eror) {
      throw new BadRequestException("error creating project");
    }
  }

  async findAll(
    status?: ProjectsStatusEnum,
    limit: number = 10,
    page: number = 1,
  ) {
    const query = this.projectRepository.createQueryBuilder("projects");
    if (status) {
      // add a conditions
      query.where("projects.status = :status ", { status: status });
    }
    // set pagenations
    query.skip((page - 1) * limit).take(limit);
    return await query.getMany();
  }

  

  async findOne(id: number) {
    // get project  by id
    // find one service
    const project = await this.projectRepository.findOne({
      where: {
        id: id,
      },
    });
    // igf roject not found
    if (!project) {
      throw new NotFoundException(`project ${id} is not found `);
    }
    return project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    // update oparation
    const project = await this.projectRepository.findOneBy({ id });
    if (!project) {
      throw new NotFoundException(`project ${id} is not found`);
    } else {
      // update
      const updateProject = await this.projectRepository.update(
        id,
        UpdateProjectDto,
      );
      return updateProject;
    }
  }

  async remove(id: number): Promise<void> {
    const deleteProject = await this.projectRepository.delete(id);
    if (deleteProject.affected === 0) {
      throw new BadRequestException(`project ${id} is not found`);
    }
  }
}
