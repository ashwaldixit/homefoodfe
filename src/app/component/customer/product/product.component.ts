import { CatererService } from './../../../services/caterer.service';
import { CategoryService } from './../../../services/category.service';
import { Caterer } from './../../../model/caterer.model';
import { Category } from './../../../model/category.model';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../model/product.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls : ['./product.component.css'],
  providers:[ProductService,CategoryService,CatererService]
})
export class ProductComponent implements OnInit{
  
  products : Product[];
  caterers: Caterer[];

  categories : Category[];
  constructor(private productService : ProductService,private categoryService : CategoryService,private catererService : CatererService){}

  ngOnInit(){
    this.getProducts()
    this.getCategories()
    this.getCaterers()
  }


   getProducts() {
       console.log("came here")
    this.productService.getProducts("South Indian").subscribe(res => this.products=res);
      
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(res => this.categories=res);
  }

  getCaterers(){
    this.catererService.getCaterers().subscribe(res =>this.caterers=res)
  }
}