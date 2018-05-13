import { Component, OnInit } from '@angular/core';
import { AddressService } from './../../services/address.service'
import { Address } from '../../model/address.model';


@Component({
    selector: 'address',
    templateUrl: './address.component.html',
    providers: [AddressService]
})


export class AddressComponent implements OnInit {

    addressList: Address[];

    constructor(private addressService: AddressService) { }
    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.addressService.getAllAddress().subscribe(res => this.addressList = res);
    }

    createAddress(address: Address) {

        this.addressService.createAddress(address).subscribe(res => {
            console.log("Address addedd..")
        })
    }
}