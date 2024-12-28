import { HttpStatus } from '@nestjs/common';
import { BaseException } from 'src/modules/common/domain/exceptions/base.exception';

export class InvalidRegistrationDataException extends BaseException {
  constructor() {
    super(
      HttpStatus.NOT_ACCEPTABLE,
      'REGISTRATION',
      'creation failed due to invalid data',
    );
  }
}
