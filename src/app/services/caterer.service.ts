import { Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';

@Injectable()
export class CatererService {

    constructor(private httpService : HttpService) { }

    getCaterers(){
        return this.httpService.callApiObservable(`/caterers/active`,"GET",null,null)
    }

}