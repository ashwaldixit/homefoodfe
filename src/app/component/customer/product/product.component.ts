import { Routes, Router, RouterModule } from '@angular/router';
import { Cart } from './../../../model/cart.model';
import { CatererService } from './../../../services/caterer.service';
import { CategoryService } from './../../../services/category.service';
import { Caterer } from './../../../model/caterer.model';
import { Category } from './../../../model/category.model';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, CategoryService, CatererService, CartService, CartComponent]
})
export class ProductComponent implements OnInit {

  products: Product[];
  caterers: Caterer[];

  categories: Category[];
  constructor(private productService: ProductService, private categoryService: CategoryService, private catererService: CatererService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.getProducts()
    this.getCategories()
    this.getCaterers()
  }


  getProducts() {
    this.productService.getProducts("South Indian").subscribe(res => this.products = res);

  }
  getCategories() {
    this.categoryService.getCategories().subscribe(res => this.categories = res);
  }

  getCaterers() {
    this.catererService.getCaterers().subscribe(res => this.caterers = res)
  }

  addToCart(product: Product) {
    var cart = new Cart();
    cart.product = product;
    // cart.createdDate = new Date('2018-05-06T02:00:02.082');
    // cart.customer = {
    //   "userid": 37,
    //   "email": "ashwalappi@gmail.com",
    //   "userName": "Ashwal",
    //   "password": "148de9c5a7a44d19e56cd9ae1a554bf67847afb0c58f6e12fa29ac7ddfca9940",
    //   "userRole": "Customer",
    //   "confirmPassword": null,
    //   "lastLoginDate": null,
    //   "createdDate": new Date('2018-05-06T02:00:02.082'),
    //   "lastModifiedDate": new Date('2018-05-06T02:00:02.082'),
    //   "status": "Active",
    //   "orders": null,
    //   "addresses": null
    // }
    // this.cartComponent.addProductsToCart(cart);
    this.cartService.addToCart(cart).subscribe(res => {
      console.log("res:::::" + JSON.stringify(res));
      this.router.navigate(['/product']);
    })
  }
}