import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname = ""
  pwd = ""
  statusCode:number = 404
  constructor(private _service:LoginService, private _route:Router) { }

  Authenticate() {
    this._service.Authenticate(this.uname, this.pwd).subscribe(response => this.statusCode = response, (error) => console.log(error));
    if(this.statusCode === 200) {
      this._route.navigate(['/about-us'])
    }
  }
  ngOnInit(): void {
  }

}
