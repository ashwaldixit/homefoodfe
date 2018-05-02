import { Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';

@Injectable()
export class ProductService{

    constructor(private httpService : HttpService) { }

    getProducts(category : String){
        return this.httpService.callApiObservable(`/products/category/active/${category}`,"GET",null,null)
    }

}