import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Users = Array<User>();
  url = 'http://localhost:5233/api/';
  constructor(private http: HttpClient) {}
  
  getUsersFromAPI() {
    return this.http.get<User[]>(this.url+'user');
  }
  getUsersByIdFromAPI(id: string) {
    return this.http.get<User>(this.url + 'user/' + id);
  }
  // addUserFromAPI(c: User) {
  //   return this.http.post(this.url, c, {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json'
  //     })
  //   });
  // }

  x:any={};
  
  updateUserByIdFromAPI(UId: string,c:User) {
    return this.http.put(`${this.url+'user'}/${UId}`,c,{
          headers:new HttpHeaders({
            'Content-Type':'application/json'
          })
        });
  }
  deleteUserByIdFromAPI(id: string) {
    return this.http.delete<User>(this.url + 'user/' + id);
  }
}
