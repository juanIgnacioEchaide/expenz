import { Registration } from '../models/registration.model';

export class RegistrationBuilder {
  private registration: Registration = new Registration();

  withAmount(amount: number): RegistrationBuilder {
    this.registration.amount = amount;
    return this;
  }

  withCurrency(currency: string): RegistrationBuilder {
    this.registration.currency = currency;
    return this;
  }

  withRecipient(recipient: string): RegistrationBuilder {
    this.registration.recipient = recipient;
    return this;
  }

  withDescription(description: string): RegistrationBuilder {
    this.registration.description = description;
    return this;
  }

  withPaymentDate(paymentDate: Date): RegistrationBuilder {
    this.registration.paymentDate = paymentDate;
    return this;
  }

  withPaymentMethod(paymentMethod: string): RegistrationBuilder {
    this.registration.paymentMethod = paymentMethod;
    return this;
  }

  build(): Registration {
    return this.registration;
  }
}
