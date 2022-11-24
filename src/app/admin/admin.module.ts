import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    SellerListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,FormsModule,
  ],
  exports:[SellerListComponent,UserListComponent,DashboardComponent]
})
export class AdminModule { }
