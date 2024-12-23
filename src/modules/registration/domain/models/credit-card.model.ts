export class CreditCard {
  issuer: string;
  lastFourDigits: string;
  adminProcessor: 'VISA' | 'MASTERCARD' | 'AMEX';
  expiringDate: Date;
}
