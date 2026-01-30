import { Injectable, Logger } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AiAnalysisRequestDto, AiRequestType } from './dto/analysis-request.dto';

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);

  constructor(private readonly prisma: PrismaService) {}

  async analyzeRequirement(dto: AiAnalysisRequestDto, userId?: string, projectId?: string) {
    const wordCount = dto.description.split(/\s+/).length;
    const confidence = Math.min(0.99, Math.max(0.35, wordCount / 200));
    const estimatedBudget = Math.max(80000, Math.floor(wordCount * 400));
    const estimatedTimelineDays = Math.min(60, Math.max(5, Math.floor(wordCount / 15)));
    const deliverables = this.extractDeliverables(dto.description);

    const result = {
      scope: {
        summary: `${dto.description.slice(0, 140)}...`,
        goal: `Deliver ${dto.name} with measurable outcomes`,
        kvMetrics: ['conversion', 'automation', 'customer satisfaction'],
        deliverySteps: deliverables,
      },
      estimations: {
        budget: estimatedBudget,
        timelineDays: estimatedTimelineDays,
      },
      talent: {
        skills: this.extractSkills(dto.description),
        matchingPriority: 'high',
      },
      riskSignals: this.detectRisks(dto.description),
    };

    const aiRunPayload: Prisma.AiRunCreateInput = {
      type: dto.type ?? AiRequestType.REQUIREMENT,
      result,
      confidence,
      agentLabel: 'ai-analyzer',
    };

    if (projectId) {
      aiRunPayload.project = { connect: { id: projectId } };
    }

    if (userId) {
      aiRunPayload.requester = { connect: { id: userId } };
    }

    await this.prisma.aiRun.create({
      data: aiRunPayload,
    });

    this.logger.log(`Recorded AI analysis for ${dto.name}`);

    return {
      ...result,
      estimatedBudget,
      estimatedTimelineDays,
      confidence,
    };
  }

  private extractDeliverables(description: string) {
    const sentences = description.split(/[.!?]+/).filter(Boolean);
    if (!sentences.length) {
      return ['Design requirements', 'Deliver MVP', 'Launch support'];
    }
    return sentences.slice(0, 3).map((sentence, index) => `Step ${index + 1}: ${sentence.trim()}`);
  }

  private extractSkills(description: string) {
    const keywords = ['automation', 'ai', 'engineer', 'ops', 'product', 'design', 'data'];
    return keywords.filter((keyword) => description.toLowerCase().includes(keyword));
  }

  private detectRisks(description: string) {
    if (description.toLowerCase().includes('compliance')) {
      return ['Compliance sensitivity'];
    }
    if (description.length < 80) {
      return ['Need finer scoping'];
    }
    return [];
  }
}
