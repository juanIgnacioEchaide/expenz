import { IsOptional, IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class UpdateRegistrationDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  recipient: string;

  @IsOptional()
  description?: string;

  @IsString()
  paymentDate: string;

  @IsOptional()
  paymentMethod?: string;
}
