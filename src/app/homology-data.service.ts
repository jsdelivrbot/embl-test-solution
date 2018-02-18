import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HomologyDataService {

  constructor(private http: HttpClient) { }

  getData(species, symbol): Observable<Object> {
    const url = `http://rest.ensembl.org/homology/symbol/${species}/${symbol}?content-type=application/json`;
    return this.http.get(url)
    .pipe(
      catchError(this.handleError([]))
    );
  }
  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error('handleError :' , error.statusText);
      return of(result as T);
    };
  }
}
