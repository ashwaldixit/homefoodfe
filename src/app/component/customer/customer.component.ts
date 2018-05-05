import { Customer } from './../../model/customer.model';
import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';


@Component({
    selector : 'customer',
    templateUrl : './customer.component.html',
    providers : [CustomerService]
})

export class CustomerComponent implements OnInit {

    cusomter : Customer;
    ngOnInit(){
        this.getCustomer()
    }

    getCustomer() {
        
    }

}