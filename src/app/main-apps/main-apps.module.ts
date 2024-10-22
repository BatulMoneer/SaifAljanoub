import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppsRoutingModule } from './main-apps-routing.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './apps/home/home.component';
import { ServicesComponent } from './apps/services/services.component';
import { ProjectsComponent } from './apps/projects/projects.component';
import { ContactComponent } from './apps/contact/contact.component';
import { AboutusComponent } from './apps/aboutus/aboutus.component';
import { JobsComponent } from './apps/jobs/jobs.component';
import { PartnersComponent } from './apps/partners/partners.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    HomeComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    AboutusComponent,
    JobsComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    MainAppsRoutingModule
  ]
})
export class MainAppsModule { }
