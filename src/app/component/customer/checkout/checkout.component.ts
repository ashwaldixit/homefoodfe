import { CartTotal } from './../../../model/carttotal.model';
import { Address } from './../../../model/address.model';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../services/address.service';
import { CartService } from '../../../services/cart.service';

@Component({
    selector: 'checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
    providers: [AddressService, CartService]
})

export class CheckoutComponent implements OnInit {

    customerAddressList: Address[];
    customerCart: CartTotal;

    constructor(private addressService: AddressService, private cartService: CartService) { }
    ngOnInit() {
        this.getAllAdress();
        this.getActiveProducts();
    }

    getAllAdress() {
        this.addressService.getAllAddress().subscribe(res => {
            this.customerAddressList = res;
        })
    }

    getActiveProducts() {
        this.cartService.computeCart().subscribe(res => {
            this.customerCart = res;
        })
    }
}