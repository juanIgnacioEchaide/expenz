import { IsNumber, IsString } from 'class-validator';

export class CreateRegistrationDto {
  @IsNumber()
  amount: number;

  @IsString()
  currency: string;

  @IsString()
  recipient: string;

  @IsString()
  description?: string;

  @IsString()
  paymentDate: string;

  @IsString()
  paymentMethod?: string;
}
