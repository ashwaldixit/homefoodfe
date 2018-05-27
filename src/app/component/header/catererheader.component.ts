import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
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
  localStorage: CookieService;
  constructor(private _http: Http, private router: Router, localStorage: CookieService, private toastrService : ToastrService) {
    this.localStorage = localStorage;
  }

  onLogout(){
    this.localStorage.delete('token');
    this.localStorage.delete('role');
    // this.localStorage.clear();
    this.router.navigate(['/login']);
    this.toastrService.success("Successfully logged out")
  	console.log('logged Out');
  }

}