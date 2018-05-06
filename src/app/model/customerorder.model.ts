import { ProductOrder } from "./productorder.model";
import { User } from "./user.model";

export class CustomerOrder {
    customerorderid: number;

    createdDate: Date;

    lastModifiedDate: Date;

    status: string;

    productOrders: ProductOrder[];

    customer: User;

    orderStatus: string;

}