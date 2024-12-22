import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegistrationDocument = Registration & Document;

@Schema()
export class Registration {
  @Prop()
  id: string;

  @Prop({ default: 0 })
  amount: number;

  @Prop({ default: '' })
  currency: string;

  @Prop({ default: '' })
  recipient: string;

  @Prop({ default: '' })
  description: string;

  @Prop({ default: new Date() })
  paymentDate: Date;

  @Prop({ default: '' })
  paymentMethod: string;
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
