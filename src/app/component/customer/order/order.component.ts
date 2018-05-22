import { CustomerOrderResponse } from './../../../model/customerorderesponse.model';
import { ProductOrder } from './../../../model/productorder.model';
import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { CustomerOrder } from '../../../model/customerorder.model';

@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
    providers: [OrderService]
})

export class OrderComponent implements OnInit {

    customerOrderList: CustomerOrder[];
    productOrderList: ProductOrder[];
    customerOrderResponse: CustomerOrderResponse[];
    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.getAllCustomerOrder();
    }

    getAllCustomerOrder() {
        this.orderService.getAllOrders().subscribe(res => {
            this.customerOrderList = res;
            this.customerOrderList.forEach(element => {
                this.customerOrderResponse = res;
                console.log(res)
            });
        })
    }
}