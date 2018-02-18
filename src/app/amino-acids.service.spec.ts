import { TestBed, inject } from '@angular/core/testing';

import { AminoAcidsService } from './amino-acids.service';

describe('AminoAcidsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AminoAcidsService]
    });
  });

  it('should be created', inject([AminoAcidsService], (service: AminoAcidsService) => {
    expect(service).toBeTruthy();
  }));
});
