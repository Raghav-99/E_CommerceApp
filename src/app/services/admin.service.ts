import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  Admin = Array<Admin>();
  url = 'http://localhost:3000/admin';
  constructor(private http: HttpClient) {
  }

  getAdminsFromAPI() {
    return this.http.get<Admin[]>(this.url);
  }
  getAdminsByIdFromAPI(id: number) {
    return this.http.get<Admin>(this.url + '/' + id);
  }

}
