import { User } from './user.model';
export class Address {
	addressid : number;

	isDefault : boolean;

	addressLine1 : string;

	addressLine2 : string;

	city : string;

	state : string;

	country : string; 

	zipCode : string;

	user : User;

	createdDate : Date;

	lastModifiedDate : Date;

	status : string;
}