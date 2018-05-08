import { CartTotal } from './../../../model/carttotal.model';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../model/cart.model';
import { CartResponse } from '../../../model/cartresponse.model';
import { ProductOrder } from '../../../model/productorder.model';
import { Product } from '../../../model/product.model';



@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    providers: [CartService]
})


export class CartComponent implements OnInit {

    cartProducts: Cart[]
    customerCart: CartTotal;
    cartProductList: CartResponse[];

    ngOnInit() {
        this.getProducts()
        this.computeCustomerCart()
    }

    constructor(private cartService: CartService) { }

    addProductsToCart(product: Product) {
        var cart = new Cart();
        cart.product = product;
        this.cartService.addToCart(cart).subscribe(res => {
            this.computeCustomerCart()
        });
    }

    getProducts() {
        this.cartService.getActiveProducts().subscribe(res => {
            this.cartProducts = res;
        })
    }

    computeCustomerCart() {
        this.cartService.computeCart().subscribe(res => {
            if (res.carts) {
                this.customerCart = res;
            }
        })
    }

    removeFromCart() {
        
    }
}