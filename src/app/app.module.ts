import { AlwaysAuthGuard } from './services/authgaurd.service';
import { ErrorComponent } from './component/error/error.component';
import { GeneralHeader } from './component/header/generalheader.component';
import { CatererOrderComponent } from './component/caterer/orders/catererorder.component';
import { LocationCreateComponent } from './component/caterer/locations/locationcreate.component';
import { CatererHeader } from './component/header/catererheader.component';
import { ProductCreateComponent } from './component/caterer/productcreate/productcreate.component';
import { ProductCreate } from './model/productcreate.model';
import { LoginComponent } from './component/login/login.component';
import { CartComponent } from './component/customer/cart/cart.component';
import { RegisterComponent } from './component/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {ProductComponent} from './component/customer/product/product.component';
import { HttpModule , Headers } from '@angular/http';
import {CustomerHeader} from './component/header/customerheader.component'
import {CheckoutComponent} from './component/customer/checkout/checkout.component';
import {AddressComponent} from './component/address/address.component';


import { AppComponent } from './app.component';
import { CoolStorageModule } from 'angular2-cool-storage';
import { Routes, RouterModule } from '@angular/router';
import {ProductService} from './services/product.service';
import {HttpService} from './services/http.service';
import {ErrorService} from './services/error.service';
import { from } from 'rxjs/observable/from';



const routes: Routes = [
  
  // Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductComponent },
 
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catererlocationcreate', component: LocationCreateComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'productcreate', component: ProductCreateComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'catererorders', component: CatererOrderComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'address', component: AddressComponent, canActivate: [AlwaysAuthGuard] },
  {path: '**', component: ProductComponent},]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerHeader,
    CatererHeader,
    GeneralHeader,
    RegisterComponent,
    CartComponent,
    LoginComponent,
    ErrorComponent,
    ProductCreateComponent,
    LocationCreateComponent,
    CatererOrderComponent,
    CheckoutComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    CoolStorageModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService,ErrorService, AlwaysAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
