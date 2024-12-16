import { IsOptional, IsNumber } from 'class-validator';

export class UpdateRegistrationDto {
  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  currency?: string;

  @IsOptional()
  recipient?: string;
}
