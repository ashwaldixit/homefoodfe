import { FormsModule } from '@angular/forms';
import { User } from './../../model/user.model';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { CoolStorageModule } from 'angular2-cool-storage';
import { Routes , Router ,  RouterModule} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})


export class LoginComponent implements OnInit {
    localStorage: CoolStorageModule;
    

    loginUser: User;
    constructor(private loginService: LoginService,private router: Router ,localStorage: CoolStorageModule) { 
        this.localStorage = localStorage;
    }

    ngOnInit() {}

    login(email: string, password: string) {
        var user = new User();
        user.email = email;
        user.password = password;
        this.loginService.login(user).subscribe(res => 
            localStorage.setItem('token',res.token)
        );
        if(localStorage.getItem('token') !== null) {
            this.router.navigate(['/product']);
        }
    }

}