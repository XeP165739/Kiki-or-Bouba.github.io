import { Injectable, OnInit } from '@angular/core';
import { Answer } from '../../pages/quiz/quiz';
import { Question } from '../json/fetch';

export type TraitType = 'Kiki' | 'Bouba';
export type SocialType = 'Intovert' | 'Ambivert' | 'Extrovert';
export type BehaviorType = 'Structured' | 'Felxible' | 'Spontaneous';
export type CognitiveType = 'Analitical' | 'Pragmatic' | 'Intuitive';
export type DriveType = 'Security' | 'Balanced' | 'Dynamic';

const socialDescriptions: Record<SocialType, string> = {
  Intovert: 'a focus on thoughtful internal processing',
  Ambivert: 'a balanced interaction with the world around you',
  Extrovert: 'an engaging and externally expressive energy',
};

const behaviorDescriptions: Record<BehaviorType, string> = {
  Structured: 'structured thinking and clear boundaries',
  Felxible: 'adaptable habits and open-ended approaches',
  Spontaneous: 'in-the-moment actions and dynamic fluid choices',
};

const cognitiveDescriptions: Record<CognitiveType, string> = {
  Analitical: 'bring precision, logic, and sharp focus',
  Pragmatic: 'deliver realistic, actionable, and efficient solutions',
  Intuitive: 'rely on rapid pattern-recognition and deep insight',
};

const driveDescriptions: Record<DriveType, string> = {
  Security: 'maintaining stability and grounded confidence',
  Balanced: 'sustaining steady harmony across changing environments',
  Dynamic: 'pushing momentum and exploring new possibilities',
};

const traitMeta: Record<TraitType, { metaphor: string; quality: string }> = {
  Kiki: {
    metaphor: 'the visual sharp points of a Kiki shape',
    quality: 'focus, precision, and quick decision-making',
  },
  Bouba: {
    metaphor: 'the smooth, rounded curves of a Bouba shape',
    quality: 'warmth, adaptability, and natural harmony',
  },
};

export interface ResultTemplate {
  trait: TraitType;
  kiki_score: number,
  bouba_score: number,
  social: SocialType;
  behavior: BehaviorType;
  cognitive: CognitiveType;
  drive: DriveType;
  description: string;
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

  private get_personality_sentence(trait: TraitType, social: SocialType, behavior: BehaviorType, cognitive: CognitiveType, drive: DriveType): string {
    const socialText = socialDescriptions[social];
    const behaviorText = behaviorDescriptions[behavior];
    const cognitiveText = cognitiveDescriptions[cognitive];
    const driveText = driveDescriptions[drive];
    const { metaphor, quality } = traitMeta[trait];

    return `Your answers indicate ${socialText} alongside a strong preference for ${behaviorText}. When facing challenges, you ${cognitiveText} while ${driveText}. Like ${metaphor}, you bring ${quality} into complex situations—defining you as a ${trait}.`;
  }

  get onResult(): ResultTemplate {
    const trait: TraitType = (this.trait_score[0] > this.trait_score[1]) ? 'Kiki' : 'Bouba';
    const social: SocialType = (this.social_score[0] > this.social_score[1]) ? (this.social_score[0] > this.social_score[2]) ? 'Intovert' : 'Ambivert' : (this.social_score[1] > this.social_score[2]) ? 'Ambivert' : 'Extrovert';
    const behavior: BehaviorType = (this.behavior_score[0] > this.behavior_score[1]) ? (this.behavior_score[0] > this.behavior_score[2]) ? 'Structured' : 'Felxible' : (this.behavior_score[1] > this.behavior_score[2]) ? 'Felxible' : 'Spontaneous';
    const cognitive: CognitiveType = (this.cognitive_score[0] > this.cognitive_score[1]) ? (this.cognitive_score[0] > this.cognitive_score[2]) ? 'Analitical' : 'Pragmatic' : (this.cognitive_score[1] > this.cognitive_score[2]) ? 'Pragmatic' : 'Intuitive';
    const drive: DriveType = (this.drive_score[0] > this.drive_score[1]) ? (this.drive_score[0] > this.drive_score[2]) ? 'Security' : 'Balanced' : (this.drive_score[1] > this.drive_score[2]) ? 'Balanced' : 'Dynamic';
    const description: string = this.get_personality_sentence(trait, social, behavior, cognitive, drive);

    const result: ResultTemplate = {
      trait: trait,
      kiki_score: this.trait_score[0],
      bouba_score: this.trait_score[1],
      social: social,
      behavior: behavior,
      cognitive: cognitive,
      drive: drive,
      description: description,
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
