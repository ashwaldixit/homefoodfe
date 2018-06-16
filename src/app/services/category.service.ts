import { Category } from './../model/category.model';
import { Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';

@Injectable()
export class CategoryService{

    constructor(private httpService : HttpService) { }

    getCategories(){
        return this.httpService.callApiObservable(`/categories/active`,"GET",null,null)
    }

    createCategory(category : Category){
        return this.httpService.callApiObservable('/categories',"POST",category,null);
    }

    getCategoriesOfCaterer(catererName){
        return this.httpService.callApiObservable(`/caterers/${catererName}/categories`,"GET",null,null)
    }

}