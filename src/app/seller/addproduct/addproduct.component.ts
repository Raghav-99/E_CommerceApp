import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { Commodity } from 'src/app/models/commodity';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public SellerForm!: FormGroup
  
  SellerName: string | null = window.sessionStorage.getItem("authenticatedUser");
  RoleId: string | null = window.sessionStorage.getItem("roleId");


  productName: string = '';
  price: number = 0;
  productDescription: string = '';
  productType: string = '';
  imageUrl: string = '';
  productCount: number = 0;

  constructor(private fromBuilder: FormBuilder, private _service: ProductsService, private _route: Router) { }

  ngOnInit(): void {
    this.SellerForm = this.fromBuilder.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      productDescription: ['', Validators.required],
      productType: ['', Validators.required],
      imageUrl: ['', Validators.required],
      productCount: ['', Validators.required],

    })
  }


  // wip: insert product
  Register() {
    console.log(this.SellerName + " " + this.RoleId)
    // let product: Product = new Product(this.SellerForm.value.productName,
    //   this.SellerForm.value.price,
    //   this.SellerForm.value.productDescription,
    //   this.SellerForm.value.productType,
    //   this.SellerForm.value.imageUrl,
    //   this.SellerForm.value.productCount) 
    let product : Product = new Product()

    if (this.SellerName != null && this.RoleId === "2") {
      console.log("auth validated")
      this._service.InsertProduct(this.SellerForm.value.productName,
        this.SellerForm.value.price,
        this.SellerForm.value.productDescription,
        this.SellerForm.value.productType,
        this.SellerForm.value.imageUrl,
        this.SellerForm.value.productCount).
        subscribe((response) => product = response,(error) => console.log(error) ,() => {
          let commodity: Commodity = new Commodity(this.SellerName, product.pId);

          this._service.MapProductToSeller(commodity).
            subscribe((response) => commodity = response, (error) => console.log(error),
              () => { alert("New product added successfully!"); this._route.navigate(['/dashboard/seller']) });
        })
    }
  }
}
