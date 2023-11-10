import mongoose from 'mongoose';
import { Customer, Order } from '../types/types';

const Schema = mongoose.Schema;

const customerSchema = new Schema({
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

const machiningSchema = new Schema({
  date: { type: String, required: true },
  until: { type: String, required: true },
});

const operationSchema = new Schema({
  type: { type: String, required: true },
  state: { type: Boolean, required: true },
  date: { type: String, required: true },
});

const itemSchema = new Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
});

 const orderSchema = new Schema({
  name: { type: String, required: true },
  customer: { type: String, required: true },
  delivery: { type: String, required: true },
  status: { type: String, required: true },
  price: { type: String, required: true },
  machining: machiningSchema,
  operations: [operationSchema],
  items: [itemSchema],
});

export const OrderModel = mongoose.model<Order>('Order', orderSchema);
