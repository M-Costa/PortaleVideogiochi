import { TestBed } from '@angular/core/testing';

import { ModListGuardService } from './mod-list-guard.service';

describe('ModListGuardService', () => {
  let service: ModListGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModListGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
