import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorAppsRoutingModule } from './visitor-apps-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainLayout2Component } from './layout/main-layout2/main-layout2.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainLayout2Component,
  ],
  imports: [
    CommonModule,
    VisitorAppsRoutingModule,

  ]
})
export class VisitorAppsModule { }
