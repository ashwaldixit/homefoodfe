import { SupportTicket } from './../../../model/supportticket.model';
import { CustomerSupportService } from './../../../services/customer.support.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'customer-support',
    templateUrl: 'customer.support.component.html',
    styleUrls: ['customer.support.component.css'],
    providers : [CustomerSupportService]
})

export class CustomerSupportComponet implements OnInit {

    customerSupport = new SupportTicket;
    constructor(private customerSupportService: CustomerSupportService) { }
    ngOnInit() {

    }

    createTicket() {
        console.log("customerSupport:::::::::::::"+JSON.stringify(this.customerSupport));
        this.customerSupportService.createCustomerSupportTicket(this.customerSupport).subscribe(res => {
            this.customerSupport = res;
        })
    }
}