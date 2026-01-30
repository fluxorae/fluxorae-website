import { Injectable } from '@nestjs/common';
import { Prisma, Status } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFreelancerDto } from './dto/create-freelancer.dto';

@Injectable()
export class FreelancersService {
  constructor(private readonly prisma: PrismaService) {}

  async onboard(dto: CreateFreelancerDto, userId: string) {
    const payload = {
      userId,
      skills: dto.skills,
      availability: (dto.availability as Prisma.InputJsonValue) ?? undefined,
      portfolio: (dto.portfolio as Prisma.InputJsonValue) ?? undefined,
      rating: 0,
      hourlyRateCents: dto.hourlyRateCents,
      verified: false,
      status: Status.ACTIVE,
    };

    const existing = await this.prisma.freelancerProfile.findUnique({ where: { userId } });
    if (existing) {
      return this.prisma.freelancerProfile.update({ where: { userId }, data: payload });
    }

    return this.prisma.freelancerProfile.create({ data: payload });
  }

  async listAvailable() {
    return this.prisma.freelancerProfile.findMany({ where: { status: Status.ACTIVE }, take: 15 });
  }
}
