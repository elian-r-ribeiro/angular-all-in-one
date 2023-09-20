import { TestBed } from '@angular/core/testing';

import { NumbergeneratorService } from './numbergenerator.service';

describe('NumbergeneratorService', () => {
  let service: NumbergeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbergeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
