import { SupportTicket } from './supportticket.model';
import { User } from './user.model';
export class SupportComment {

    comment : string ;

    recordStatus : string;

    createdDate : Date

    customer : User

    supportTicket : SupportTicket
}