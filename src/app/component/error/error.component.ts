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
  templateUrl:'./error.component.html',
  styleUrls:['./error.component.css']
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
