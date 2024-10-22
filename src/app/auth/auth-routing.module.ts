import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {

    path: 'login',
    component: LoginComponent
  },

  {
    path: 'notFound',
    component: NotFoundComponent
  },
  { //must be at last, for an unexsisting page
    path: '**',
    redirectTo: 'notFound' // or design a page for it 404
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
