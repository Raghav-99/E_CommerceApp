import { Injectable } from '@angular/core';
import { Seller } from '../models/seller';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  Sellers = Array<Seller>();
  url = 'http://localhost:3000/Sellers';
  constructor(private http: HttpClient) {
  }

  makeInactive(id:number){
    
  }
  getSellersFromAPI() {
    return this.http.get<Seller[]>(this.url);
  }
  getSellersByIdFromAPI(id: number) {
    return this.http.get<Seller>(this.url + '/' + id);
  }
  addSellerFromAPI(c: Seller) {
    return this.http.post(this.url, c, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }
  x:any={};
  updateSellerByIdFromAPI(empno: number,c:Seller) {
    return this.http.put(`${this.url}/${empno}`,c,{
           headers:new HttpHeaders({
             'Content-Type':'application/json'
          })
        });
  }
  deleteSellerByIdFromAPI(id: number) {
    return this.http.delete<Seller>(this.url + '/' + id);
  }
}
