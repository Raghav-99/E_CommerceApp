import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Seller } from 'src/app/models/seller';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  Pwd:string='';
  Cpwd:string='';
  FName:string='';
  Email:string='';
  UName:string='';
  Phone:string='';
  //Address:string='';
  HintQue:string='';
  Answer:string='';
  ShopName:string='';
  ShopReg:string='';


  public SellerForm!: FormGroup
  constructor(private fromBuilder: FormBuilder,private _service:RegisterService, private _route:Router) {}


  ngOnInit(): void {
    this.SellerForm=this.fromBuilder.group ({
      Pwd:['',Validators.required],
      Cpwd:['',Validators.required],
      FName:['',Validators.required],
      Email:['',Validators.required],
      UName:['',Validators.required],
      Phone:['',Validators.required],
      //Address:['',Validators.required],
      HintQue:['',Validators.required],
      Answer:['',Validators.required],
      ShopName:['',Validators.required],
      ShopReg:['',Validators.required]

    })
  }



  Register(statusCode:number)
  {
    let sellerDetails:Seller = new Seller(this.SellerForm.value.FName,this.SellerForm.value.UName, this.SellerForm.value.HintQue, this.SellerForm.value.Answer, this.SellerForm.value.Phone, this.SellerForm.value.ShopName, this.SellerForm.value.ShopReg);
    this._service.RegisterUserIntoIdentity(this.SellerForm.value.UName, this.SellerForm.value.Email, this.SellerForm.value.Pwd, this.SellerForm.value.Cpwd)
    .subscribe(response => statusCode = response, (error) => console.log(error), () => {
      if(statusCode === 201) {
        this._service.RegisterSellerDetails(sellerDetails).subscribe(response => statusCode = response, (error) => {console.log("error: "+error)},
        () => {if(statusCode === 201) {
          alert("Registeration successful! User "+this.SellerForm.value.UName+" created!")
          this._route.navigate(['/login']);
        }});
      }
      else {
        alert("Registeration failed! ReCheck your entered details and try again")
      }
    })
  }
}
