import { User } from './user.model';
import { Product } from './product.model';
export class CartResponse {

    product: Product;

    quantity: number;

    user: User;

    totalProductPrice: number;
}