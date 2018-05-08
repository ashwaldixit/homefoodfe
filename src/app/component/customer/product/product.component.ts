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
    this.cartService.addToCart(cart).subscribe(res => {
      this.router.navigate(['/product']);
    })
  }
}