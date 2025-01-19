import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseError } from 'mongoose';
import { Registration } from '../../domain/models/registration.model';
import { IRegistrationRepository } from '../../domain/repositories/registration.repository';
import { CreateRegistrationDto } from '../dto/create-registration.dto';
import { UpdateRegistrationDto } from '../dto/update-registration.dto';
import { RegistrationDocument } from '../mongo/registration.schema';
import { InvalidRegistrationDataException } from '../../infrastructure/exceptions/invalid-registration-data.exception';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class RegistrationRepository implements IRegistrationRepository {
  constructor(
    @InjectModel(Registration.name)
    private readonly registrationModel: Model<RegistrationDocument>,
  ) {}

  async create(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    try {
      await validateOrReject(createRegistrationDto);
      const registrationData = plainToInstance(Registration, {
        ...createRegistrationDto,
        description: createRegistrationDto.description || '',
        paymentMethod: createRegistrationDto.paymentMethod || '',
        paymentDate: new Date(createRegistrationDto.paymentDate),
      });

      const createdRegistration = new this.registrationModel(registrationData);
      return await createdRegistration.save();
    } catch (error) {
      if (Array.isArray(error)) {
        throw new InvalidRegistrationDataException();
      }

      if (error instanceof MongooseError) {
        throw new InvalidRegistrationDataException();
      }

      throw error;
    }
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

  async findByDateRange(
    startDate?: string,
    endDate?: string,
  ): Promise<Registration[]> {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return this.registrationModel
      .find({
        paymentDate: { $gte: start, $lte: end },
      })
      .exec();
  }
}
