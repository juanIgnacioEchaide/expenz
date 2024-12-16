import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from '../../adapters/dto/create-registration.dto';
import { UpdateRegistrationDto } from '../../adapters/dto/update-registration.dto';
import { Registration } from '../../domain/models/registration.model';
import { IRegistrationRepository } from '../../domain/repositories/registration.repository';
import { IRegistrationService } from '../../domain/services/registration.service';

@Injectable()
export class RegistrationService implements IRegistrationService {
  constructor(
    private readonly registrationRepository: IRegistrationRepository,
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
}
