import { Address } from './address.model';
import { CustomerOrder } from './customerorder.model';
export class User {
    userid: number;

    email: string;

    userName: string;

    password: string;

    userRole: string;

    confirmPassword: string;

    lastLoginDate: Date;

    createdDate: Date;

    lastModifiedDate: Date;

    status: string;

    orders: CustomerOrder[];

    addresses: Address[];

}