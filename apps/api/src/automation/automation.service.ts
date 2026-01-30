import { Injectable, Logger } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import { subMinutes, subHours } from 'date-fns'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class AutomationService {
  private readonly logger = new Logger(AutomationService.name)

  constructor(private readonly prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_5_MINUTES)
  async monitorMilestoneDelays() {
    const now = new Date()
    const delayedMilestones = await this.prisma.milestone.findMany({
      where: {
        dueDate: { lt: now },
        status: { notIn: ['COMPLETED', 'APPROVED'] },
      },
      include: { project: true },
    })

    if (!delayedMilestones.length) {
      return
    }

    for (const landmark of delayedMilestones) {
      await this.prisma.automationLog.create({
        data: {
          type: 'milestone-delay',
          payload: {
            milestoneId: landmark.id,
            projectId: landmark.projectId,
            overdueMs: now.getTime() - new Date(landmark.dueDate ?? now).getTime(),
          },
        },
      })
      this.logger.warn(`Milestone ${landmark.id} past due for project ${landmark.projectId}`)
    }
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  async monitorEscrowStuck() {
    const threshold = subHours(new Date(), 48)
    const stuck = await this.prisma.milestone.findMany({
      where: {
        escrowStatus: 'HOLD',
        updatedAt: { lt: threshold },
      },
    })
    if (!stuck.length) {
      return
    }
    for (const milestone of stuck) {
      await this.prisma.automationLog.create({
        data: {
          type: 'escrow-stuck',
          payload: {
            milestoneId: milestone.id,
            projectId: milestone.projectId,
            lastUpdated: milestone.updatedAt,
          },
        },
      })
      this.logger.warn(`Escrow hold milestone ${milestone.id} stale for ${milestone.projectId}`)
    }
  }

  @Cron(CronExpression.EVERY_HOUR)
  async monitorIdleClients() {
    const threshold = subHours(new Date(), 72)
    const idleProjects = await this.prisma.project.findMany({
      where: {
        updatedAt: { lt: threshold },
      },
      take: 5,
    })
    for (const project of idleProjects) {
      await this.prisma.automationLog.create({
        data: {
          type: 'idle-client',
          payload: {
            projectId: project.id,
            ownerId: project.ownerId,
          },
        },
      })
      this.logger.log(`Project ${project.id} considered idle (updated ${project.updatedAt.toISOString()})`)
    }
  }
}
