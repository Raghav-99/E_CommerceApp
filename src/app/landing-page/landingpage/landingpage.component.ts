import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  product: any[]=[];

  constructor(private products:ProductsService) { 
        this.product = this.products.getProductsFromService();

  }

  ngOnInit(): void {
  }

}
