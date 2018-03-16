import { TestBed, inject } from '@angular/core/testing';

import { UserAgentServiceService } from './user-agent-service.service';

describe('UserAgentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAgentServiceService]
    });
  });

  it('should be created', inject([UserAgentServiceService], (service: UserAgentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
