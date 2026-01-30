import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServicesService implements OnModuleInit {
  private readonly logger = new Logger(ServicesService.name);

  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    await this.seedCatalog();
  }

  async listServices() {
    return this.prisma.service.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getBySlug(slug: string) {
    return this.prisma.service.findUnique({ where: { slug } });
  }

  private async seedCatalog() {
    const count = await this.prisma.service.count();
    if (count > 0) {
      return;
    }

    const payload = [
      {
        slug: 'ai-automation',
        title: 'AI + Human Automation Pods',
        category: 'Automation',
        description: 'Combine human ops with AI automation for multi-step workflows.',
        deliverables: ['Process audit', 'Automation blueprint', 'Pilot implementation', 'Ops monitoring'],
        priceCents: 120000,
        customQuote: true,
        aiTags: ['automation', 'workflow'],
      },
      {
        slug: 'product-engineering',
        title: 'Full-Stack Product Engineering',
        category: 'Engineering',
        description: 'End-to-end product team with Next.js, NestJS, and infra ops.',
        deliverables: ['Digital strategy', 'Product backlog', 'Engineering squad', 'Launch support'],
        priceCents: 195000,
        customQuote: false,
        aiTags: ['nextjs', 'nest'],
      },
    ];

    await this.prisma.service.createMany({ data: payload });
    this.logger.log('Seeded initial service catalog');
  }
}
