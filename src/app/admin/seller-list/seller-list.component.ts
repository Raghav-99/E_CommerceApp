import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/models/seller';
import { SellersService } from 'src/app/services/sellers.service';
@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  Seller=Array<Seller>();
  s:Seller=new Seller();
  msg:string=''
  constructor(private _cs:SellersService) {
    this.getSellersFromService() 
  }
  getSellersFromService(){
    this._cs.getSellersFromAPI()
    .subscribe(response=>this.Seller =response);
  }
  getSellerById(id:number){
    this._cs.getSellersByIdFromAPI(id)
    .subscribe(response=>this.s=response);
  }
  deleteSellerById(id:number){
    this._cs.deleteSellerByIdFromAPI(id)
    .subscribe(response=>this.s=response);
  }
  addSeller(s:Seller){
   this._cs.addSellerFromAPI(this.s)
   .subscribe(response=>()=>this.msg="Row added successfully.");
  }
  updateSellerById(id:number){
    this._cs.updateSellerByIdFromAPI(id,this.s)
    .subscribe(response=>()=>this.msg="Row updated successfully."); 
  }
  makeInactive(id:number){
    this.s.active=0;
  }

  ngOnInit(): void {
  }

}
