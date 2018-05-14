import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls:['./register.component.css']
})

export class RegisterComponent implements OnInit {

    user = new User

    ngOnInit() {

    }

    login () {
       
    }

  

}