import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authguardHrGuard } from './authguard-hr.guard';

describe('authguardHrGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authguardHrGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
