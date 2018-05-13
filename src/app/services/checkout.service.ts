import { HttpService } from './http.service';
import { Injectable } from "@angular/core";


@Injectable()
export class CheckoutService {

    private constructor(private httpService : HttpService) {}

}