import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {
  a:string='checkoutpage'
  b:string=''
  public products: any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService) { }
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
            total += this.products[i].price * this.products[i].quantity;
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
      if(this.products[i]==product)
          quantity++
    }
    return quantity;
  }
   
}
