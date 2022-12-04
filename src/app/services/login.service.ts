import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:5233/api/Account"
  constructor(private _http:HttpClient) { }
  
  Authenticate(username:string, password:string, roleId:string) {
    return this._http.post<number>(this.url+'/login', {username, password}, {
      params: {roleId: roleId}
    });
  }
}
