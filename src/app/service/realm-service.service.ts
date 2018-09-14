import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

export interface Realm {
  type: string;
  population: string;
  queue: boolean;
  status: boolean;
  name: string;
  slug: string;
  battlegroup: string;
  locale: string;
  timezone: string;
  connected_realms: string[];
}

export interface RootObject {
  realms: Realm[];
}

@Injectable({
  providedIn: 'root'
})
export class RealmServiceService {

  constructor(private http:HttpClient) { }

  configUrl = 'https://eu.api.battle.net/wow/realm/status?apikey=nvr9d4r4suamg52mvstz5a853u593424';

  getRealms() {
    return this.http.get<RootObject>(this.configUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
