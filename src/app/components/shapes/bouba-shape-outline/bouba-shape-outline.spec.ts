import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoubaShapeOutline } from './bouba-shape-outline';

describe('BoubaShapeOutline', () => {
  let component: BoubaShapeOutline;
  let fixture: ComponentFixture<BoubaShapeOutline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoubaShapeOutline],
    }).compileComponents();

    fixture = TestBed.createComponent(BoubaShapeOutline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
