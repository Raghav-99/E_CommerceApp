import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { HttpStatusCode } from '@angular/common/http';
import { User } from 'src/app/models/user';
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
  constructor(private fromBuilder: FormBuilder,private _service:RegisterService, private _route:Router) {}


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



  Register(statusCode:number)
  {
    let userDetails:User = new User(this.UserForm.value.UName, this.UserForm.value.FName, this.UserForm.value.phone, this.UserForm.value.address, this.UserForm.value.HintQue, this.UserForm.value.Answer, "");
    this._service.RegisterUserIntoIdentity(this.UserForm.value.UName, this.UserForm.value.Email, this.UserForm.value.pwd, this.UserForm.value.cpwd)
    .subscribe(response => statusCode = response, (error) => console.log(error), () => {
      if(statusCode === 201) {
        this._service.RegisterUserDetails(userDetails).subscribe(response => statusCode = response, (error) => {console.log("error: "+error), console.log("Details: "+userDetails.secQuestion)},
        () => {if(statusCode === 201) {
          alert("Registeration successful! User "+this.UserForm.value.UName+" created!")
          this._route.navigate(['/login']);
        }});
      }
      else {
        alert("Registeration failed! ReCheck your entered details and try again")
      }
    })
  }
}
