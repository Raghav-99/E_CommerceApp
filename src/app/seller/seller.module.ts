import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerDashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerEditPageComponent } from './seller-edit-page/seller-edit-page.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PaymenthistoryComponent } from './Paymenthistory/paymenthistory.component';



@NgModule({
  declarations: [
    SellerDashboardComponent,
    SellerEditPageComponent,
    AddproductComponent,
    PaymenthistoryComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ],
  exports:[SellerDashboardComponent]
})
export class SellerModule { }
