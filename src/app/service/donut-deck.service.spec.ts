import { TestBed } from '@angular/core/testing';

import { DonutDeckService } from './donut-deck.service';

describe('DonutDeckService', () => {
  let service: DonutDeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutDeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
