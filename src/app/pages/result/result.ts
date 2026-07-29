import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KikiShapeComponent } from "../../components/shapes/kiki-shape/kiki-shape";
import { BoubaShapeComponent } from "../../components/shapes/bouba-shape/bouba-shape";
import { Calc, ResultTemplate } from '../../services/core/calc';
import { BoubaShapeOutlineComponent } from "../../components/shapes/bouba-shape-outline/bouba-shape-outline";
import { KikiShapeOutlineComponent } from "../../components/shapes/kiki-shape-outline/kiki-shape-outline";
import { Nav } from "../../components/nav/nav";
@Component({
  selector: 'app-result',
  imports: [
    KikiShapeComponent,
    BoubaShapeComponent,
    BoubaShapeOutlineComponent,
    KikiShapeOutlineComponent,
    Nav
],
  templateUrl: './result.html',
  styleUrl: './result.css',
})

export class Result implements OnInit{
  private calcService = inject(Calc);

  private result: ResultTemplate | null = null;

  ngOnInit() : void {
    this.calcService.init_personality();
    this.result = this.calcService.onResult;
    this.initValue();
  }

  kiki_score: number = 0;
  bouba_score: number = 0;
  mid_score: number = 0;
  result_title: string = 'Waiting'
  result_score: number = 0;
  result_headline:  string = 'template';
  social_type: string = '';
  behavior_type: string = '';
  cognitive_type: string = '';
  drive_type: string = '';

  initValue(): void {
    if (this.result === null) return;

    this.kiki_score = Math.floor((100 / (this.result.kiki_score + this.result.bouba_score)) * this.result.kiki_score);
    this.bouba_score = 100 - this.kiki_score;
    this.mid_score = this.kiki_score;
    this.result_title = this.result.trait;
    this.result_score = ( this.kiki_score > this.bouba_score ) ? this.kiki_score : this.bouba_score;
    this.result_headline = 'Template';

    this.social_type = this.result.social;
    this.behavior_type = this.result.behavior;
    this.cognitive_type = this.result.cognitive;
    this.drive_type = this.result.drive;
  }
}
