import { Component } from '@angular/core';
import { BoubaShapeComponent } from "../components/shapes/bouba-shape/bouba-shape";
import { KikiShapeComponent } from "../components/shapes/kiki-shape/kiki-shape";
import { RouterLink } from "@angular/router";

import questionsData from "../../../public/questions.js"
export type AnswerType = 'kiki' | 'bouba';

export interface Question {
  text: string;
  visual?: boolean;
  kiki?: string;
  bouba?: string;
}

@Component({
  selector: 'app-quiz',
  imports: [BoubaShapeComponent, KikiShapeComponent, RouterLink],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})

export class Quiz {
 // 1. Data loaded directly inside the component
  questions: Question[] = questionsData as Question[];

  current = 0;
  answers: AnswerType[] = [];
  selected: AnswerType | null = null;
  animating = false;

  get currentQuestion(): Question {
    return this.questions[this.current];
  }

  get progress(): number {
    return (this.current / this.questions.length) * 100;
  }

  choose(type: AnswerType): void {
    if (this.animating || this.selected) return;

    this.selected = type;
    this.animating = true;

    setTimeout(() => {
      const next = [...this.answers, type];
      if (this.current + 1 >= this.questions.length) {
        this.onComplete(next);
      } else {
        this.answers = next;
        this.current++;
        this.selected = null;
        this.animating = false;
      }
    }, 480);
  }
}
