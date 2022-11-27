import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  product: Product[]=new Array<Product>();

  constructor(private _service:ProductsService,) { }
  
  ngOnInit(): void {
    this._service.getProductsFromAPI().subscribe(response => this.product = response);
  }
}
