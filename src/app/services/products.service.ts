import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { Commodity } from '../models/commodity';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
getProductsFromService(){
  return this.Product;
}
  
  constructor(private http:HttpClient) { }
  
  Product = Array<Product>();
  
  url = 'http://localhost:5233/api';
  public search = new BehaviorSubject<string>("");

  getProductsFromAPI() {
    return this.http.get<Product[]>(this.url + '/Products');
  }
  getProductsByIdFromAPI(id: number) {
    return this.http.get<Product>(this.url + '/Products/' + id);
  }

  InsertProduct(productName:string, Price:number, productDescription:string, productType:string, imageUrl:string, productCount:number) {
    return this.http.post<Product>(this.url + '/Products', {productName, Price, productDescription, productType, imageUrl, productCount});
  }

  MapProductToSeller(commodity : Commodity) {
    return this.http.post<Commodity>(this.url + '/CommodityMap', commodity);
  }
 
}


