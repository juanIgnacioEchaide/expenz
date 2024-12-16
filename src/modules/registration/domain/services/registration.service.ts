import { CreateRegistrationDto } from '../../adapters/dto/create-registration.dto';
import { UpdateRegistrationDto } from '../../adapters/dto/update-registration.dto';
import { Registration } from '../../domain/models/registration.model';

export interface IRegistrationService {
  create(createRegistrationDto: CreateRegistrationDto): Promise<Registration>;
  findAll(): Promise<Registration[]>;
  findOne(id: string): Promise<Registration | null>;
  update(
    id: string,
    updateRegistrationDto: UpdateRegistrationDto,
  ): Promise<Registration | null>;
  remove(id: string): Promise<void>;
}
