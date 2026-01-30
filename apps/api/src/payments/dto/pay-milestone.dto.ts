import { IsInt, IsString, Min } from 'class-validator';

export class PayMilestoneDto {
  @IsInt()
  @Min(100)
  amountCents!: number;

  @IsString()
  provider!: string;
}
