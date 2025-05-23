import { TestBed } from '@angular/core/testing';

import { ConnectLinksService } from './connect-links.service';

describe('ConnectLinksService', () => {
  let service: ConnectLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
