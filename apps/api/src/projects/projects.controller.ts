import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: CreateProjectDto, @Request() req: Record<string, any>) {
    return this.projectsService.createProject(body, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  list(@Request() req: Record<string, any>) {
    return this.projectsService.listProjects(req.user.id);
  }
}
