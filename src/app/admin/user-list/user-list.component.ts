import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

User=Array<User>();
u:User=new User();
msg:string=''
constructor(private _cs:UserService) {
  this.getUsersFromService() 
}
getUsersFromService(){
  this._cs.getUsersFromAPI()
  .subscribe(response=>this.User =response);
}
getUserById(id:number){
  this._cs.getUsersByIdFromAPI(id)
  .subscribe(response=>this.u=response);
}
deleteUserById(id:number){
  this._cs.deleteUserByIdFromAPI(id)
  .subscribe(response=>this.u=response);
}
addUser(u:User){
 this._cs.addUserFromAPI(this.u)
 .subscribe(response=>()=>this.msg="Row added successfully.");
}
updateUserById(id:number){
  this._cs.updateUserByIdFromAPI(id,this.u)
  .subscribe(response=>()=>this.msg="Row updated successfully."); 
}


  ngOnInit(): void {
  }

}
