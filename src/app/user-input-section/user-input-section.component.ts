import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpeciesDataService } from '../species-data.service';
import { HomologyDataService } from '../homology-data.service';
import { AminoAcidsService } from '../amino-acids.service';
@Component({
  selector: 'app-user-input-section',
  templateUrl: './user-input-section.component.html',
  styleUrls: ['./user-input-section.component.css']
})
export class UserInputSectionComponent implements OnInit {
  species: Object[];
  selectedSpecies: String;
  aminoAcids: Array<String>;
  geneSymbol: String;
  positionValue: Number;
  aminoAcidLetter: String;
  transcriptsData: Array<Object>;
  loading: Boolean;
  messageForUser: String;

  constructor(private speciesDataService: SpeciesDataService,
    private homologyDataService: HomologyDataService,
    private aminoAcidsService: AminoAcidsService) { }

  ngOnInit() {
    this.species = this.speciesDataService.species;
    this.aminoAcids = this.aminoAcidsService.aminoAcids;
    this.selectedSpecies = 'homo_sapiens';
    this.geneSymbol = 'BRCA2';
    this.positionValue = 1000;
    this.aminoAcidLetter = 'S';
    this.transcriptsData = [];
    this.loading = false;
    this.messageForUser = '';
  }
  getTranscripts() {
    this.loading = true;
    const tempArray = [];
    this.homologyDataService.getData(this.selectedSpecies, this.geneSymbol)
      .subscribe((dataSet) => {
        if (dataSet['data']) {
          const transcripts = dataSet['data'][0].homologies;
          transcripts.filter((item) => {
            const sequence = item.source.align_seq;
            if (sequence.charAt(this.positionValue) === this.aminoAcidLetter) {
              (tempArray).push(item);
            }
          });
          this.transcriptsData = tempArray;
          this.loading = false;
          this.messageForUser = `${tempArray.length} Records found`;
        } else {
          this.loading = false;
          this.messageForUser = 'Error, please try again';
        }
      },
      error => {
        this.loading = false;
        console.log('error :', error);
      });
  }

}


