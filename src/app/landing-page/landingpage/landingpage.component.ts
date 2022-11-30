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
  public productList: any;
  public filterCategory: any;
  searchKey: string = "";
  searchKey1: string = "";
  a: string = ''
  constructor(private Products: ProductsService, private cartService: CartService, private _route:Router) { }

  ngOnInit(): void {
    this.Products.getProductsFromAPI()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.productType === "women's clothing" || a.productType === "men's clothing") {
            a.productType = "fashion"
          }
          Object.assign(a, { productCount: 1, total: a.price * a.productCount });
        });
        console.log(this.filterCategory)
        console.log(this.productList)

      });

    this.Products.search.subscribe((val: any) => {
      this.searchKey = val;
    });
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      });
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  public totalItem: number = 0;
  public searchTerm !: string;

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.Products.search.next(this.searchTerm);
  }

  filters(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.productType == category || category == '') {
          return a;
        }
      })
      console.log(this.filterCategory)
    }   
    ADD(){
        this._route.navigate(
          ['/login']
        )
        
      }
    }


  
