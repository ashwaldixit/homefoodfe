import { ProductOrder } from './../../../model/productorder.model';
import { CartTotal } from './../../../model/carttotal.model';
import { Address } from './../../../model/address.model';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../services/address.service';
import { CartService } from '../../../services/cart.service';
import { CheckoutService } from '../../../services/checkout.service';
import { CustomerOrder } from '../../../model/customerorder.model';
import { Routes , Router ,  RouterModule} from '@angular/router';

@Component({
    selector: 'checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
    providers: [AddressService, CartService, CheckoutService]
})

export class CheckoutComponent implements OnInit {

    customerAddressList: Address[];
    customerCart: CartTotal;
    productOrder: ProductOrder

    constructor(private addressService: AddressService,private router: Router, private cartService: CartService, private checkoutService: CheckoutService) { }
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
        
        this.checkoutService.createCustomerOrder().subscribe(res=>{
            console.log(res);
            this.router.navigate(['/order']);
        })
    }
}