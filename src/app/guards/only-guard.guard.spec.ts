import { TestBed } from '@angular/core/testing';

import { OnlyGuardGuard } from './only-guard.guard';

describe('OnlyGuardGuard', () => {
  let guard: OnlyGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
