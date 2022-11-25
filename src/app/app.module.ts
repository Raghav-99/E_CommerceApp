import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { LoginComponent } from './Login/login/login.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationModule } from './registration/registration.module';
import { ForgotpageComponent } from './Forgotpwd/forgotpage/forgotpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    AdminModule,HttpClientModule,RegistrationModule,FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [UserService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
