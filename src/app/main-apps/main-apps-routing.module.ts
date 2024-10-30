
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './apps/homepage/home/home.component';

const routes: Routes = [
  {
    path: 'aboutus',
    loadChildren: () => import('./apps/aboutus/aboutus.module').then(m => m.AboutusModule)

  },
  {
    path: 'contact',
    loadChildren: () => import('./apps/contact/contact.module').then(m => m.ContactModule)

  },
  {
    path: 'homepage',
    loadChildren: () => import('./apps/homepage/homepage.module').then(m => m.HomepageModule)
  },

  {
    path: 'jobs',
    loadChildren: () => import('./apps/jobs/jobs.module').then(m => m.JobsModule)

  },
  {
    path: 'partners',
    loadChildren: () => import('./apps/partners/partners.module').then(m => m.PartnersModule)

  },
  {
    path: 'projects',
    loadChildren: () => import('./apps/projects/projects.module').then(m => m.ProjectsModule)

  },
  {
    path: 'services',
    loadChildren: () => import('./apps/services/services.module').then(m => m.ServicesModule)

  },
  {
    path: 'profile',
    loadChildren: () => import('./apps/profile/profile.module').then(m => m.ProfileModule)

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
