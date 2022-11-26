import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "http://localhost:5233/api"
  constructor(private _http:HttpClient) { }

  RegisterUserIntoIdentity(username:string, emailAddress:string, password:string, confirmPassword:string) {
      return this._http.post<number>(this.url+"/Account/register", {username, emailAddress, password, confirmPassword})
  }

  RegisterUserDetails(userDetails:User) {
    return this._http.post<number>(this.url+"/User", userDetails);
  }
}
