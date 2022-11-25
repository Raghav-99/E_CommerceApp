import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { ContactusComponent } from './landing-page/contactus/contactus.component';
import { LandingpageComponent } from './landing-page/landingpage/landingpage.component';
import { LoginComponent } from './Login/login/login.component';


const routes: Routes = [
  {path: "", redirectTo:"landingpage", pathMatch:"full"},
  {path: "landingpage", component:LandingpageComponent},
  {path: "login", component: LoginComponent},
  {path:"contactus",component: ContactusComponent},
  {path:"about-us",component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
