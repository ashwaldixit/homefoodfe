import { Component } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Routes, Router, RouterModule } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'catererheader',
  templateUrl: './catererheader.component.html',
  styleUrls: ['./catererheader.component.css'],
})
export class CatererHeader {
  localStorage: CoolLocalStorage;
  constructor(private _http: Http, private router: Router, localStorage: CoolLocalStorage) {
    this.localStorage = localStorage;
  }
  onLogout() {
    this.localStorage.setObject('token', null);
    this.router.navigate(['']);
  }

}