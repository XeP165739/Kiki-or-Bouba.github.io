import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KikiShapeComponent } from '../components/shapes/kiki-shape/kiki-shape';
import { BoubaShapeComponent } from '../components/shapes/bouba-shape/bouba-shape';
import { KikiShapeOutlineComponent } from '../components/shapes/kiki-shape-outline/kiki-shape-outline';
import { BoubaShapeOutlineComponent } from '../components/shapes/bouba-shape-outline/bouba-shape-outline';
@Component({
  selector: 'app-about',
  imports: [
    KikiShapeComponent,
    BoubaShapeComponent,
    KikiShapeOutlineComponent,
    BoubaShapeOutlineComponent,
    RouterLink
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {
  onHome() {}
  onStart() {}
}
