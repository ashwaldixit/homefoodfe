import {Order} from './order.model'

export class Customer {
    customerid : Number

	 email :  string

	 userName : string

	 password : string

	 confirmPassword : string

	  lastLoginDate : Date

	  createdDate : Date

	  lastModifiedDate : Date

	  status : string
	
	  orders : Order[]
}