import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PaymentMethod } from '../../domain/models/payment-method.model';

export type RegistrationDocument = Registration & Document;

@Schema()
export class Registration {
  @Prop()
  id: string;

  @Prop()
  amount: number;

  @Prop()
  currency: string;

  @Prop()
  recipient: string;

  @Prop()
  description: string;

  @Prop({ default: Date.now })
  paymentDate: Date;

  @Prop({ type: 'object' })
  paymentMethod: PaymentMethod;
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
