import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';{}
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

  public loginForm!: FormGroup
  constructor(private fromBuilder: FormBuilder,private _service:LoginService, private _route:Router) {}

  ngOnInit(): void {
    this.loginForm=this.fromBuilder.group ({
      uname:['',Validators.required],
      pwd:['',Validators.required]
      
    })
  }

  Authenticate(statusCode:number) {
  this._service.Authenticate(this.loginForm.value.uname, this.loginForm.value.pwd).subscribe(response => statusCode = response, (error) => console.log(error), () => {
    if(statusCode === 200) {this._route.navigate(['/about-us'])}
  });

  }


}
