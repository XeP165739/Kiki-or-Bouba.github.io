import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { About } from './pages/about/about';
import { Result } from './result/result';
import { Main } from './main/main';

export const routes: Routes = [
  { path : '',
    component : Main,
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: Landing },
      { path: 'about', component: About}
    ]
  }
  // { path : 'about', component : About },
  // { path : 'result', component : Result }
];
