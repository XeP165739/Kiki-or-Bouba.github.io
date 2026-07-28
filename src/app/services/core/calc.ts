import { Injectable } from '@angular/core';
import { Answer, AnswerType } from '../../pages/quiz/quiz';

@Injectable({
  providedIn: 'root',
})

export class Calc {
  private answers: Answer[]  | null = null;

  getAnswers() : Answer[] | null {
    return this.answers;
  }

  setAnswers(answers: Answer[]) : void {
    this.answers = answers;
  }
}
