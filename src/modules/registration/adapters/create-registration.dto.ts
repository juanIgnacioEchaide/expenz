import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateRegistrationDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  // Add other fields as needed, e.g., password, phone number, etc.
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
