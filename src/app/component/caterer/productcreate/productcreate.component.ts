import { CodeTypeService } from './../../../services/codetype.service';
import { ProductCreate } from './../../../model/productcreate.model';
import { CatererService } from './../../../services/caterer.service';
import { CategoryService } from './../../../services/category.service';
import { Caterer } from './../../../model/caterer.model';
import { Category } from './../../../model/category.model';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../model/product.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'product',
  templateUrl: './productcreate.component.html',
  styleUrls : ['./productcreate.component.css'],
  providers:[ProductService,CategoryService,CatererService,CodeTypeService]
})
export class ProductCreateComponent implements OnInit{
  
  product = new  ProductCreate ;
  caterers: Caterer[];
  availabilities : String[];

  categories : Category[];
  constructor(private productService : ProductService,private categoryService : CategoryService,private catererService : CatererService,private codeTypeService : CodeTypeService){}

  ngOnInit(){
    this.getCategories();
    this.getAvailabilities();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(res => this.categories=res);
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(res => this.product=res);
  }

  getAvailabilities(){
      this.codeTypeService.getCodeTypes("availability").subscribe(res =>{ this.availabilities=res, console.log(this.availabilities)});
  }

  onChange(deviceValue) {
		
  }
  
  createProduct(){
    console.log(this.product)
  }
}