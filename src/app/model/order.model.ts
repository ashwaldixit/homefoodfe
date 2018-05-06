
import {Product} from './product.model'
import { User } from './user.model';

export class Order {
      orderid : Number

	  createdDate : Date

	  lastModifiedDate : Date

	  status :string;

	  orderStatus : string;

	  customer : User

	  product: Product

	  deliverydate : Date
}