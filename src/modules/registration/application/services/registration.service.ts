import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRegistrationDto } from '../../adapters/dto/create-registration.dto';
import { UpdateRegistrationDto } from '../../adapters/dto/update-registration.dto';
import { Registration } from '../../domain/models/registration.model';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel('Registration')
    private readonly registrationModel: Model<Registration>,
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

  async findOne(id: string): Promise<Registration> {
    return this.registrationModel.findById(id).exec();
  }

  async update(
    id: string,
    updateRegistrationDto: UpdateRegistrationDto,
  ): Promise<Registration> {
    return this.registrationModel
      .findByIdAndUpdate(id, updateRegistrationDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<void> {
    await this.registrationModel.deleteOne({ _id: id }).exec();
  }
}
