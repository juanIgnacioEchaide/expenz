import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { CreateRegistrationDto } from '../dto/create-registration.dto';
import { UpdateRegistrationDto } from '../dto/update-registration.dto';
import { RegistrationService } from '../../application/services/registration.service';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  async create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationService.create(createRegistrationDto);
  }

  @Get()
  async findAll() {
    return this.registrationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.registrationService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRegistrationDto: UpdateRegistrationDto,
  ) {
    return this.registrationService.update(id, updateRegistrationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.registrationService.remove(id);
  }

  @Get('by-period') // Full path becomes '/registration/by-period'
  async findByPeriod(@Query('start') start: string, @Query('end') end: string) {
    console.log('Start:', start, 'End:', end); 
    try {
      return await this.registrationService.findByPeriod(start, end);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
