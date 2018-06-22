import { CustomerHeader } from './../../header/customerheader.component';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.css'],
    providers: [CustomerHeader]
})

export class NavigatorComponent implements OnInit {
    constructor(private customerHeader: CustomerHeader) { }
    ngOnInit() {

    }

    onLogout() {
        this.customerHeader.onLogout();
    }
}