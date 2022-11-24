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
