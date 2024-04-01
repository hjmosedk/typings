import { OrderStatus } from './orderStatusModel';
import { CustomerModel } from '../Customer/customerModel';

export interface OrderModel {
  id: number;
  orderItems: [];
  orderDate: Date;
  lastChange: Date;
  customer: CustomerModel;
  orderStatus: OrderStatus;
  orderNotes: string;
}
