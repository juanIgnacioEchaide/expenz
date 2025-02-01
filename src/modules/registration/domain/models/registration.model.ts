import { Types } from 'mongoose';
import { PaymentMethod } from './payment-method.model';

export class Registration {
  _id: Types.ObjectId
  amount: number;
  currency: string;
  recipient: string;
  description: string;
  paymentDate: Date;
  paymentMethod: PaymentMethod;
}
