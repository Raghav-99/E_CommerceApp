import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SellerEditPageComponent } from './seller-edit-page/seller-edit-page.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SellerEditPageComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[DashboardComponent]
})
export class SellerModule { }
