import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PayMilestoneDto } from './dto/pay-milestone.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async payMilestone(milestoneId: string, dto: PayMilestoneDto) {
    const milestone = await this.prisma.milestone.findUnique({
      where: { id: milestoneId },
      include: { project: true },
    });

    if (!milestone) {
      throw new NotFoundException('Milestone not found');
    }

    if (milestone.escrowStatus === 'RELEASED') {
      throw new BadRequestException('Milestone already released');
    }

    const invoice = await this.prisma.invoice.create({
      data: {
        number: `INV-${Date.now()}`,
        amount: dto.amountCents / 100,
        clientId: milestone.project.clientId,
        projectId: milestone.projectId,
      },
    });

    const payment = await this.prisma.payment.create({
      data: {
        provider: dto.provider,
        amount: dto.amountCents / 100,
        invoiceId: invoice.id,
        milestoneId: milestone.id,
        status: 'PENDING',
      },
    });

    await this.prisma.milestone.update({
      where: { id: milestoneId },
      data: { escrowStatus: 'HOLD', status: 'PENDING' },
    });

    return { invoice, payment };
  }
}
