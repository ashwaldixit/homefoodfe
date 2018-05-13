import { Address } from './../../../model/address.model';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../services/address.service';

@Component({
    selector: 'checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
    providers : [AddressService]
})

export class CheckoutComponent implements OnInit {

    customerAddressList: Address[];

    constructor(private addressService: AddressService) { }
    ngOnInit() {
        this.getAllAdress;
     }

    getAllAdress() {
        this.addressService.getAllAddress().subscribe(res => {
            this.customerAddressList = res;
            console.log("Address::" + JSON.stringify(res))
        })
    }
}