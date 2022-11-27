import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  ListOfUsers=Array<User>();
  User:User=new User();
  msg:string=''
  constructor(private _cs:UserService) { }
  
  getUsersFromService() {
    this._cs.getUsersFromAPI()
    .subscribe(response=>this.ListOfUsers =response);
  }
  
  getUserById(id:string){
    this._cs.getUsersByIdFromAPI(id)
    .subscribe(response=>this.User=response);
  }
  
  deleteUserById(id:string){
    this._cs.deleteUserByIdFromAPI(id)
    .subscribe(response=>this.User=response);
  }
  // addUser(u:User){
  //  this._cs.addUserFromAPI(this.u)
  //  .subscribe(response=>()=>this.msg="Row added successfully.");
  // }
  
  updateUserById(id:string){
    this._cs.updateUserByIdFromAPI(id,this.User)
    .subscribe(response=>()=>this.msg="Row updated successfully."); 
  }
  
  
    ngOnInit(): void {
      this.getUsersFromService()
    }
  
  }
  