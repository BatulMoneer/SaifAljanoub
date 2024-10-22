import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-apps/layout/main-layout/main-layout.component';
import { MainLayout2Component } from './visitor-apps/layout/main-layout2/main-layout2.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayout2Component,
    loadChildren: () => import('./visitor-apps/visitor-apps.module').then(m => m.VisitorAppsModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'apps',
    component: MainLayoutComponent,
    loadChildren: () => import('./main-apps/main-apps.module').then(m => m.MainAppsModule)
  },
  { //must be at last, for an unexsisting page
    path: '**',
    redirectTo: '/auth/notFound' // or design a page for it 404
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
