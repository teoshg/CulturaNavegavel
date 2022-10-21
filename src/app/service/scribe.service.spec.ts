import { TestBed } from '@angular/core/testing';

import { ScribeService } from './scribe.service';

describe('ScribeService', () => {
  let service: ScribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
