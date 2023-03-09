import { TestBed } from '@angular/core/testing';

import { UmdiauruguaiService } from './umdiauruguai.service';

describe('UmdiauruguaiService', () => {
  let service: UmdiauruguaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UmdiauruguaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
