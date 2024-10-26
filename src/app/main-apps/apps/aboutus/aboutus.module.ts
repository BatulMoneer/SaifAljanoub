import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { HomeComponent } from './home/home.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { TeamComponent } from './team/team.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CompanyInfoComponent,
    TeamComponent,
    AddMemberComponent,
    EditMemberComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AboutusModule { }
