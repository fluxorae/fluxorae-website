import { Body, Controller, Param, Post, Request, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PayMilestoneDto } from './dto/pay-milestone.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('milestones/:id/pay')
  payMilestone(
    @Param('id') milestoneId: string,
    @Body() dto: PayMilestoneDto,
    @Request() req: Record<string, any>,
  ) {
    return this.paymentsService.payMilestone(milestoneId, dto);
  }
}
