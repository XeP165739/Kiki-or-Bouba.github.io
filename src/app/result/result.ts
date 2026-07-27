import { Component, Input } from '@angular/core';
import { KikiShapeComponent } from "../components/shapes/kiki-shape/kiki-shape";
import { BoubaShapeComponent } from "../components/shapes/bouba-shape/bouba-shape";
import { KikiShapeOutlineComponent } from "../components/shapes/kiki-shape-outline/kiki-shape-outline";
import { BoubaShapeOutlineComponent } from "../components/shapes/bouba-shape-outline/bouba-shape-outline";
import { RouterLink, ɵEmptyOutletComponent } from "@angular/router";
import { NgComponentOutlet } from "@angular/common";
@Component({
  selector: 'app-result',
  imports: [
    KikiShapeComponent,
    BoubaShapeComponent,
    KikiShapeOutlineComponent,
    BoubaShapeOutlineComponent,
    RouterLink,
    ɵEmptyOutletComponent,
    NgComponentOutlet
],
  templateUrl: './result.html',
  styleUrl: './result.css',
})

export class Result {
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
