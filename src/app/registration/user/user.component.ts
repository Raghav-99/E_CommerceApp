import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
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
  phone:string='';
  address:string='';
  HintQue:string='';
  Answer:string='';


  public UserForm!: FormGroup
   constructor(private fromBuilder: FormBuilder,private _service:UserService, private _route:Router) {}


  ngOnInit(): void {
    this.UserForm=this.fromBuilder.group ({
      pwd:['',Validators.required],
  cpwd:['',Validators.required],
  FName:['',Validators.required],
  Email:['',Validators.required],
  UName:['',Validators.required],
  phone:['',Validators.required],
  address:['',Validators.required],
  HintQue:['',Validators.required],
  Answer:['',Validators.required]

    })
  }



  Register()
  {

  }
}
