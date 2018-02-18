import { TestBed, inject } from '@angular/core/testing';

import { HomologyDataService } from './homology-data.service';

describe('HomologyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomologyDataService]
    });
  });

  it('should be created', inject([HomologyDataService], (service: HomologyDataService) => {
    expect(service).toBeTruthy();
  }));
});
