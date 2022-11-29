import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; { }
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname = ""
  pwd = ""
  RoleId = ""
  public loginForm!: FormGroup
  constructor(private fromBuilder: FormBuilder,private _service:LoginService, private _route:Router) {}

  ngOnInit(): void {
    this.loginForm=this.fromBuilder.group ({
      uname:['',Validators.required],
      pwd:['',Validators.required]

    })
  }

  Authenticate(statusCode:number) {
    console.log(this.RoleId)
    this._service.Authenticate(this.loginForm.value.uname, this.loginForm.value.pwd, this.RoleId).subscribe(response => statusCode = response, (error) => console.log(error), () => 
    {
    if(statusCode === 302 && this.RoleId != "") {
      if(this.RoleId === "1") {this._route.navigate(['/dashboard/admin']);}
      //! change route for seller when seller component is done
      else if(this.RoleId === "2") {this._route.navigate(['/about-us']);}
      else if(this.RoleId === "3") { this._route.navigate(['/dashboard/user']);}
    }
    else {alert("Invalid login credentials!")}
  });

  }

  
}


