import { TestBed, inject } from '@angular/core/testing';

import { DimeService } from './dime.service';

describe('DimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DimeService]
    });
  });

  it('should be created', inject([DimeService], (service: DimeService) => {
    expect(service).toBeTruthy();
  }));
});
