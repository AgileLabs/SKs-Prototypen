import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonsComponent } from './lessons/lessons.component';
import { LoginComponent } from './login/login.component';
import { WortschatzComponent } from './wortschatz/wortschatz.component';

const routes: Routes = [
  {
    path: 'lessons',
    component: LessonsComponent
  },
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
