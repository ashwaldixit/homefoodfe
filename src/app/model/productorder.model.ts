import { Product } from "./product.model";

export class ProductOrder {
    orderid: number;

    createdDate: Date;

    lastModifiedDate: Date;

    status: string;

    orderStatus: string;

    updateOrderStatus: string;

    product: Product;

    deliverydate: Date;

    customerOrder: Date;

    quantity: number;
}