import { Caterer } from './caterer.model';
import { Category } from './category.model';
export class ProductCreate {
      name : String
      imageUrl : String
      description : String
	  category : Category;
	  caterer : Caterer;
	  price : Number;
	  dayAvailability : String
	  day : Date
	  startTime : Date
	  endTime : Date
}