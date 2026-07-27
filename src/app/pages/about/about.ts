import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KikiShapeComponent } from '../../components/shapes/kiki-shape/kiki-shape';
import { BoubaShapeComponent } from '../../components/shapes/bouba-shape/bouba-shape';
@Component({
  selector: 'app-about',
  imports: [
    KikiShapeComponent,
    BoubaShapeComponent,
    RouterLink
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {
  onHome() {}
  onStart() {}
}
