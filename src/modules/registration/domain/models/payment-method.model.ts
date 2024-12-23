import { PaymentMethodProvider } from './payment-provider.model';

enum PaymentMethodType {
  CREDIT_CARD = 'credit_card',
  CASH = 'cash',
  BANK_TRANSFER = 'bank_transfer',
  DIGITAL_WALLET = 'digital_wallet',
}

export class PaymentMethod {
  type: PaymentMethodType;
  provider: PaymentMethodProvider;
  creditCard?: PaymentMethodProvider & {
    issuer?: string;
    lastFourDigits?: string;
    adminProcessor?: 'VISA' | 'MASTERCARD' | 'AMEX';
  };
  bankTransfer?: PaymentMethodProvider & {
    accountNumber?: string;
    originalBranch: string;
  };
  digitalWallet?: PaymentMethodProvider;
}
