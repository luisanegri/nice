import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { IAccountData, ITransactions } from './account-data';
import { Observable, throwError, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  catchError,
  tap,
  shareReplay,
  retryWhen,
  delayWhen,
} from 'rxjs/operators';

@Injectable()
export class AccountDataService {
  url = 'http://localhost:8080/api/getbalance';

  constructor(private http: HttpClient) {}

  getAccountData(): Observable<IAccountData> {
    return this.http.get<IAccountData>(this.url).pipe(
      tap(() => console.log('HTTP request executed')),
      catchError(this.handleError),
      shareReplay(),
      retryWhen((errors) => {
        return errors.pipe(
          delayWhen(() => timer(2000)),
          tap(() => console.log('retrying...'))
        );
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    console.log('Handling error and rethrowing it...', error);
    return throwError(error);
  }
}
