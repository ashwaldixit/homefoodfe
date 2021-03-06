import { ProductCreate } from './../model/productcreate.model';
import { Product } from './../model/product.model';
import { Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';

@Injectable()
export class ProductService{

    constructor(private httpService : HttpService) { }

    getProducts(category : String){
        return this.httpService.callApiObservable(`/products/category/active/${category}`,"GET",null,null)
    }
    addProduct(product : ProductCreate){
        return this.httpService.callApiObservable('/products/add',"POST",product,null);
    }

    getAllActiveProducts(){
        return this.httpService.callApiObservable('/products/active',"GET",null,null)
    }

    getAllActiveProductsOfCaterer(catererName){
        return this.httpService.callApiObservable(`/caterers/${catererName}/products`,"GET",null,null)

    }

}