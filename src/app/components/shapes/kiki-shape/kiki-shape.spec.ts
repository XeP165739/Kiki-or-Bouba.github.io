import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KikiShape } from './kiki-shape';

describe('KikiShape', () => {
  let component: KikiShape;
  let fixture: ComponentFixture<KikiShape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KikiShape],
    }).compileComponents();

    fixture = TestBed.createComponent(KikiShape);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
