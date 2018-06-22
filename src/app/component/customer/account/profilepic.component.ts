import { User } from './../../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'profilepic',
    templateUrl: './profilepic.component.html',
    providers: [UserService]
})

export class ProfilePicComponent implements OnInit {

    userForProfilePic = new User;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.userService.getCustomer().subscribe(res => {
            this.userForProfilePic = res;
        })
    }
}