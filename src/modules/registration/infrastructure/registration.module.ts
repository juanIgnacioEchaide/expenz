import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationSchema } from '../adapters/mongo/registration.schema';
import { RegistrationRepository } from '../adapters/repositories/registration.repository';
import { RegistrationController } from '../adapters/controllers/registration.controller';
import { RegistrationService } from '../application/services/registration.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Registration', schema: RegistrationSchema },
    ]),
  ],
  controllers: [RegistrationController],
  providers: [RegistrationRepository, RegistrationService],
  exports: [RegistrationRepository],
})
export class RegistrationModule {}
