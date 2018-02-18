import { Injectable } from '@angular/core';

@Injectable()
export class AminoAcidsService {
  aminoAcids: Array<String> = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Y', 'Z'
  ];

  constructor() { }

}
