import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerDashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerEditPageComponent } from './seller-edit-page/seller-edit-page.component';
import { FiltersPipe } from '../user/filters.pipe';

import { AddproductComponent } from './addproduct/addproduct.component';
import { ItemdispatchComponent } from './itemdispatch/itemdispatch.component';



@NgModule({
  declarations: [
    SellerDashboardComponent,
    SellerEditPageComponent,
    AddproductComponent,
    ItemdispatchComponent,
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ],
  exports:[SellerDashboardComponent,SellerEditPageComponent],
})
export class SellerModule { }
