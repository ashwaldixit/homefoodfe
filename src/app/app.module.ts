import { CatererHomeComponent } from './component/customer/caterer/catererhome.component';
import { CartService } from './services/cart.service';
import { AccountComponent } from './component/customer/account/account.component';
import { CookieService } from 'ngx-cookie-service';
import { Header } from './component/header/header.component';
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
import { FormsModule } from '@angular/forms'
import { ProductComponent } from './component/customer/product/product.component';
import { HttpModule, Headers } from '@angular/http';
import { CustomerHeader } from './component/header/customerheader.component'
import { CheckoutComponent } from './component/customer/checkout/checkout.component';
import { AddressComponent } from './component/address/address.component';

import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CoolStorageModule } from 'angular2-cool-storage';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { HttpService } from './services/http.service';
import { ErrorService } from './services/error.service';
import { from } from 'rxjs/observable/from';
import { OrderComponent } from './component/customer/order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [

  // Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catererlocationcreate', component: LocationCreateComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'productcreate', component: ProductCreateComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'catererorders', component: CatererOrderComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'address', component: AddressComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'order', component: OrderComponent },
  { path: 'caterer/:catererName', component: CatererHomeComponent },
  { path: '**', component: ProductComponent }]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerHeader,
    CatererHeader,
    GeneralHeader,
    Header,
    RegisterComponent,
    CartComponent,
    LoginComponent,
    ErrorComponent,
    ProductCreateComponent,
    LocationCreateComponent,
    CatererOrderComponent,
    CheckoutComponent,
    AddressComponent,
    CatererHomeComponent,
    OrderComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    CoolStorageModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true 
      //closeButton : true
  }),
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService,ErrorService, AlwaysAuthGuard,CookieService,CartService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
