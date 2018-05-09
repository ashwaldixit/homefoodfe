import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';

@Injectable()
export class CartService {

    constructor(private httpService: HttpService) { }

    addToCart(product: Product) {
        return this.httpService.callApiObservable(`/cart/product`, "POST", product, null)
    }

    getActiveProducts() {
        return this.httpService.callApiObservable(`/cart/active`, "GET", null, null)
    }

    computeCart() {
        return this.httpService.callApiObservable(`/cart/compute`, "GET", null, null)
    }

    updateCart(cart: Cart) {
        return this.httpService.callApiObservable(`/cart`, "PUT", cart, null)
    }

    getByProduct(productId: Number) {
        return this.httpService.callApiObservable(`/cart/product/` + productId, "GET", null, null)
    }

    removeProduct(productId: Number) {
        return this.httpService.callApiObservable(`/cart/product/` + productId + `/remove`, "GET", null, null)
    }

}