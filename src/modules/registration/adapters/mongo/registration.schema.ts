import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PaymentMethod } from '../../domain/models/payment-method.model';
import dayjs from 'dayjs';

export type RegistrationDocument = Registration & Document;

@Schema()
export class Registration {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  amount: number;

  @Prop()
  currency: string;

  @Prop()
  recipient: string;

  @Prop()
  description: string;

    // Normalizing the date before storing it in the DB
    @Prop({ default: () => dayjs().startOf('day').toDate() })
    paymentDate: Date;

  @Prop({ type: 'object' })
  paymentMethod: PaymentMethod;
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
