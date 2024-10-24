import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { HomeComponent } from './home/home.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddJobComponent,
    EditJobComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
