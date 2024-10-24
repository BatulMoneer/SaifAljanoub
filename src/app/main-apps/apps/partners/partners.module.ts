import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { HomeComponent } from './home/home.component';
import { AddPartnerComponent } from './add-partner/add-partner.component';
import { EditPartnerComponent } from './edit-partner/edit-partner.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddPartnerComponent,
    EditPartnerComponent
  ],
  imports: [
    CommonModule,
    PartnersRoutingModule
  ]
})
export class PartnersModule { }
