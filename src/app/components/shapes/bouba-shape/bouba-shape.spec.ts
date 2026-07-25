import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoubaShape } from './bouba-shape';

describe('BoubaShape', () => {
  let component: BoubaShape;
  let fixture: ComponentFixture<BoubaShape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoubaShape],
    }).compileComponents();

    fixture = TestBed.createComponent(BoubaShape);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
