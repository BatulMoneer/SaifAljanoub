import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppsRoutingModule } from './main-apps-routing.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MainAppsRoutingModule,
    FormsModule,
  ]
})
export class MainAppsModule { }
