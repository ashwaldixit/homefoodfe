import { Component } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Routes, Router, RouterModule } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'customerheader',
  templateUrl: './customerhead.component.html',
  styleUrls : ['./customerhead.component.css']
})
export class CustomerHeader {
  localStorage: CoolLocalStorage;
  constructor(private _http: Http, private router: Router, localStorage: CoolLocalStorage) {
    this.localStorage = localStorage;
  }


  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToHome() {
    this.router.navigate(['/product']);
  }

  onLogout(){
    this.localStorage.setItem('token', null);
    this.localStorage.setObject('role', null);
    this.router.navigate(['/login'])
  	console.log('logged Out');
  }
}