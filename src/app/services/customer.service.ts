import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor(private httpService : HttpService) {}

    getCustomerById() {
        // return this.httpService.callApiObservable(`/customers/${id}`,"GET",null,null)
    }

}