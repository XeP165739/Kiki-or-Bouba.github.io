import { Component } from '@angular/core';
import { Nav } from "../components/nav/nav";
import { RouterOutlet } from "@angular/router";
import { KikiShapeOutlineComponent } from "../components/shapes/kiki-shape-outline/kiki-shape-outline";
import { BoubaShapeOutlineComponent } from "../components/shapes/bouba-shape-outline/bouba-shape-outline";

@Component({
  selector: 'app-main',
  imports: [Nav,
    RouterOutlet,
    KikiShapeOutlineComponent,
    BoubaShapeOutlineComponent],
  templateUrl: './main.html',
  styleUrl: './main.css',
})

export class Main {}
