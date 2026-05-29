import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { DetailComponent } from './features/detail/detail';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'details/:id',
    component: DetailComponent
  },

  {
    path: '**',
    redirectTo: ''
  }
];