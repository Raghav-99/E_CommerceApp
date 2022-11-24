import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './landingpage/landingpage.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingpageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent,LandingpageComponent]
})
export class LandingPageModule { }
