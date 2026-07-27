import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { About } from './about/about';
import { Result } from './result/result';

export const routes: Routes = [
  { path : '',
    component : MainLayout,
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: Landing },
      { path: 'about', component: About}
    ]
  }
  // { path : 'about', component : About },
  // { path : 'result', component : Result }
];
