import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './apps/home/home.component';
import { AboutusComponent } from './apps/aboutus/aboutus.component';
import { ContactComponent } from './apps/contact/contact.component';
import { JobsComponent } from './apps/jobs/jobs.component';
import { PartnersComponent } from './apps/partners/partners.component';
import { ProjectsComponent } from './apps/projects/projects.component';
import { ServicesComponent } from './apps/services/services.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'partners',
    component: PartnersComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
