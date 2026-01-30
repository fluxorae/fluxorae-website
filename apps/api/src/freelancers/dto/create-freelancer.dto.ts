import { ArrayNotEmpty, IsArray, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateFreelancerDto {
  @IsOptional()
  @IsString()
  headline?: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  skills!: string[];

  @IsOptional()
  availability?: Record<string, unknown>;

  @IsOptional()
  portfolio?: Record<string, unknown>;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  hourlyRateCents?: number;
}
