import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/models/seller';
import { SellersService } from 'src/app/services/sellers.service';
@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  ListOfSeller=Array<Seller>();

  constructor(private _cs:SellersService) {}
  
  getSellersFromService(){
    this._cs.getSellersFromAPI()
    .subscribe(response=>this.ListOfSeller = response);
  }

  // getSellerById(id:string){
  //   this._cs.getSellersByIdFromAPI(id)
  //   .subscribe(response=>this.ListOfSeller[this.ListOfSeller.findIndex(x => x.username === id)] = response);
  // }

  deleteSellerById(id:string){
    this._cs.deleteSellerByIdFromAPI(id)
    .subscribe(response=>this.ListOfSeller=response);
  }
  // addSeller(s:Seller){
  //  this._cs.addSellerFromAPI(this.s)
  //  .subscribe(response=>()=>this.msg="Row added successfully.");
  // }
  updateSellerById(id:string, seller : Seller){
    this._cs.updateSellerByIdFromAPI(id, seller)
    .subscribe(response=>seller = response); 
  }
  // makeInactive(id:number){
  //   this.s.active=0;
  // }

  ngOnInit(): void {
    this.getSellersFromService() 
  }

}
