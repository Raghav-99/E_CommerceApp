
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : Product[] =[]
  public productList = new BehaviorSubject<Product[]>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }
  
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : Product[]){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : Product){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: Product){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.pId=== a.pId){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
