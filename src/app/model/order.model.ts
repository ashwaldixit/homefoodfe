//import {Customer} from './customer.model'

import {Product} from './product.model'

export class Order {
      orderid : Number

	  createdDate : Date

	  lastModifiedDate : Date

	  status :string;

	  orderStatus : string;

	 // customer : Customer

	  product: Product

	  deliverydate : Date
}