import { ProductOrderService } from './../../../services/productorder.service';
import { CatererService } from './../../../services/caterer.service';
import { CatererLocation } from './../../../model/catererlocation.model';
import { Location } from './../../../model/location.model';
import { LocationService } from './../../../services/location.service';
import { Caterer } from './../../../model/caterer.model';
import { Category } from './../../../model/category.model';
import { Component, OnInit } from '@angular/core';
import { ProductOrder } from '../../../model/productorder.model';
import { CodeTypeService } from '../../../services/codetype.service';



@Component({
  selector: 'catererorder',
  templateUrl: './catererorder.component.html',
  styleUrls : ['./catererorder.component.css'],
  providers:[ProductOrderService,CodeTypeService]
})
export class CatererOrderComponent implements OnInit{

  productOrders: ProductOrder[];
  orderstatuses : String[];

  
  constructor(private productOrderService : ProductOrderService, private codeTypeService : CodeTypeService){}

  ngOnInit(){
    this.getProductOrders(1);
    this.getOrderStatusValues();
   
  }
  getProductOrders(number){
    this.productOrderService.getProductOrders(number).subscribe(res => {this.productOrders=res.content; console.log(res.content);})
  }

  getOrderStatusValues(){
   this.codeTypeService.getCodeTypes("orderstatus").subscribe(res => this.orderstatuses=res);
  }

  update(productOrder){
    productOrder.orderStatus = productOrder.updateOrderStatus;
    this.productOrderService.updateProductOrder(productOrder).subscribe(res => console.log(res))
  }
  

  onChange(deviceValue) {
		
  }
}