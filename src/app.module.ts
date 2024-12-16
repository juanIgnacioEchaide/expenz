import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './modules/registration/infrastructure/registration.module';

@Module({
  imports: [RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
