import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Inventar } from './inventar';



@Injectable({
  providedIn: 'root'
})

export class InventarService {
  baseUrl = 'http://localhost:4200/api';
  inventar: Inventar[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Inventar[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(map((res) => {
      this.inventar = res['data'];
      return this.inventar;
    }),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! Noe gikk feil.');
  }
}

