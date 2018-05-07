import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Cart } from '../model/cart.model';

@Injectable()
export class CodeTypeService {

    constructor(private httpService: HttpService) { }
    getCodeTypes(name : string){
        return this.httpService.callApiObservable(`/codetypes/${name}`,"GET",null,null);
    }


}