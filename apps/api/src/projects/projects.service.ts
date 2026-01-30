import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AiService } from '../ai/ai.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly aiService: AiService,
  ) {}

  async createProject(dto: CreateProjectDto, ownerId: string) {
    let client = null;

    if (dto.clientId) {
      client = await this.prisma.client.findUnique({ where: { id: dto.clientId } });
      if (!client) {
        throw new NotFoundException('Client not found');
      }
    } else {
      client = await this.ensureClient(ownerId);
    }

    const aiResult = await this.aiService.analyzeRequirement(
      {
        name: dto.name,
        description: dto.requirements,
        domain: dto.serviceSlug,
      },
      ownerId,
    );

    const project = await this.prisma.project.create({
      data: {
        name: dto.name,
        description: dto.description,
        clientId: client.id,
        ownerId,
        scope: aiResult.scope,
        estimatedBudget: aiResult.estimatedBudget,
        estimatedTimelineDays: aiResult.estimatedTimelineDays,
      },
    });

    await this.prisma.milestone.create({
      data: {
        title: 'Initial milestone',
        projectId: project.id,
        amountCents: dto.budgetCents ?? aiResult.estimatedBudget,
        dueDate: new Date(
          Date.now() +
            (dto.timelineDays ?? aiResult.estimatedTimelineDays) * 24 * 60 * 60 * 1000,
        ),
        status: 'PLANNED',
      },
    });

    return { project, aiResult };
  }

  async listProjects(ownerId: string) {
    return this.prisma.project.findMany({
      where: { ownerId },
      include: { milestones: true, tickets: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  private async ensureClient(ownerId: string) {
    const existing = await this.prisma.client.findFirst({ where: { ownerId } });
    if (existing) {
      return existing;
    }
    return this.prisma.client.create({
      data: {
        name: `Client-${ownerId.slice(0, 6)}`,
        ownerId,
      },
    });
  }
}
