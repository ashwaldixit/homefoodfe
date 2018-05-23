import { CartCount, CartService } from './../../services/cart.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Routes, Router, RouterModule } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'customerheader',
  templateUrl: './customerhead.component.html',
  styleUrls : ['./customerhead.component.css']
})
export class CustomerHeader implements OnInit{
  localStorage: CookieService;
  cartCount : number;
  constructor(private _http: Http, private router: Router, localStorage: CookieService, private cartService : CartService) {
    this.localStorage = localStorage;
  }
  async ngOnInit(){
    console.log("in init")
    this.cartService.getCount().subscribe(res => this.cartCount=res.count);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToHome() {
    this.router.navigate(['/product']);
  }

  onLogout(){
    this.localStorage.delete('token');
    this.localStorage.delete('role');
    this.router.navigate(['/login'])
  	console.log('logged Out');
  }
}