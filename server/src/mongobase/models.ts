import mongoose, { Document } from 'mongoose';
import { Customer } from '../types/types';

export type CustomerDocument = Customer & Document;

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: String, required: true },
  state: { type: String, required: true },
  vatCode: { type: String, required: true },
  contactName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
});

export const CustomerModel = mongoose.model<Customer>('User', customerSchema);