import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orderhistory } from '../models/orderhistory';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderhistoryService {
  url = "http://localhost:5233/api/OrderHistory"
  constructor(private _http:HttpClient) { }

  StoreInHistory(history : Orderhistory) {
    return this._http.post(this.url, history);
  }
}
