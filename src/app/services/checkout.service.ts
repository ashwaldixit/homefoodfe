import { CustomerOrder } from './../model/customerorder.model';
import { CartTotal } from './../model/carttotal.model';
import { HttpService } from './http.service';
import { Injectable } from "@angular/core";


@Injectable()
export class CheckoutService {

    constructor(private httpService: HttpService) { }

    createProductOrder(cartTotal: CartTotal) {
        return this.httpService.callApiObservable("/productorders", "POST", cartTotal, null)
    }

    createCustomerOrder(customerOrder) {
        return this.httpService.callApiObservable("/customerorders", "POST",customerOrder, null)
    }

}