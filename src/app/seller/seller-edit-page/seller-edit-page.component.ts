import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/models/seller';
import { SellersService } from 'src/app/services/sellers.service';
@Component({
  selector: 'app-seller-edit-page',
  templateUrl: './seller-edit-page.component.html',
  styleUrls: ['./seller-edit-page.component.css']
})
export class  SellerEditPageComponent implements OnInit {

  ListOfSeller=Array<Seller>();
  Seller:Seller=new Seller();
  msg:string=''
  constructor(private _cs:SellersService) {
    
   }
  
  getSellersFromService() {
    this._cs.getSellersFromAPI()
    .subscribe(response=>this.ListOfSeller =response);
  }
  
  getSellerById(id:string){
    this._cs.getSellersByIdFromAPI(id)
    .subscribe(response=>this.Seller=response);
  }
  
  deleteSellerById(id:string){
    this._cs.deleteSellerByIdFromAPI(id)
    .subscribe(response=>this.ListOfSeller=response);
  }
  addSeller(s:Seller){
   this._cs.addSellerFromAPI(s)
   .subscribe(response=>()=>this.msg="Row added successfully.");
  }
  
  updateSellerById(id:string){
    this._cs.updateSellerByIdFromAPI(id,this.Seller )
    .subscribe(response=>()=>this.msg="Row updated successfully."); 
  }
  
  
    ngOnInit(): void {
      this.getSellersFromService()
    }
  
  }
  