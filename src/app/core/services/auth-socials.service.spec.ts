import { TestBed } from '@angular/core/testing';

import { AuthSocialsService } from './auth-socials.service';

describe('AuthSocialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthSocialsService = TestBed.get(AuthSocialsService);
    expect(service).toBeTruthy();
  });
});
