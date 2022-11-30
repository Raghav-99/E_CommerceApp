import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  ngOnInit(): void {
    
  }
  public totalItem: number = 0;
  public searchTerm !: string;
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  a: string = 'home';
  searchKey: string = '';
  Product = Array<Product>();
  msg: string = ''
  constructor(private productService: ProductsService, private cartService: CartService, private _route: Router) {
    this.getProductsFromService()
  }
  getProductsFromService() {
    this.productService.getProductsFromAPI()
      .subscribe(response => {
        this.Product = response;
        this.filterCategory = response;
        this.Product.forEach((a: any) => {
          if (a.productType === "women's clothing" || a.productType === "men's clothing") {
            a.productType = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price });
        }
        )
      }
      )
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.productService.search.next(this.searchTerm);
  }

  public filterCategory: any;
  filters(category: string) {
    this.filterCategory = this.Product
      .filter((a: any) => {
        if (a.productType == category || category == '') {
          return a;
        }
      })
    console.log(this.filterCategory)
  }
}
