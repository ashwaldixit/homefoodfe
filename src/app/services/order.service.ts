import { ProductOrder } from './../model/productorder.model';
import { HttpService } from './http.service';
import { OrderComponent } from './../component/customer/order/order.component';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

    constructor(private httpService: HttpService) { }

    addProductOrder(productOrder: ProductOrder) {
        return this.httpService.callApiObservable("/productorders", "POST", productOrder, null);
    }

    getAllOrders() {
        return this.httpService.callApiObservable("/customerorders/all", "GET", null, null);
    }

    getByCustomerOrder(customerOrderId: number) {
        return this.httpService.callApiObservable(`/productorders/customerorder/${customerOrderId}`, "GET", null, null)
    }
}