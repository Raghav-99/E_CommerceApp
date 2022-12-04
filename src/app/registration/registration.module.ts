import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SellerComponent } from './seller/seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from '../landing-page/footer/footer.component';
import { HeaderComponent } from '../landing-page/header/header.component';
import { LandingPageModule } from '../landing-page/landing-page.module';


@NgModule({
  declarations: [
    UserComponent,
    SellerComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,LandingPageModule
  ],
  exports: [UserComponent,SellerComponent,IndexComponent]
})
export class RegistrationModule { }
