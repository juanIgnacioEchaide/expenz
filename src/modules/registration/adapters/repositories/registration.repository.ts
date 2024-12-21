import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
/* import { RegistrationBuilder } from '../../domain/builders/registration.builder'; */
import { Registration } from '../../domain/models/registration.model';
import { IRegistrationRepository } from '../../domain/repositories/registration.repository';
import { CreateRegistrationDto } from '../dto/create-registration.dto';
import { UpdateRegistrationDto } from '../dto/update-registration.dto';
import { RegistrationDocument } from '../mongo/registration.schema';
import { RegistrationBuilder } from '../../domain/builders/registration.builder';

export class RegistrationRepository implements IRegistrationRepository {
  constructor(
    @InjectModel(Registration.name)
    private readonly registrationModel: Model<RegistrationDocument>,
  ) {}

  async create(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    const registrationData = new RegistrationBuilder()
      .withCurrency(createRegistrationDto.currency)
      .withDescription(createRegistrationDto.description)
      .withAmount(createRegistrationDto.amount)
      .withPaymentDate(new Date(createRegistrationDto.paymentDate))
      .withRecipient(createRegistrationDto.recipient);

    const createdRegistration = new this.registrationModel(registrationData);
    return createdRegistration.save();
  }

  async findAll(): Promise<Registration[]> {
    return this.registrationModel.find().exec();
  }

  async findOne(id: string): Promise<Registration | null> {
    return this.registrationModel.findById(id).exec();
  }

  async update(
    id: string,
    update: Partial<UpdateRegistrationDto>,
  ): Promise<Registration | null> {
    return this.registrationModel
      .findByIdAndUpdate(id, update, { new: true })
      .exec();
  }

  async delete(id: string): Promise<void> {
    await this.registrationModel.findByIdAndDelete(id).exec();
  }
}
