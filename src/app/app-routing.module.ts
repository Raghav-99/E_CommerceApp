import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { ContactusComponent } from './landing-page/contactus/contactus.component';
import { LandingpageComponent } from './landing-page/landingpage/landingpage.component';
import { LoginComponent } from './Login/login/login.component';
import { UserComponent } from './registration/user/user.component';
import { UserDashboardComponent } from './user/dashboard/dashboard.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  // {path: "", redirectTo:"landingpage", pathMatch:"full"},
  // {path: "landingpage", component:LandingpageComponent},
  // {path: "login", component: LoginComponent},
  // {path:"contactus",component: ContactusComponent},
  // {path:"about-us",component: AboutUsComponent},
  // {path:"register-user",component: UserComponent},
  // {path:"dashboard", children: [
  //   {path: "admin", component: DashboardComponent},
  //   {path: "user", component: UserDashboardComponent}
  // ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
