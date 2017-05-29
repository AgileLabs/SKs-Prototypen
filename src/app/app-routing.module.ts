import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WortschatzComponent } from './wortschatz/wortschatz.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'wortschatz',
    component: WortschatzComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
