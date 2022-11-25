import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';{}
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private fromBuilder: FormBuilder,private _service:LoginService, private _route:Router) {}

  ngOnInit(): void {
    this.loginForm=this.fromBuilder.group ({
      uname:['',Validators.required],
      pwd:['',Validators.required]
      
    })
  }

  statusCode:number = 404

  Authenticate() {
    this._service.Authenticate(this.loginForm.value.uname, this.loginForm.value.pwd).subscribe(response => this.statusCode = response, (error) => console.log(error));
    if(this.statusCode === 200) {
      this._route.navigate(['/about-us'])
    }
  }


}
