import { IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';

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

  @IsString()
  paymentDate: string;

  @IsOptional()
  paymentMethod?: string;
}
