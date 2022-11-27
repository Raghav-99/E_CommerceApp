

import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  public totalItem: number = 0;
  public searchTerm !: string;
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  a: string = 'home';
  // constructor(private products:ProductsService, private cartService:CartService) {
  //   this.product = this.products.getProductsFromService();
  //  }
 
  Product = Array<Product>();
  // s:Product=new Product();
  msg: string = ''
  constructor(private products: ProductsService, private cartService: CartService) {
    this.getProductsFromService()
  }
  getProductsFromService() {
    this.products.getProductsFromAPI()
      .subscribe(response => this.Product = response);
  }
  
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  
  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

}