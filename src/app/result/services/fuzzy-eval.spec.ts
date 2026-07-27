import { TestBed } from '@angular/core/testing';

import { FuzzyEval } from './fuzzy-eval';

describe('FuzzyEval', () => {
  let service: FuzzyEval;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuzzyEval);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
