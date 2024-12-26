import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PaymentMethodSchema } from './payment-method.schema';

export type RegistrationDocument = Registration & Document;

@Schema()
export class Registration {
  @Prop()
  id: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  recipient: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  paymentDate: Date;

  @Prop({
    type: PaymentMethodSchema,
    required: true,
  })
  paymentMethod;
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
RegistrationSchema.index({ 'paymentMethod.provider.name': 1 });
