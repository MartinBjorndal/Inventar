import { Bruker } from './bruker';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BrukerService {
  baseUrl = 'https://api.inventar.torhelge.no/users/';
  users: Bruker[];
  user: Bruker;
  dbg: any;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Bruker> {
    return this.http.get(`${this.baseUrl}/read.php`, {responseType: 'text'}).pipe(map((res) => {
      this.users = JSON.parse(res);
      console.log(this.users);
      return this.users;
    }),
    catchError(this.handleError));
  }

  getSingle(uid): Observable<Bruker> {
    return this.http.get(`${this.baseUrl}/read_single.php?uid=`+ uid + "`", {responseType: 'text'}).pipe(map((res) => {
      return res;
      
    }),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! Noe gikk feil:          ' +    error['message']);
  }
}

