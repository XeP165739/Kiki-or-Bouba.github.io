import { Injectable, OnInit } from '@angular/core';
import { Answer } from '../../pages/quiz/quiz';
import { Question } from '../json/fetch';

export type TraitType = 'Kiki' | 'Bouba';
export type SocialType = 'Intovert' | 'Ambivert' | 'Extrovert';
export type BehaviorType = 'Structured' | 'Felxible' | 'Spontaneous';
export type CognitiveType = 'Analitical' | 'Pragmatic' | 'Intuitive';
export type DriveType = 'Security' | 'Balanced' | 'Dynamic';
export interface ResultTemplate {
  trait: TraitType;
  kiki_score: number,
  bouba_score: number,
  social: SocialType;
  behavior: BehaviorType;
  cognitive: CognitiveType;
  drive: DriveType;
}

@Injectable({
  providedIn: 'root',
})
export class Calc {
  private answers: Answer[] = [];
  private questions: Question[] = [];
  private trait_score: number[] = [0, 0];
  private social_score: number[] = [0, 0, 0];
  private behavior_score: number[] = [0, 0, 0];
  private cognitive_score: number[] = [0, 0, 0];
  private drive_score: number[] = [0, 0, 0];
  private current: number = 0;

  getAnswers(): Answer[] | null {
    return this.answers;
  }

  initCalc(){
    this.answers = [];
    this.questions = [];
    this.trait_score = [0,0];
    this.social_score = [0,0,0];
    this.behavior_score = [0,0,0];
    this.cognitive_score = [0,0,0];
    this.drive_score = [0,0,0];
    this.current = 0;
  }


  setCalc(questions: Question[], answers: Answer[]): void {
    this.questions = questions;
    this.answers = answers;
  }

  get current_answer(): Answer | null {
    if (this.answers.length <= 0) return null;

    return this.answers[this.current];
  }

  get current_question(): Question {
    return this.questions[this.current];
  }

  init_personality(): void {
    if (this.current_answer === null) return;

    const l_b = 0;
    const l_c = 0.45;

    const m_a = 0.25;
    const m_b = 0.5;
    const m_c = 0.75;

    const r_a = 0.55;
    const r_b = 1;

    for (let i: number = 0; i < this.questions.length; ++i) {
      const current_bias: number = this.current_answer === 'kiki' ? this.current_question.kiki_bias : 100 - this.current_question.bouba_bias;
      const x: number = current_bias / 100;
      const temp_score: number[] = [0, 0, 0];

      if (x < l_c) {
        temp_score[0] += (l_c - x) / (l_c - l_b);
      }

      if (m_a < x && x <= m_b) {
        temp_score[1] += (x - m_a) / (m_b - m_a);
      } else if (m_b < x && x < m_c) {
        temp_score[1] += (m_c - x) / (m_c - m_b);
      }
      
      if (r_a < x && x <= r_b) {
        temp_score[2] += (x - r_a) / (r_b - r_a);
      }

      this.set_trait_score();
      this.set_personality_score(temp_score);
      this.increment();
    }
  }

  private increment(): void {
    this.current++;
  }

  private set_trait_score(): void {
    if (this.current_answer === null) return;

    if (this.current_answer === 'kiki') {
      this.trait_score[0] += this.current_question.kiki_bias * this.current_question.weight;
    } else if (this.current_answer === 'bouba') {
      this.trait_score[1] += this.current_question.bouba_bias * this.current_question.weight;
    }
  }

  private set_personality_score(value: number[]): void {
    if (this.current_question.trait_group === 'group_1_social'){
      for(let i: number = 0; i < 3; ++i) this.social_score[i] += value[i];
    } else if (this.current_question.trait_group === 'group_2_spontaneity'){
      for(let i: number = 0; i < 3; ++i) this.behavior_score[i] += value[i];
    } else if (this.current_question.trait_group === 'group_3_cognitive'){
      for(let i: number = 0; i < 3; ++i) this.cognitive_score[i] += value[i];
    } else if (this.current_question.trait_group === 'group_4_drive'){
      for(let i: number = 0; i < 3; ++i) this.drive_score[i] += value[i];
    }
  }

  get onResult(): ResultTemplate {
    const result: ResultTemplate = {
      trait: (this.trait_score[0] > this.trait_score[1]) ? 'Kiki' : 'Bouba',
      kiki_score: this.trait_score[0],
      bouba_score: this.trait_score[1],
      social: (this.social_score[0] > this.social_score[1]) ? (this.social_score[0] > this.social_score[2]) ? 'Intovert' : 'Ambivert' : (this.social_score[1] > this.social_score[2]) ? 'Ambivert' : 'Extrovert',
      behavior: (this.behavior_score[0] > this.behavior_score[1]) ? (this.behavior_score[0] > this.behavior_score[2]) ? 'Structured' : 'Felxible' : (this.behavior_score[1] > this.behavior_score[2]) ? 'Felxible' : 'Spontaneous',
      cognitive: (this.cognitive_score[0] > this.cognitive_score[1]) ? (this.cognitive_score[0] > this.cognitive_score[2]) ? 'Analitical' : 'Pragmatic' : (this.cognitive_score[1] > this.cognitive_score[2]) ? 'Pragmatic' : 'Intuitive',
      drive: (this.drive_score[0] > this.drive_score[1]) ? (this.drive_score[0] > this.drive_score[2]) ? 'Security' : 'Balanced' : (this.drive_score[1] > this.drive_score[2]) ? 'Balanced' : 'Dynamic',
    }

    return result;
  }

  // init_social_score(): void {
  //   if (this.current_answer === null) return;

  //   const current_bias: number =
  //     this.current_answer === 'kiki'
  //       ? this.current_question.kiki_bias
  //       : 100 - this.current_question.bouba_bias;
  //   const x: number = current_bias / 100;

  //   // this.social_score[0] = (x - a) / (b - a) // left
  //   // c - x / c- b right side
  //   //Introverted  0 \ .5
  //   if (x < 0.5) {
  //     this.social_score[0] += (0.5 - x) / (0.5 - 0);
  //   }

  //   //Ambivert 0 / .5  && .5 \ 1
  //   if (0 < x && x <= 0.5) {
  //     this.social_score[1] += (x - 0) / (0.5 - 0);
  //   } else if (0.5 < x && x < 1) {
  //     this.social_score[1] += (1 - x) / (1 - 0.5);
  //   }

  //   // Extrovert .5 /
  //   if (x <= 1) {
  //     this.social_score[2] += (x - 0.5) / (1 - 0.5);
  //   }
  // }
}
