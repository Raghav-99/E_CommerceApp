import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { EditpageComponent } from './editpage/editpage.component';
import { FormsModule } from '@angular/forms';
import { FiltersPipe } from './filters.pipe';
import { CartComponent } from './cart/cart.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    EditpageComponent,
    FiltersPipe,
    CartComponent,
    OrderhistoryComponent,
    PaymentpageComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [UserDashboardComponent,EditpageComponent],
})
export class UserModule { }
