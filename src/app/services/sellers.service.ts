import { Injectable } from '@angular/core';
import { Seller } from '../models/seller';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  // Sellers = Array<Seller>();
  url = 'http://localhost:5233/api/Seller';
  constructor(private http: HttpClient) {
  }

  // makeInactive(id:number){
    
  // }
  
  getSellersFromAPI() {
    return this.http.get<Seller[]>(this.url);
  }
  getSellersByIdFromAPI(id: string) {
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
  updateSellerByIdFromAPI(username: string,c:Seller) {
    return this.http.put<Seller>(`${this.url}/${username}`,c,{
          headers:new HttpHeaders({
            'Content-Type':'application/json'
          })
        });
  }
  deleteSellerByIdFromAPI(id:string) {
    return this.http.delete<Seller[]>(this.url + '/' + id);
  }
}
