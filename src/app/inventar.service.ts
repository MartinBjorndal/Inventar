import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Inventar } from './inventar';



@Injectable({
  providedIn: 'root'
})

export class InventarService {
  baseUrl = 'https://api.inventar.torhelge.no/inventory/';
  inventar: Inventar;
  dbg: any;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Inventar> {
    return this.http.get(`${this.baseUrl}/read.php`, {responseType: 'text'}).pipe(map((res) => {
      this.inventar = JSON.parse(res);
      console.log(this.inventar['body']);
      return this.inventar;
    }),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! Noe gikk feil:          ' +    error['message']);
  }
}

