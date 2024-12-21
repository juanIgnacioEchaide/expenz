import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './modules/registration/infrastructure/registration.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URI,
      }),
    }),
    RegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
