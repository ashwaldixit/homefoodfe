import { Product } from './../model/product.model';
import { Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';

@Injectable()
export class ProductService{

    constructor(private httpService : HttpService) { }

    getProducts(category : String){
        return this.httpService.callApiObservable(`/products/category/active/${category}`,"GET",null,null)
    }
    addProduct(product : Product){
        return this.httpService.callApiObservable('/product',"POST",product,null);
    }

}