import { Schema } from 'mongoose';

export const RegistrationSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
