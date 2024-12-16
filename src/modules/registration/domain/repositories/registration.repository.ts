import { CreateRegistrationDto } from '../../adapters/dto/create-registration.dto';
import { Registration } from '../../domain/models/registration.model';

export interface IRegistrationRepository {
  create(registration: CreateRegistrationDto): Promise<Registration>;
  findAll(): Promise<Registration[]>;
  findOne(id: string): Promise<Registration | null>;
  update(
    id: string,
    update: Partial<Registration>,
  ): Promise<Registration | null>;
  delete(id: string): Promise<void>;
}