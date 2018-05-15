import { Component , OnInit,NgZone } from '@angular/core';
// import {HeaderComponent} from '../sub-components/header.component';
// import {FooterComponent} from '../sub-components/footer.component';
// import {MainContentComponent} from '../sub-components/main-content.component';
import { Routes , Router ,  RouterModule} from '@angular/router';
import { CoolLocalStorage } from 'angular2-cool-storage';
import  { ErrorService } from '../../services/error.service';
import  { ErrorMessage } from '../../services/error.service';
@Component({
  selector: 'error',
  template:`<div *ngIf="errorMessage">
 <div>
  <div *ngIf="errorMessage.notificationInfo==='INFO'">
  <h3>INFO : {{errorMessage.errorMessage}}</h3>
  </div>
  <div *ngIf="errorMessage.notificationInfo==='ERROR'" style="color: red">
   <h3> <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color:red"></i> <b>{{errorMessage.errorMessage}}</b></h3>
  </div>
  </div>
  </div>`
})
export class ErrorComponent implements OnInit {

  isValue : boolean;  
  errorMessage :  ErrorMessage;

  constructor(public errorService : ErrorService)
  { 

  }

  ngOnInit() {
    this.errorService.getErrorMessage().subscribe(error => {this.errorMessage=error, 
      setTimeout(() => {
        this.errorMessage = null;
      }, 10000);


    });
  }
}
