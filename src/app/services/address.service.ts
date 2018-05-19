import { Address } from './../model/address.model';
import { HttpService } from './http.service';
import { Injectable, Component } from '@angular/core';

@Injectable()
export class AddressService {

    constructor(private httpService: HttpService) { }

    getAllAddress() {
        return this.httpService.callApiObservable(`/address/all`, "GET", null, null);
    }

    createAddress(address: Address) {
        return this.httpService.callApiObservable(`/address`, "POST", address, null);
    }

    getActiveAndDefault(){
        return this.httpService.callApiObservable('/address/activebyuser',"GET",null,null);
    }

    updateAddress(address){
        return this.httpService.callApiObservable('/address',"PUT", address,null);
    }
}