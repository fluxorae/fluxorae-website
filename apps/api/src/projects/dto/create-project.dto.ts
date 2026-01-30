import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  requirements!: string;

  @IsOptional()
  @IsString()
  serviceSlug?: string;

  @IsOptional()
  @IsInt()
  @Min(1000)
  budgetCents?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  timelineDays?: number;

  @IsOptional()
  @IsString()
  clientId?: string;
}
