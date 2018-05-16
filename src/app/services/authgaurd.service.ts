import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import { CoolLocalStorage } from 'angular2-cool-storage';
import {Observable} from "rxjs/Rx";


@Injectable()
export class AlwaysAuthGuard implements CanActivate {

    localStorage: CookieService;

    constructor( localStorage: CookieService){
        this.localStorage=localStorage;
    }
    canActivate() :Observable<boolean>{
        if(this.localStorage.get('token')){
            return Observable.of(true);
        }else{
            window.alert("please login to proceed")
            return Observable.of(false);
        }
     
    }
  }