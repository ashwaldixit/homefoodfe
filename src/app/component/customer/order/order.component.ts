import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
    providers: [OrderService]
})

export class OrderComponent implements OnInit {

    ngOnInit() { }

    createProductOrder() {
        
    }

}