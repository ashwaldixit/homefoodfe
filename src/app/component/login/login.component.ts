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
    

    user =new  User;
    constructor(private loginService: LoginService,private router: Router ,localStorage: CoolStorageModule) { 
        this.localStorage = localStorage;
    }

    ngOnInit() {}

    login() {
        this.loginService.login(this.user).subscribe(res => {
            localStorage.setItem('token',res.token);
            localStorage.setItem('role',res.userRole)
            if(res.token !== null) {
                this.router.navigate(['/product']);
            }else{
                this.router.navigate(['/login']);
            }
        }
            
        );
        
    }

    signup(){
        this.router.navigate(['/register']);
    }

}