import { User } from './../../model/user.model';
import { Component,OnInit } from '@angular/core';



@Component({
    selector : 'customer',
    templateUrl : './customer.component.html',
    providers : []
})

export class CustomerComponent implements OnInit {

    cusomter : User;
    ngOnInit(){
        this.getCustomer()
    }

    getCustomer() {
        
    }

}