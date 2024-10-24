import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { HomeComponent } from './home/home.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { TeamComponent } from './team/team.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';


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
    AboutusRoutingModule
  ]
})
export class AboutusModule { }
