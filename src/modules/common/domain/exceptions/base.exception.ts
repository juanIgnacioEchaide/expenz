import { HttpException, HttpStatus } from '@nestjs/common';

export abstract class BaseException extends HttpException {
  constructor(httpStatus: HttpStatus, module: string, detail: string) {
    super('Forbidden', httpStatus, {
      description: `[${module}] - ${detail}`,
    });
  }
}
