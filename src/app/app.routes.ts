import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { About } from './pages/about/about';
import { Main } from './main/main';
import { guardGuard } from './services/core/guard-guard';

export const routes: Routes = [
  { path : '',
    component : Main,
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: Landing },
      { path: 'about', component: About },
    ]
  },
  {
    path : 'test',
    // component : Test,
    children: [
      { path: '', redirectTo: 'quiz', pathMatch: 'full' },
      { path: 'quiz', loadComponent: () => import('./pages/quiz/quiz').then((m) => m.Quiz) },
      { path: 'result', loadComponent: () => import('./pages/result/result').then((m => m.Result)), canActivate: [guardGuard]}
    ]
  },
];
