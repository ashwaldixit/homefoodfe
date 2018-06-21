import { AddressService } from './../../../services/address.service';
import { Address } from './../../../model/address.model';
import { User } from './../../../model/user.model';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { CustomerHeader } from './../../header/customerheader.component'


@Component({
    selector: 'register',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    providers: [UserService, AddressService,CustomerHeader]

})

export class AccountComponent implements OnInit {

    user = new User;
    address = new Address;
    userRoles: String[] = ["User", "Caterer"];

    constructor(private userService: UserService, private addressService: AddressService, private customerHeader: CustomerHeader) { }

    ngOnInit() {
        this.getUser();
        this.getActiveAndDefaultAddress();
    }

    onChange(deviceValue) {

    }

    getUser() {
        this.userService.getCustomer().subscribe(res => this.user = res)
    }
    getActiveAndDefaultAddress() {
        this.addressService.getActiveAndDefault().subscribe(res => this.address = res);
    }

    update() {

        this.addressService.updateAddress(this.address).subscribe(res => { this.address = res, this.getActiveAndDefaultAddress() });
    }

    onLogout() {
        this.customerHeader.onLogout();
    }

}