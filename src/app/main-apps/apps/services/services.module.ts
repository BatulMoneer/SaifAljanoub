import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { HomeComponent } from './home/home.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AddServiceComponent,
    EditServiceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ServicesModule { }
