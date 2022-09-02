import { TestBed } from '@angular/core/testing';

import { PreLoadService } from './pre-load.service';

describe('PreLoadService', () => {
  let service: PreLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
