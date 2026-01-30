import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiAnalysisRequestDto } from './dto/analysis-request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @UseGuards(JwtAuthGuard)
  @Post('analyze')
  analyze(@Body() dto: AiAnalysisRequestDto, @Request() req: Record<string, any>) {
    return this.aiService.analyzeRequirement(dto, req.user?.id);
  }
}
