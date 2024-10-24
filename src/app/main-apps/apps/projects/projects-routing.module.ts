import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'edit',
  component: EditProjectComponent
},
{
  path: 'add',
  component: AddProjectComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
