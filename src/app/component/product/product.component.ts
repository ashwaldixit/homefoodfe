import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model'
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  providers:[ProductService]
})
export class ProductComponent implements OnInit{
  
  products : Product[];

  constructor(private productService : ProductService){}

  ngOnInit(){
    this.getProducts()
  }


   getProducts() {
       console.log("came here")
    this.productService.getProducts("North Indian").subscribe(res => this.products=res);
      
  }
}