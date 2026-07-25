import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KikiShapeOutline } from './kiki-shape-outline';

describe('KikiShapeOutline', () => {
  let component: KikiShapeOutline;
  let fixture: ComponentFixture<KikiShapeOutline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KikiShapeOutline],
    }).compileComponents();

    fixture = TestBed.createComponent(KikiShapeOutline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
