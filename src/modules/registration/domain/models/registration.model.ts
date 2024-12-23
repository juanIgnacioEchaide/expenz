import { PaymentMethod } from './payment-method.model';

export class Registration {
  id: string;
  amount: number;
  currency: string;
  recipient: string;
  description: string;
  paymentDate: Date;
  paymentMethod: PaymentMethod;
}
