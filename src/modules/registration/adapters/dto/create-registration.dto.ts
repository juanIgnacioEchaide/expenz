import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateRegistrationDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  recipient: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  paymentMethod?: string;
}
