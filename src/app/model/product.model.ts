import {Category} from './category.model';
import {Caterer} from './caterer.model';
import {Order} from './order.model';
import {ProductPresence} from './productpresence.model';

export class Product {

      productid : Number

	  name:String

	  createdDate : Date

	  lastModifiedDate : Date

	  status : String

	  imageUrl:String

	  description : String

	  version : Number

	  category : Category

	  caterer : Caterer

	 presence : ProductPresence[]

	  orders : Order[];

}