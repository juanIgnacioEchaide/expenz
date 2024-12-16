import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationSchema } from '../adapters/mongo/registration.schema';
import { RegistrationRepository } from '../adapters/repositories/registration.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Registration', schema: RegistrationSchema },
    ]),
  ],
  providers: [RegistrationRepository],
  exports: [RegistrationRepository],
})
export class RegistrationModule {}
