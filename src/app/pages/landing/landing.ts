import { Component } from '@angular/core';
import { KikiShapeComponent } from '../../components/shapes/kiki-shape/kiki-shape';
import { BoubaShapeComponent } from '../../components/shapes/bouba-shape/bouba-shape';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-landing',
  imports: [
    KikiShapeComponent,
    BoubaShapeComponent,
    RouterLink
],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})

export class Landing {}
