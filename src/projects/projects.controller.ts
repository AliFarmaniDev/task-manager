import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import ProjectsStatusEnum from "./enums/projectsStatusEnum";
import { Response } from "express";

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  async findAll(
    // set response
    @Res() res: Response,
    @Query("status") status?: ProjectsStatusEnum,
    // set page router
    @Query("limit") limit: number = 10,
    @Query("page") page: number = 10,
  ) {
    const project = await this.projectsService.findAll(status, limit, page);
    return res.status(HttpStatus.OK).json({
      // return response
      statusCode: HttpStatus.OK,
      data: project,
      message: "project found",
    });
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.projectsService.remove(+id);
  }
}
