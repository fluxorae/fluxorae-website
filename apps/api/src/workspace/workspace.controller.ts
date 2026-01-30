import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { WorkspaceService } from './workspace.service';
import { SendMessageDto } from './dto/send-message.dto';

@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @UseGuards(JwtAuthGuard)
  @Post('messages')
  send(@Body() body: SendMessageDto, @Request() req: Record<string, any>) {
    return this.workspaceService.addMessage(body.projectId, req.user.id, body.body, body.channel);
  }

  @UseGuards(JwtAuthGuard)
  @Get('messages/:projectId')
  list(@Param('projectId') projectId: string) {
    return this.workspaceService.listMessages(projectId);
  }
}
