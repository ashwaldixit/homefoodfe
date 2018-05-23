import { CartTotal } from './../../../model/carttotal.model';
import { CartService, CartCount } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../model/cart.model';
import { CartResponse } from '../../../model/cartresponse.model';
import { ProductOrder } from '../../../model/productorder.model';
import { Product } from '../../../model/product.model';



@Component({
    selector: 'cart',
    templateUrl: './cart.html',
    styleUrls: ['./cart.css'],
    providers: [CartService]
})


export class CartComponent implements OnInit {

    cart: Cart;
    cartProducts: Cart[]
    customerCart: CartTotal;
    cartProductList: CartResponse[];

    cartCount : CartCount;


    ngOnInit() {
        this.getProducts()
        this.computeCustomerCart()
        this.cartService.getCount().subscribe(res => this.cartCount=res);
    }

    constructor(private cartService: CartService) { }


    addProductsToCart(product: Product) {
        this.cartService.addToCart(product).subscribe(res => {
            this.computeCustomerCart();
            this.cartService.incrementCount();
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

    removeFromCart(product: Product) {
        var productId : Number;
        productId = product.productid;
        this.cartService.removeProduct(productId).subscribe(res => {
            this.computeCustomerCart();
        })
    }

    removeProductCart(cartId : Number) {
        this.cartService.removeCart(cartId).subscribe(res => {
            this.computeCustomerCart();
        })
    }
}