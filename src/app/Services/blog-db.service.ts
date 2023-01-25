import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogDbService {
  constructor(private http: HttpClient) {}

  signup(data: any) {
    return this.http
      .post<any>('http://localhost:8000/api/angularblogusers', data)
      .pipe(retry(5), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): any {
    alert('Unable to Register');
    console.log(error.message);
  }

  login(data: any) {
    return this.http
      .post<any>('http://localhost:8000/api/userlogin', data)
      .pipe(retry(5), catchError(this.handleLoginError));
  }

  handleLoginError(error: HttpErrorResponse): any {
    alert('Login Failed');
    console.log(error.message);
  }
}
