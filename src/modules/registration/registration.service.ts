import { Injectable } from '@nestjs/common';

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

  async remove(id: string): Promise<Registration> {
    return this.registrationModel.findByIdAndRemove(id).exec();
  }
}
