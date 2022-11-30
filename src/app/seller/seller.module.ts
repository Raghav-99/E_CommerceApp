import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SellerEditPageComponent } from './seller-edit-page/seller-edit-page.component';
import { FiltersPipe } from '../user/filters.pipe';




@NgModule({
  declarations: [
    DashboardComponent,
    SellerEditPageComponent,
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[DashboardComponent,SellerEditPageComponent],
})
export class SellerModule { }
