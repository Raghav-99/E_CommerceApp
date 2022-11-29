import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

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
  searchKey: string = '';
  //filterCategory: any

  Product = Array<Product>();
  // s:Product=new Product();
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
  
  
  addtocart(item: any) {
          this.cartService.addtoCart(item);
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


        ngOnInit(): void {
          this.productService.search.subscribe((val: any) => {
            this.searchKey = val;
          });
          this.cartService.getProducts()
            .subscribe(res => {
              this.totalItem = res.length;
            })
        }

        Editprofile()
        {
          this._route.navigate(['/editpage']);
        }
        Logout()
        {
          this._route.navigate(['/landingpage']);
        }

      }
