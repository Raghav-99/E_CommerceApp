import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  pwd:string='';
  cpwd:string='';
  FName:string='';
  Email:string='';
  UName:string='';
  DOB:string='';
  address:string='';
  HintQue:string='';
  Answer:string='';
  msg:string=''; 
  Validate()
  {
    if(this.pwd === this.cpwd)
     this.msg="Registration Succesfull"
 
     else
     this.msg="Not Valid INput"
 
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
