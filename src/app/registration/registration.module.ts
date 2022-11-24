import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SellerComponent } from './seller/seller.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    SellerComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [UserComponent,SellerComponent]
})
export class RegistrationModule { }