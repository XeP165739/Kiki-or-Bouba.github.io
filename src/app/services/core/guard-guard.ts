import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Calc } from './calc';
import { Answer } from '../../pages/quiz/quiz';

export const guardGuard: CanActivateFn = (route, state) => {
  const calcService = inject(Calc);
  const router = inject(Router);

  const answers : Answer[] | null = calcService.getAnswers();

  if (answers && answers.length > 0 ) {
    return true;
  }

  router.navigate(['/landing']);
  return false;
};
