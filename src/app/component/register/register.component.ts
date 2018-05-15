import { UserService } from './../../services/user.service';
import { Address } from './../../model/address.model';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls:['./register.component.css'],
    providers:[UserService]

})

export class RegisterComponent implements OnInit {

    user = new User;
    address = new Address;
    userRoles : String[] = ["User","Caterer"];

    constructor(private userService : UserService){}

    ngOnInit() {

    }

    register () {
      var addresses: any[] = [];
      addresses.push(this.address);
        this.user.addresses=addresses;
        console.log(this.user);
        this.userService.createUser(this.user).subscribe(res => this.user=res);

       
    }

    onChange(deviceValue) {
		
    }
  
    
    
  

}