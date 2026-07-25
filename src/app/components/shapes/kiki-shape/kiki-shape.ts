import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kiki-shape',
  standalone: true,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 200 200"
      [class]="className"
      aria-hidden="true"
    >
      <path [attr.d]="d" [attr.fill]="color" [attr.opacity]="opacity" />
    </svg>
  `,
  host: { '[class]': 'className' }
})

export class KikiShapeComponent {
  @Input() size = 200;
  @Input() color = '#E5311C';
  @Input() className = '';
  @Input() opacity = 1;

  get d(): string {
    return this.buildStar(100, 100, 92, 38, 12);
  }

  private buildStar(cx: number, cy: number, outerR: number, innerR: number, points: number): string {
    const path: string[] = [];
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points - Math.PI / 2;
      const r = i % 2 === 0 ? outerR : innerR;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      path.push((i === 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2));
    }
    return path.join(' ') + ' Z';
  }
}
