import { CartComponent } from './../cart/cart.component';
import { CustomerOrder } from './../../../model/customerorder.model';
import { ProductOrder } from './../../../model/productorder.model';
import { CartTotal } from './../../../model/carttotal.model';
import { Address } from './../../../model/address.model';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../services/address.service';
import { CartService } from '../../../services/cart.service';
import { CheckoutService } from '../../../services/checkout.service';
import { Routes, Router, RouterModule } from '@angular/router';
import { Product } from '../../../model/product.model';

@Component({
    selector: 'checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
    providers: [AddressService, CartService, CheckoutService, CartComponent]
})

export class CheckoutComponent implements OnInit {

    customerAddressList: Address[];
    customerCart: CartTotal;
    productOrder: ProductOrder;
    address: Address;
    customerOrder = new CustomerOrder;


    constructor(private addressService: AddressService, private router: Router, private cartService: CartService, private checkoutService: CheckoutService, private cartComponent: CartComponent) { }
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

    // createProductOrder(cartTotal: CartTotal) {
    //     this.checkoutService.createProductOrder(cartTotal).subscribe(res => {
    //         console.log("Created Product order....")
    //     })
    // }

    placeOrder() {

        if (!this.customerOrder.address)
            this.customerOrder.address = this.customerAddressList[0]

        this.checkoutService.createCustomerOrder(this.customerOrder).subscribe(res => {
            this.router.navigate(['/order']);
        })
    }

    addAddress(address) {
        this.customerOrder.address = address;
    }

    increaseProductQty(product: Product) {
        this.cartService.addToCart(product).subscribe(res => {
            this.getActiveProducts();
        })
    }

    decreaseProductQty(product: Product) {
        var productId: Number;
        productId = product.productid;
        this.cartService.removeProduct(productId).subscribe(res => {
            this.getActiveProducts();
        })
    }

    removeProductCart(cartId: Number) {
        this.cartService.removeCart(cartId).subscribe(res => {
            this.getActiveProducts();
        })
    }
}