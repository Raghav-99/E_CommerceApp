import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {  RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
    ContactusComponent,
    AboutUsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule, RouterModule, FormsModule,
  ],
  exports:[HeaderComponent,FooterComponent,LandingpageComponent,ContactusComponent,AboutUsComponent]
})
export class LandingPageModule { }
