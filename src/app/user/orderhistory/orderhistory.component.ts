import { Component, OnInit } from '@angular/core';
import { Orderhistory } from 'src/app/models/orderhistory';
import { Product } from 'src/app/models/product';
import { UserHistory } from 'src/app/models/user-history';
import { OrderhistoryService } from 'src/app/services/orderhistory.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

  constructor(private _historyService:OrderhistoryService, private _productService:ProductsService) { }
  UserHistory:UserHistory[] = []
  GetOrderHistoryByUsername() {
    let fullHistory:Orderhistory[] = []  
    this._historyService.GetOrderHistoryByUsername().subscribe((response) => fullHistory = response, (error) => console.log(error),
    () => {
      let products:Product;
      let username = window.sessionStorage.getItem("authenticatedUser")
      for (const order of fullHistory) {
        if(order.username === username && username != null) {
          this._productService.getProductsByIdFromAPI(order.pId).subscribe((response) => products = response,
            (error) => console.log(error), () => {
              this.UserHistory.push(new UserHistory(username, order.sellername, products.productName, products.imageUrl))
            }
          )
        }
      }
    })
  }
  ngOnInit(): void {
    this.GetOrderHistoryByUsername()
  }

}
