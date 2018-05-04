import { Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';

@Injectable()
export class CategoryService{

    constructor(private httpService : HttpService) { }

    getCategories(){
        return this.httpService.callApiObservable(`/categories/active`,"GET",null,null)
    }

}