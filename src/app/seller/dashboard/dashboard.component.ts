import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

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
  constructor(private productService: ProductsService,  private _route: Router) {
     this.getProductsFromService()
  }
  getProductsFromService() {
    this.productService.getProductsFromAPI()
      .subscribe(response => {
        this.Product = response;
        this.filterCategory = response;
        this.Product.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
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


        ngOnInit(): void {
          if(window.sessionStorage.getItem("authenticatedUser") != null && window.sessionStorage.getItem("roleId") === "2")
          this.productService.search.subscribe((val: any) => {
            this.searchKey = val;
          });
          else
            this._route.navigate(['/login'])
        }

        RouteToPaymentHistory() {
          this._route.navigate(['/paymenthistory'])
        }

        Editprofile()
        {
          this._route.navigate(['/editpage']);
        }

        Addproduct()
        {
          this._route.navigate(['/addproduct']);
        }
        Logout()
        {
          window.sessionStorage.clear()
          this._route.navigate(['/landingpage']);
        }

      }

