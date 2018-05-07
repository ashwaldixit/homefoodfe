import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../model/cart.model';



@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    providers: [CartService]
})


export class CartComponent implements OnInit {

    cartObj: Cart

    ngOnInit() { }

    constructor(private cartService: CartService) { }

    addProductsToCart(cart: Cart) {
        console.log("Inside cart component..");
        this.cartService.addToCart(cart).subscribe(res => {
            console.log("INside...");
            console.log("res::" + JSON.stringify(res));
        });

        // this.cartObj = res;
        // console.log("res::"+JSON.stringify(res))
    }
}