import { Product } from './product.model';
import { User } from './user.model';


export class Cart {
    cartid: number;

    customer: User;

    product: Product;

    createdDate: Date;

    lastModifiedDate: Date;

    recordStatus: string;

}