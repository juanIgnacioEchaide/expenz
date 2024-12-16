import { RegistrationBuilder } from '../../domain/builders/registration.builder';
import { Registration } from '../../domain/models/registration.model';
import { IRegistrationRepository } from '../../domain/repositories/registration.repository';
import { CreateRegistrationDto } from '../dto/create-registration.dto';
import { UpdateRegistrationDto } from '../dto/update-registration.dto';

export class registrationRepository implements IRegistrationRepository {
  async create(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    const registration = await new RegistrationBuilder()
      .withAmount(createRegistrationDto.amount)
      .withCurrency(createRegistrationDto.currency)
      .withDescription(createRegistrationDto.description)
      .withPaymentDate(new Date())
      .withPaymentMethod(createRegistrationDto.paymentMethod)
      .withRecipient(createRegistrationDto.recipient)
      .build();

    return registration;
  }
  findAll(): Promise<Registration[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<Registration | null> {
    console.log(id);
    return new Promise((resolve) => resolve(new Registration()));
  }
  update(
    id: string,
    update: Partial<UpdateRegistrationDto>,
  ): Promise<Registration | null> {
    console.log(id, update);
    return new Promise((resolve) => resolve(new Registration()));
  }

  delete(id: string): Promise<void> {
    console.log(id);
    return new Promise((resolve) => resolve());
  }
}
