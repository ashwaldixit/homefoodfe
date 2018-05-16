import { ProductOrder } from './../model/productorder.model';
import { HttpService } from './http.service';
import { OrderComponent } from './../component/customer/order/order.component';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

    constructor(private httpService: HttpService) { }

    addProductOrder(productOrder: ProductOrder) {
        this.httpService.callApiObservable("/productorders", "POST", productOrder, null);
    }

}