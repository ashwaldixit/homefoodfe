import { CatererLocation } from './../../../model/catererlocation.model';
import { Routes, Router, RouterModule, ActivatedRoute } from '@angular/router';
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
  selector: 'catererhome',
  templateUrl: './catererhome.component.html',
  styleUrls: ['./catererhome.component.css'],
  providers: [ProductService, CategoryService, CatererService, CartService, CartComponent]
})
export class CatererHomeComponent implements OnInit {

  products: Product[];
  caterers: Caterer[];

  categories: Category[];
  catererName : string;
  catererLocations : CatererLocation[];
  constructor(private productService: ProductService, private categoryService: CategoryService, private catererService: CatererService, private cartService: CartService, private router: Router, private cartComponent: CartComponent,private _router : Router,
    private route: ActivatedRoute) { 

      this.route.params.subscribe((params) => { 
        console.log(params.catererName)
        if(params.catererName){
            this.catererName = params.catererName ;
        }
    }); 

    }

  ngOnInit() {
    this.getProducts()
    this.getCategories()
    this.getCaterers()
    this.getCatererLocations()
  }


  getProducts() {
    this.productService.getAllActiveProductsOfCaterer(this.catererName).subscribe(res => this.products = res);

  }
  getCategories() {
    this.categoryService.getCategoriesOfCaterer(this.catererName).subscribe(res => this.categories = res);
  }

  getCaterers() {
    this.catererService.getCaterers().subscribe(res => this.caterers = res)
  }

  addToCart(product: Product) {
    this.cartComponent.addProductsToCart(product);
  }

  getProductsByCategory(category){
    this.productService.getProducts(category).subscribe(res=>this.products=res);
  }

  getCatererLocations(){
    console.log("name of caterer : ", this.catererName)
    this.catererService.getAllActiveLocationsByCaterer(this.catererName).subscribe(res => this.catererLocations=res);
  }
}