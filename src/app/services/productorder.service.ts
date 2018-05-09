import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';


@Injectable()
export class ProductOrderService{

    constructor(private httpService: HttpService) { }
    getProductOrders(days:number){
        return this.httpService.callApiObservable(`/productorders/bydate?adddays=${days}`,"GET",null,null);
    }

}