import { TestBed } from '@angular/core/testing';

import { PasengerService } from './pasenger.service';

describe('PasengerService', () => {
  let service: PasengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
