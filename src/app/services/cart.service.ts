import { CartCount } from './cart.service';
import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 	'rxjs/Observable' ;


export interface CartCount {
     count : number;
}

@Injectable()
export class CartService {

    cartCount : CartCount;
    constructor(private httpService: HttpService) {
       this.cartCount ={count:0};
     }

	private subject: Subject<CartCount> = new Subject<CartCount>();

    incrementCount(): void {
        let cartItems : Cart[];
         this.getActiveProducts().subscribe(res => {cartItems =res;
            this.cartCount.count = cartItems.length;
            this.subject.next(this.cartCount);
         }
        );
	}

    getCount(): Observable<CartCount> {
        let cartItems : Cart[];
        this.getActiveProducts().subscribe(res => {cartItems =res;
            this.cartCount.count = cartItems.length;
            this.subject.next(this.cartCount);
            return this.subject.asObservable();
         }
        );
        return this.subject.asObservable();
	}

    addToCart(product: Product) {
        console.log("product:::::"+JSON.stringify(product));
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

    removeCart(cartId: Number) {
        return this.httpService.callApiObservable(`/cart/` + cartId, "DELETE", null, null)
    }
}