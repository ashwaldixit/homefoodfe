import { ProductOrderService } from './../../../services/productorder.service';
import { CatererService } from './../../../services/caterer.service';
import { CatererLocation } from './../../../model/catererlocation.model';
import { Location } from './../../../model/location.model';
import { LocationService } from './../../../services/location.service';
import { Caterer } from './../../../model/caterer.model';
import { Category } from './../../../model/category.model';
import { Component, OnInit } from '@angular/core';
import { ProductOrder } from '../../../model/productorder.model';



@Component({
  selector: 'catererorder',
  templateUrl: './catererorder.component.html',
  styleUrls : ['./catererorder.component.css'],
  providers:[ProductOrderService]
})
export class CatererOrderComponent implements OnInit{

  productOrders: ProductOrder[];

  
  constructor(private productOrderService : ProductOrderService){}

  ngOnInit(){
    this.getProductOrders(0);
   
  }
  getProductOrders(number){
    this.productOrderService.getProductOrders(number).subscribe(res => this.productOrders=res.content);
  }

  
  
}