import { Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Routes, Router, RouterModule } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header implements OnInit{
  localStorage: CoolLocalStorage;
  isValidUser = false;
  isUser = false;
  constructor(private _http: Http, private router: Router, localStorage: CoolLocalStorage) {
    this.localStorage = localStorage;
  }

  ngOnInit(){
    this.isLoggedIn();
    this.isUserLoggedIn();
    
  }

  onLogout() {
    this.localStorage.setObject('token', null);
    this.localStorage.setObject('role', null);
    this.router.navigate(['']);
  }

  
  isUserLoggedIn() {
    if (this.localStorage.getItem('role') == 'User') {
      console.log("role :",this.localStorage.getItem('role'))
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }
  isLoggedIn() {
    if (this.localStorage.getItem('token')) {
      console.log("logged :",this.localStorage.getItem('token'))
      this.isValidUser = true;
    } else {
      this.isValidUser = false;
    }

  }
}