import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SellerComponent } from './seller/seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    UserComponent,
    SellerComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports: [UserComponent,SellerComponent]
})
export class RegistrationModule { }
