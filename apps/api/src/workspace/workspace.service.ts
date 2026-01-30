import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkspaceService {
  constructor(private readonly prisma: PrismaService) {}

  async addMessage(projectId: string, senderId: string, body: string, channel: string) {
    const project = await this.prisma.project.findUnique({ where: { id: projectId } });
    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return this.prisma.message.create({
      data: {
        projectId,
        senderId,
        body,
        channel,
      },
    });
  }

  async listMessages(projectId: string) {
    return this.prisma.message.findMany({
      where: { projectId },
      orderBy: { createdAt: 'asc' },
      include: { sender: true },
    });
  }
}
