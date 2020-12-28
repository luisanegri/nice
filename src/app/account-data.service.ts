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
      // The shareReplay prevents additional subscribers to the returned observable triggering
      // a new response, but you're creating a new one each time
      shareReplay(),
      retryWhen((errors) => {
        return errors.pipe(
          // determine a delay each time that there's an error
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
