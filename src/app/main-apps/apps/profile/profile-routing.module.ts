import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminsComponent } from './admins/admins.component';
import { InfoComponent } from './info/info.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';

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
    path: 'admins',
    component: AdminsComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'view',
    component: ViewAdminComponent
  },
  {
    path: 'add',
    component: AddAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
