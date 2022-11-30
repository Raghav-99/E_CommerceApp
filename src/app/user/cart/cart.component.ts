import { Component, OnInit } from '@angular/core';
import { Commodity } from 'src/app/models/commodity';
import { Orderhistory } from 'src/app/models/orderhistory';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { OrderhistoryService } from 'src/app/services/orderhistory.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 public products: any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService, private _orderHistoryService:OrderhistoryService, private _productService:ProductsService) { }
  mySet:any
  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.mySet = new Set(this.products);

        this.grandTotal = this.cartService.getTotalPrice();
        let total = 0;
        for (var i = 0; i < this.products.length; i++) {
          if (this.products[i].price) {
            total += this.products[i].price * (i+1);
            this.grandTotal = total;
            console.log(this.products[i].price)
            console.log(this.grandTotal)
          }
        }
      })
  }
  getTotal() {
    let total = 0;
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].amount) {
        total += this.products[i].amount * this.products[i].quantity;
        this.grandTotal = total;
      }
    }
    return this.grandTotal;
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }
  
  getQuantity(product:any) {
    let quantity = 0;
    for (var i = 0; i < this.products.length; i++) {
      if(this.products[i] == product)
          quantity++
    }
    return quantity;
  } 

  Checkout(products : Array<Product>) {
    // process payment and store in orderhistory
    let ListOfSellers : string[] = [] 
    for (const product of products) {
      this._productService.findAllSellersByProductId(product).subscribe(
        (response) => ListOfSellers = response, (error) => console.log(error), () => {
          for (const sellername of ListOfSellers) {
            let history : Orderhistory = new Orderhistory(Date.now(), window.sessionStorage.getItem("authenticatedUser"), sellername, product.pId, this.getQuantity(product));  
            this._orderHistoryService.StoreInHistory(history).subscribe((response) => console.log(response), (error) => console.log(error));
          }
        }
      ) 
    }
  }

}
