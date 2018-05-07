import { Caterer } from './../model/caterer.model';
import { Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';

@Injectable()
export class CatererService {

    constructor(private httpService : HttpService) { }

    getCaterers(){
        return this.httpService.callApiObservable(`/caterers/active`,"GET",null,null)
    }

    getProductOfCaterer(caterer : string){
        return this.httpService.callApiObservable(`/products/caterer/active/caterer`,"GET",null,null);
    }

}