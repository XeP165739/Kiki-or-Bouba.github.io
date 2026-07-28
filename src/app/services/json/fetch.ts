import { Service } from '@angular/core';

export interface Question{
  question: string,
  kiki_answer: string,
  bouba_answer: string,
  kiki_bias: number,
  bouba_bias: number
}

@Service()
export class Fetch {
  constructor(){}

  async getData() : Promise<Question[]> {
    try {
      const response = await fetch('./questions.json');

      if(!response.ok) throw new Error("Fetching data failed. Status: " + response.status);

      const data = await response.json();
      return data as Question[];
    } catch (error) {
      console.error(error);
      return []
    }
  }
}
