import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendDerviceService {
  baseUri = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  name;
  constructor(private http: HttpClient) { }
  saveToken(data, name): Observable<any> {
    this.name = name;
    const url = `${this.baseUri}/create`;
    console.log(data);
    console.log(url);
    const payload = {
      Token: data,
      text: name
    };
    return this.http.post(url, payload);
  }

  // tslint:disable-next-line: typedef
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
