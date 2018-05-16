import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import { CoolLocalStorage } from 'angular2-cool-storage';
import {Observable} from "rxjs/Rx";


@Injectable()
export class AlwaysAuthGuard implements CanActivate {

    localStorage: CoolLocalStorage;

    constructor( localStorage: CoolLocalStorage){
        this.localStorage=localStorage;
    }
    canActivate() :Observable<boolean>{
        if(this.localStorage.getObject('token')){
            return Observable.of(true);
        }else{
            window.alert("please login to proceed")
            return Observable.of(false);
        }
     
    }
  }