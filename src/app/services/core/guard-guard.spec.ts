import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardGuard as guardGuard } from './guard-guard';

describe('guatrdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => guardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
