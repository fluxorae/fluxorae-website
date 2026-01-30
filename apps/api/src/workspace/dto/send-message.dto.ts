import { IsString } from 'class-validator';

export class SendMessageDto {
  @IsString()
  projectId!: string;

  @IsString()
  body!: string;

  @IsString()
  channel!: string;
}
