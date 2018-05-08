import { Category } from './../model/category.model';
import { Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';

@Injectable()
export class LocationService{

    constructor(private httpService : HttpService) { }

    getCitiesByDistict(name: String){
        return this.httpService.callApiObservable(`/locations/district/${name}/active`,"GET",null,null)
    }

}