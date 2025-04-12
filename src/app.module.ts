import { Module } from "@nestjs/common";
import { ProjectsModule } from "./projects/projects.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksModule } from "./tasks/tasks.module";

@Module({
  imports: [
    ProjectsModule,
    TypeOrmModule.forRoot({
      // connect to db
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "task_manager",
      // add entities
      entities: [__dirname + "/**/entities/*.entity{.ts,.js}"],
      // synchronize for development mod
      synchronize: true,
    }),
    TasksModule,
  ],
})
export class AppModule {}
