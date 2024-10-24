import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    AddNewsComponent,
    EditNewsComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomepageModule { }
