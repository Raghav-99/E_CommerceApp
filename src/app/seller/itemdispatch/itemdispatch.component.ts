import { Component, OnInit } from '@angular/core';
import { Orderhistory } from 'src/app/models/orderhistory';
import { Product } from 'src/app/models/product';
import { UserHistory } from 'src/app/models/user-history';
import { OrderhistoryService } from 'src/app/services/orderhistory.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-itemdispatch',
  templateUrl: './itemdispatch.component.html',
  styleUrls: ['./itemdispatch.component.css']
})
export class ItemdispatchComponent implements OnInit {

  constructor(private _historyService: OrderhistoryService, private _productService: ProductsService) { }

  SellerHistory: UserHistory[] = []
  GetOrderHistoryBySellername() {
    let fullHistory: Orderhistory[] = []
    this._historyService.GetOrderHistoryByUsername().subscribe((response) => fullHistory = response, (error) => console.log(error),
      () => {
        let products: Product;
        if (window.sessionStorage.getItem("roleId") === "2") {
          let sellername = window.sessionStorage.getItem("authenticatedUser")
          for (const order of fullHistory) {
            if (order.sellername === sellername && sellername != null) {
              this._productService.getProductsByIdFromAPI(order.pId).subscribe((response) => products = response,
                (error) => console.log(error), () => {
                  this.SellerHistory.push(new UserHistory(order.username, sellername, products.productName, products.imageUrl))
                }
              )
            }
          }
        }

      })
  }

  DispatchItem() {
    alert("Item dispatched!")
  }

  ngOnInit(): void {
    this.GetOrderHistoryBySellername()
  }

}
