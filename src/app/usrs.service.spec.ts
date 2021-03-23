import { TestBed } from '@angular/core/testing';

import { UsrsService } from './usrs.service';

describe('UsrsService', () => {
  let service: UsrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
