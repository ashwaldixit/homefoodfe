import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class CustomerSupportService {

    constructor(private httpService: HttpService) { }

    createCustomerSupportTicket(supportTicket) {
        return this.httpService.callApiObservable(`/supporttickets`, "POST", supportTicket, null);
    }

}