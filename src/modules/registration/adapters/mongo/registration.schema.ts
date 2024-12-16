import { Schema } from 'mongoose';

export const RegistrationSchema = new Schema({
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  recipient: { type: String, required: true },
  description: { type: String },
  paymentDate: { type: Date },
  paymentMethod: { type: String },
});
