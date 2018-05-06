import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Cart } from '../model/cart.model';

@Injectable()
export class CartService {

    constructor(private httpService: HttpService) { }

    addToCart(cart: Cart) {
        console.log("inside Service...");
        console.log("cart:::" + JSON.stringify(cart));
        return this.httpService.callApiObservable(`/cart`, "POST", cart, null)
    }

}