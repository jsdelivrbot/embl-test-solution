import { TestBed, inject } from '@angular/core/testing';

import { SpeciesDataService } from './species-data.service';

describe('SpeciesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeciesDataService]
    });
  });

  it('should be created', inject([SpeciesDataService], (service: SpeciesDataService) => {
    expect(service).toBeTruthy();
  }));
});
