import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Users = Array<User>();
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {
  }
  getUsersFromAPI() {
    return this.http.get<User[]>(this.url);
  }
  getUsersByIdFromAPI(id: number) {
    return this.http.get<User>(this.url + '/' + id);
  }
  addUserFromAPI(c: User) {
    return this.http.post(this.url, c, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }
  x:any={};
  updateUserByIdFromAPI(empno: number,c:User) {
    return this.http.put(`${this.url}/${empno}`,c,{
           headers:new HttpHeaders({
             'Content-Type':'application/json'
          })
        });
  }
  deleteUserByIdFromAPI(id: number) {
    return this.http.delete<User>(this.url + '/' + id);
  }
}
