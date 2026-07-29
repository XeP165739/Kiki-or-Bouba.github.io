import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { BoubaShapeComponent } from "../../components/shapes/bouba-shape/bouba-shape";
import { KikiShapeComponent } from "../../components/shapes/kiki-shape/kiki-shape";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

import { Fetch, Question, TraitType } from '../../services/json/fetch';
import { Calc } from '../../services/core/calc';

export type Answer = 'kiki' | 'bouba';

@Component({
  selector: 'app-quiz',
  imports: [
    BoubaShapeComponent,
    KikiShapeComponent,
    RouterLink,
  ],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})

export class Quiz implements OnInit{
  private routeService = inject(ActivatedRoute);
  private routerService = inject(Router);
  private fetchService = inject(Fetch);
  private calService = inject(Calc);

  questions: Question[] = [];
  is_ready = signal(false);

  async ngOnInit() : Promise<void> {
    this.questions = await this.fetchService.getData();
    this.initQuiz();

    setTimeout(() => {
      this.is_ready.set(true);
    }, 1000);

    console.log("Questions fetched: ", this.questions)
  }

  current = signal(0);
  answers: Answer[] = [];
  selected: Answer | null = null;
  animating = false;

  private initQuiz(){
    this.current.set(0);
    this.answers = [];
    this.selected = null;
    this.animating = false;
    this.calService.initCalc();
  }

  private increment(){
     this.current.set(this.current() + 1);
  }

  get currentQuestion(): Question {
    return this.questions[this.current()];
  }

  get progress(): number {
    return (this.current() / this.questions.length) * 100;
  }

  private onComplete(answers : Answer[]) : void {
    console.log("on_complete-ativated");
    this.calService.setCalc(this.questions, answers);
    this.routerService.navigate( ['..', 'result'] , { relativeTo: this.routeService });
  }

  choose(type: Answer): void {
    if (!this.is_ready() || this.animating || this.selected) return;

    this.selected = type;
    this.animating = true;

    setTimeout(() => {
      const next = [...this.answers, type];

      if (this.current() + 1 >= this.questions.length) {
        this.onComplete(next);
      } else {
        this.answers = next;
        this.increment();
        this.selected = null;
        this.animating = false;
      }
    }, 480);
  }
}
