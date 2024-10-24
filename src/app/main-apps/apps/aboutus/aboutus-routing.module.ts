import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { TeamComponent } from './team/team.component';

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
    path: 'add',
    component: AddMemberComponent
  },
  {
    path: 'info',
    component: CompanyInfoComponent
  },
  {
    path: 'edit',
    component: EditMemberComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
