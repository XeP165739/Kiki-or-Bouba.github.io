import { Component } from '@angular/core';
import { KikiShapeComponent } from '../components/shapes/kiki-shape/kiki-shape';
import { BoubaShapeComponent } from '../components/shapes/bouba-shape/bouba-shape';
import { KikiShapeOutlineComponent } from '../components/shapes/kiki-shape-outline/kiki-shape-outline';
import { BoubaShapeOutlineComponent } from '../components/shapes/bouba-shape-outline/bouba-shape-outline';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    KikiShapeComponent,
    BoubaShapeComponent,
    KikiShapeOutlineComponent,
    BoubaShapeOutlineComponent
  ],
  templateUrl: './landing.html'
})

export class Landing {
  onStart() { /* ... */ }
  onAbout() { /* ... */ }
}
