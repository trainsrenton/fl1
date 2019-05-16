import { TestBed } from '@angular/core/testing';

import { GetclubsService } from './clubs.service';

describe('GetclubsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetclubsService = TestBed.get(GetclubsService);
    expect(service).toBeTruthy();
  });
});
