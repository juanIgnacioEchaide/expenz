import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from '../../adapters/dto/create-registration.dto';
import { UpdateRegistrationDto } from '../../adapters/dto/update-registration.dto';
import { Registration } from '../../domain/models/registration.model';
import { IRegistrationService } from '../../domain/services/registration.service';
import { RegistrationRepository } from '../../adapters/repositories/registration.repository';

@Injectable()
export class RegistrationService implements IRegistrationService {
  constructor(
    private readonly registrationRepository: RegistrationRepository,
  ) {}

  async create(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    return this.registrationRepository.create(createRegistrationDto);
  }

  async findAll(): Promise<Registration[]> {
    return this.registrationRepository.findAll();
  }

  async findOne(id: string): Promise<Registration | null> {
    return this.registrationRepository.findOne(id);
  }

  async update(
    id: string,
    updateRegistrationDto: UpdateRegistrationDto,
  ): Promise<Registration | null> {
    return this.registrationRepository.update(id, updateRegistrationDto);
  }

  async remove(id: string): Promise<void> {
    return this.registrationRepository.delete(id);
  }

  async findByPeriod(start: string, end: string): Promise<Registration[]> {
    if (!start || !end) {
      throw new Error('Start and end dates are required.');
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      throw new Error('Invalid date format.');
    }

    return this.registrationRepository.findByPeriod(start, end);
  }
}
