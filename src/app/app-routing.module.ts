import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { ContactusComponent } from './landing-page/contactus/contactus.component';
import { LandingpageComponent } from './landing-page/landingpage/landingpage.component';
import { LoginComponent } from './Login/login/login.component';
import { IndexComponent } from './registration/index/index.component';
import { UserComponent } from './registration/user/user.component';
import { AddproductComponent } from './seller/addproduct/addproduct.component';
import { UserDashboardComponent } from './user/dashboard/dashboard.component';
import { EditpageComponent } from './user/editpage/editpage.component';
// import { UserModule } from './user/user.module';
import { SellerDashboardComponent } from './seller/dashboard/dashboard.component'
const routes: Routes = [
  {path: "", redirectTo:"landingpage", pathMatch:"full"},
  {path: "landingpage", component:LandingpageComponent},
  {path: "login", component: LoginComponent},
  {path:"contactus",component: ContactusComponent},
  {path:"editpage",component:EditpageComponent},
  {path:"about-us",component: AboutUsComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"register-user",component: UserComponent},
  {path:"register-index",component:IndexComponent},
  {path:"dashboard", children: [
    {path: "admin", component: DashboardComponent},
    {path: "user", component: UserDashboardComponent},
    {path: "seller", component: SellerDashboardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
