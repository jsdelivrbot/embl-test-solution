import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpeciesDataService } from './species-data.service';
import { AppComponent } from './app.component';
import { UserInputSectionComponent } from './user-input-section/user-input-section.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HomologyDataService } from './homology-data.service';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AminoAcidsService } from './amino-acids.service';


@NgModule({
  declarations: [
    AppComponent,
    UserInputSectionComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [ SpeciesDataService, AminoAcidsService, HomologyDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
