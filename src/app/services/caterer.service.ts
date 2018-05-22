import { CatererLocation } from './../model/catererlocation.model';
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

    addCatererLocation(catererLocation : CatererLocation){
        return this.httpService.callApiObservable("/caterers/location","POST",catererLocation,null);
    }

    getAllActiveCatererLocations(){
        return this.httpService.callApiObservable("/caterers/active/locations","GET",null,null);
    }

    getAllActiveLocationsByCaterer(catererid){
        return this.httpService.callApiObservable(`/caterers/activebycaterer/locations/${catererid}`,"GET",null,null)
    }

}