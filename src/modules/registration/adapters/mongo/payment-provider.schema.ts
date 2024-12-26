import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PaymentMethodProvider } from '../../domain/models/payment-provider.model';

export type PaymentMethodProviderDocument = PaymentMethodProvider & Document;

@Schema()
export class ProviderSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: false })
  alias?: string;

  @Prop({ required: false })
  cvu?: string;

  @Prop({ required: false })
  cbu?: string;
}

export const PaymentProviderSchema =
  SchemaFactory.createForClass(ProviderSchema);
