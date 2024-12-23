import { Prop } from '@nestjs/mongoose';

export class PaymentMethodProvider {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  userId: string;

  @Prop()
  alias?: string;

  @Prop()
  cvu?: string;

  @Prop()
  cbu?: string;
}
