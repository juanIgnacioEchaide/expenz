import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop({ default: new Date() })
  paymentDate: Date;

  @Prop()
  paymentMethod: string;
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
