import { Component, inject, OnInit } from '@angular/core';
import { KikiShapeComponent } from "../../components/shapes/kiki-shape/kiki-shape";
import { BoubaShapeComponent } from "../../components/shapes/bouba-shape/bouba-shape";
import { Router, RouterLink, ɵEmptyOutletComponent } from "@angular/router";
import { NgComponentOutlet } from "@angular/common";
import { Calc } from '../../services/core/calc';
import { BoubaShapeOutlineComponent } from "../../components/shapes/bouba-shape-outline/bouba-shape-outline";
import { KikiShapeOutlineComponent } from "../../components/shapes/kiki-shape-outline/kiki-shape-outline";
import { Answer } from '../quiz/quiz';
import { Nav } from "../../components/nav/nav";
@Component({
  selector: 'app-result',
  imports: [
    RouterLink,
    ɵEmptyOutletComponent,
    NgComponentOutlet,
    BoubaShapeOutlineComponent,
    KikiShapeOutlineComponent,
    Nav
],
  templateUrl: './result.html',
  styleUrl: './result.css',
})

export class Result implements OnInit{
  private routerService = inject(Router);
  private calcService = inject(Calc);

  answers!: Answer[];

  ngOnInit() : void {}

  kiki_score = 50;
  bouba_score = 100 - this.kiki_score;
  mid_score = this.kiki_score;
  result_title = 'Kiki';
  result_score = ( this.kiki_score > this.bouba_score ) ? this.kiki_score : this.bouba_score;
  result_headline = 'Sharp minded';

  onStart() {}

  onResult() {
    return KikiShapeComponent;
  }
}
