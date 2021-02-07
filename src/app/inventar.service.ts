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
  dbg: any;
  constructor(private http: HttpClient) { }


  getAll(): Observable<Inventar> {
    return this.http.get(`${this.baseUrl}/read.php`).pipe(map((res) => {;
      return res["body"] || { };
      
    }),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! Noe gikk feil:          ' +    error['message']);
  }
}

