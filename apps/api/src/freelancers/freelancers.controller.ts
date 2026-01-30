import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateFreelancerDto } from './dto/create-freelancer.dto';
import { FreelancersService } from './freelancers.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('freelancers')
export class FreelancersController {
  constructor(private readonly freelancersService: FreelancersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('onboard')
  onboard(@Body() dto: CreateFreelancerDto, @Request() req: Record<string, any>) {
    return this.freelancersService.onboard(dto, req.user.id);
  }

  @Get()
  list() {
    return this.freelancersService.listAvailable();
  }
}
