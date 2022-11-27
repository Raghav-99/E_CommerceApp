import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { EditpageComponent } from './editpage/editpage.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserDashboardComponent,
    EditpageComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [UserDashboardComponent,EditpageComponent],
})
export class UserModule { }
