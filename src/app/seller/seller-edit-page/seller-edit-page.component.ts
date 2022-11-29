import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/models/seller';
import { SellersService } from 'src/app/services/sellers.service';
@Component({
  selector: 'app-seller-edit-page',
  templateUrl: './seller-edit-page.component.html',
  styleUrls: ['./seller-edit-page.component.css']
})
export class SellerEditPageComponent implements OnInit {

  // ListOfUsers=Array<User>();
  // User:User=new User();
  // msg:string=''
  // constructor(private _cs:SellerService) { }
  
  // getUsersFromService() {
  //   this._cs.getUsersFromAPI()
  //   .subscribe(response=>this.ListOfUsers =response);
  // }
  
  // getUserById(id:string){
  //   this._cs.getUsersByIdFromAPI(id)
  //   .subscribe(response=>this.User=response);
  // }
  
  // deleteUserById(id:string){
  //   this._cs.deleteUserByIdFromAPI(id)
  //   .subscribe(response=>this.ListOfUsers=response);
  // }
  // addUser(u:User){
  //  this._cs.addUserFromAPI(this.u)
  //  .subscribe(response=>()=>this.msg="Row added successfully.");
  // }
  
  // updateUserById(id:string){
  //   this._cs.updateUserByIdFromAPI(id,this.User)
  //   .subscribe(response=>()=>this.msg="Row updated successfully."); 
  // }
  
  
    ngOnInit(): void {
      // this.getUsersFromService()
    }
  
  }
  