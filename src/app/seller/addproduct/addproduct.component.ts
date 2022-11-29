import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/models/seller';
import { FormBuilder, FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public SellerForm!: FormGroup

  productName:string='';
  price:number=0;
  productDescription:string='';
  productType:string='';
  imageUrl:string='';
  productCount:number=0;

  constructor(private fromBuilder: FormBuilder,private _service:ProductsService, private _route:Router) { }

  ngOnInit(): void { 
    this.SellerForm=this.fromBuilder.group ({
      productName:['',Validators.required],
      price:['',Validators.required],
      productDescription:['',Validators.required],
      productType:['',Validators.required],
      imageUrl:['',Validators.required],
      productCount:['',Validators.required],

  })
}
  // wip: insert product
  Register()
  {
    this._service.InsertProduct()

  }
}
