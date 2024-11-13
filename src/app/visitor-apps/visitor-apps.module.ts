import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorAppsRoutingModule } from './visitor-apps-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainLayout2Component } from './layout/main-layout2/main-layout2.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { PartnersComponent } from './partners/partners.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainLayout2Component,
    AboutusComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    JobsComponent,
    PartnersComponent,
  ],
  imports: [
    CommonModule,
    VisitorAppsRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class VisitorAppsModule { }
