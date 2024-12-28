import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CreditCardDocument = CreditCard & Document;

@Schema()
export class CreditCard {
  @Prop({ required: true })
  issuer: string;

  @Prop({ required: true })
  lastFourDigits: string;

  @Prop({ required: true, enum: ['VISA', 'MASTER CARD', 'AMEX'] })
  adminProcessor: 'VISA' | 'MASTER CARD' | 'AMEX';

  @Prop({ required: true })
  expiringDate: Date;
}

export const CreditCardSchema = SchemaFactory.createForClass(CreditCard);
