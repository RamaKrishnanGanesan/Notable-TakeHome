import { TestBed } from '@angular/core/testing';

import { NotableService } from './notable.service';

describe('NotableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotableService = TestBed.get(NotableService);
    expect(service).toBeTruthy();
  });
});
