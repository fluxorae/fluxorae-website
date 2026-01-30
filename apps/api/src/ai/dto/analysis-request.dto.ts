import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

export enum AiRequestType {
  REQUIREMENT = 'requirement',
  RISK = 'risk',
  TALENT = 'talent',
}

export class AiAnalysisRequestDto {
  @IsString()
  @MaxLength(140)
  name!: string;

  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  domain?: string;

  @IsOptional()
  @IsEnum(AiRequestType)
  type?: AiRequestType;
}
