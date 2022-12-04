import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { Seller } from '../models/seller';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "http://localhost:5233/api"
  constructor(private _http:HttpClient) { }

  // used for registering new user or seller for auth
  RegisterUserIntoIdentity(username:string, emailAddress:string, password:string, confirmPassword:string) {
      return this._http.post<number>(this.url+"/Account/register", {username, emailAddress, password, confirmPassword})
  }

  RegisterUserDetails(userDetails:User) {
    return this._http.post<number>(this.url+"/User", userDetails);
  }

  RegisterSellerDetails(sellerDetails:Seller) {
    return this._http.post<number>(this.url+"/Seller", sellerDetails);
  }
}
