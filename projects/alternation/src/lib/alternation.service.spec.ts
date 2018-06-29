import { TestBed, inject } from '@angular/core/testing';

import { Alternation } from './alternation.service';

describe('AlternationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Alternation]
    });
  });

  it('should be created', inject([Alternation], (service: Alternation) => {
    expect(service).toBeTruthy();
  }));
});
