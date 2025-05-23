import { TestBed } from '@angular/core/testing';

import { GitApiCallService } from './git-api-call.service';

describe('GitApiCallService', () => {
  let service: GitApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
