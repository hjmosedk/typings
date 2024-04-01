import { OrderStatus } from './orderStatusModel';
import { CustomerModel } from '../Customer/customerModel';
import { OrderItemModel } from './orderItem';

export interface OrderModel {
  id: number;
  orderItems?: OrderItemModel[];
  orderDate: Date;
  lastChange: Date;
  customer: CustomerModel;
  orderStatus: OrderStatus;
  orderNotes: string;
}
