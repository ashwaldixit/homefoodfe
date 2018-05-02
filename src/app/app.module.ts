import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductComponent} from './component/product/product.component';
import { HttpModule , Headers } from '@angular/http';

import { AppComponent } from './app.component';
import { CoolStorageModule } from 'angular2-cool-storage';
import { Routes, RouterModule } from '@angular/router';
import {ProductService} from './services/product.service';
import {HttpService} from './services/http.service';
import {ErrorService} from './services/error.service';



const routes: Routes = [
  
  // Home
  { path: 'product', component: ProductComponent }]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CoolStorageModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService,ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
