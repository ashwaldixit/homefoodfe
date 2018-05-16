import { CustomerOrder } from './customerorder.model';
import { ProductOrder } from './productorder.model';
export class CustomerOrderResponse {
    customerOrder: CustomerOrder;
    productOrders: ProductOrder[];
}