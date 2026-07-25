import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bouba-shape-outline',
  standalone: true,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 200 200"
      [class]="className"
      aria-hidden="true"
    >
      <path [attr.d]="d" fill="none" [attr.stroke]="color" stroke-width="2.5" />
    </svg>
  `,
  host: { '[class]': 'className' }
})
export class BoubaShapeOutlineComponent {
  @Input() size = 200;
  @Input() color = '#7C3AED';
  @Input() className = '';

  readonly d =
    'M100,28 C130,26 162,46 168,78 C174,110 158,148 132,162 C106,176 70,172 48,154 C26,136 24,102 36,74 C48,46 70,30 100,28 Z';
}
