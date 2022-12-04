import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../landing-page/footer/footer.component';
import { LandingPageModule } from '../landing-page/landing-page.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SellerListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,FormsModule,LandingPageModule
  ],
  exports:[SellerListComponent,UserListComponent,DashboardComponent]
})
export class AdminModule { }
