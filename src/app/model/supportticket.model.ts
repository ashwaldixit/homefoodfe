import { SupportComment } from "./supportcomment.model";

export class SupportTicket {

      supportticketid : Number

      createdDate : Date

      title :string;

      status :string;

      ticketStatus : string;

      priority : string;

      comments : SupportComment[];
      
      recordStatus : string;
}