import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
getProductsFromService(){
  return this.Product;
}

  constructor(private http:HttpClient) { }
  
  Product = Array<Product>();
  url = 'http://localhost:5233/api/Products';
  public search = new BehaviorSubject<string>("");

  getProductsFromAPI() {
    return this.http.get<Product[]>(this.url);
  }
  getProductsByIdFromAPI(id: number) {
    return this.http.get<Product>(this.url + '/' + id);
  }
}


