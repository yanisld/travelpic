import { TestBed } from '@angular/core/testing';

import { BaladeService } from './balade.service';

describe('BaladeService', () => {
  let service: BaladeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaladeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
