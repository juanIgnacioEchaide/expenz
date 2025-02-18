import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
/* import { RegistrationBuilder } from '../../domain/builders/registration.builder'; */
import { Registration } from '../../domain/models/registration.model';
import { IRegistrationRepository } from '../../domain/repositories/registration.repository';
import { CreateRegistrationDto } from '../dto/create-registration.dto';
import { UpdateRegistrationDto } from '../dto/update-registration.dto';
import { RegistrationDocument } from '../mongo/registration.schema';
import { BadRequestException } from '@nestjs/common';
export class RegistrationRepository implements IRegistrationRepository {
  constructor(
    @InjectModel(Registration.name)
    private readonly registrationModel: Model<RegistrationDocument>,
  ) {}

  async create(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    const createdRegistration = new this.registrationModel(
      createRegistrationDto,
    );
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

  async findByPeriod(start: string, end: string): Promise<Registration[]> {
    if (!start || !end) {
        throw new BadRequestException('Start and end dates are required.');
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new BadRequestException('Invalid date format.');
    }

    console.log('Query:', {
        paymentDate: {
            $gte: startDate,
            $lte: endDate,
        },
    });

    return this.registrationModel
        .find({
            paymentDate: {
                $gte: startDate,
                $lte: endDate,
            },
        })
        .exec();
}
}
