import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
