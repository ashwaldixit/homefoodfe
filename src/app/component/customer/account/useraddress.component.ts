import { Address } from './../../../model/address.model';
import { AddressService } from './../../../services/address.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'user-address',
    templateUrl: './useraddress.component.html',
    providers: [AddressService]
})

export class UserAddressComponent implements OnInit {

    addressList: Address[];
    constructor(private addressService: AddressService) { }

    ngOnInit() {
        this.getAddress();
    }


    getAddress() {
        this.addressService.getAllAddress().subscribe(res => {
            this.addressList = res;
        })
    }

}