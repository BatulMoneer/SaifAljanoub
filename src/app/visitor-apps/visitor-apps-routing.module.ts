import { AboutusComponent } from './aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { PartnersComponent } from './partners/partners.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';

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
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'jobs',
    component: JobsComponent
  }, {
    path: 'partners',
    component: PartnersComponent
  }, {
    path: 'projects',
    component: ProjectsComponent
  }, {
    path: 'services',
    component: ServicesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorAppsRoutingModule { }
