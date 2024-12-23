import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PaymentMethodProvider } from '../../domain/models/payment-provider.model';
import {
  PaymentMethod,
  PaymentMethodType,
} from '../../domain/models/payment-method.model';
import { CreditCard } from '../../domain/models/credit-card.model';
import { CreditCardSchema } from './credit-card.schema';
import { PaymentProviderSchema } from './payment-provider.schema';

export type PaymentMethodDocument = PaymentMethod & Document;

@Schema()
export class MethodSchema {
  @Prop({ required: true })
  type: PaymentMethodType;

  @Prop({ required: true, type: PaymentProviderSchema })
  provider: PaymentMethodProvider;

  @Prop({ required: false, type: CreditCardSchema })
  creditCard?: CreditCard;

  @Prop()
  bankTransfer?: {
    accountNumber: string;
    originalBranch: string;
  };
}

export const PaymentMethodSchema = SchemaFactory.createForClass(MethodSchema);
