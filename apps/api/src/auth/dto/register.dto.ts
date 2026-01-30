import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { Role } from '@prisma/client';

export class RegisterDto {
  @IsEmail()
  email!: string;

  @MinLength(8)
  password!: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsString()
  firstName!: string;

  @IsOptional()
  @IsString()
  lastName?: string;
}
