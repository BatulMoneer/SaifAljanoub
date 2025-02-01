import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { AdminsComponent } from './admins/admins.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent,
    AdminsComponent,
    AddAdminComponent,
    ViewAdminComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ]
})
export class ProfileModule { }
