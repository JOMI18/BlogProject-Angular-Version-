import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class APIsService {
  headers = new HttpHeaders({
    'X-RapidAPI-Key': '2fc13c756fmshaa4744dba7586efp1b2cdbjsnb4dd74d67415',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
  });

  constructor(private api: HttpClient) {}

  fetchmovies() {
    return this.api
      .get<any>('https://imdb-top-100-movies.p.rapidapi..com/', {
        headers: this.headers,
      })
      .pipe(retry(5), catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse): any {
    alert('Unable to Fetch');
    console.log(error.message);
  }
  //   AIOM DB - All In One Movie Database

  // FREEMIUM
  // By erik parker | Updated 2 months ago | Movies
}
